import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { validateChat } from "@/lib/chatbot";
import { chatSystemPrompt } from "@/lib/chatbot-prompt";

/**
 * AI assistant endpoint. Streams the reply as plain text.
 *
 *  - ANTHROPIC_API_KEY   Claude API key (https://console.anthropic.com). Without it the
 *                        endpoint returns 503 with `code: "not_configured"` and the chat
 *                        widget points visitors to WhatsApp / email instead.
 */

const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

export async function POST(request: Request) {
  if (!client) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const messages = validateChat(await request.json().catch(() => null));
  if (!messages) {
    return NextResponse.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  const stream = client.beta.messages.stream({
    model: "claude-opus-5-5",
    max_tokens: 2000,
    output_config: { effort: "low" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [{ type: "text", text: chatSystemPrompt, cache_control: { type: "ephemeral" } }],
    messages,
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode("Sorry, I can't help with that. Please contact our team directly."));
        }
      } catch (error) {
        console.error("[chat] stream failed", error);
        controller.enqueue(encoder.encode("\n\nSorry, something went wrong. Please try again or contact us on WhatsApp."));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
