"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, MessageCircle, SendHorizontal, X } from "lucide-react";
import { chatLimits, type ChatMessage } from "@/lib/chatbot";
import { whatsappLink } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

const suggestions = ["What services do you offer?", "How much does a website cost?", "How does your process work?"];

const greeting: ChatMessage = {
  role: "assistant",
  content: "Hi! I'm the RadixGlide assistant. Ask me anything about our services, process or how to get started.",
};

/** AI chat assistant panel backed by /api/chat. */
export function ChatBot({ className, onClose }: { className?: string; onClose?: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send(text: string) {
    const content = text.trim().slice(0, chatLimits.maxMessageLength);
    if (!content || busy) return;
    setInput("");
    // The greeting is UI-only; the API conversation must start with the visitor.
    const history = [...messages, { role: "user" as const, content }];
    const outgoing = history.slice(1).slice(-chatLimits.maxMessages);
    setMessages([...history, { role: "assistant", content: "" }]);
    setBusy(true);

    const setReply = (reply: string) =>
      setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: reply }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: outgoing }),
      });
      if (!res.ok || !res.body) {
        setReply(
          res.status === 503
            ? "Our AI assistant isn't available right now. Please reach us on WhatsApp or use the contact form."
            : "Sorry, I couldn't process that. Please try again.",
        );
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setReply(reply);
      }
      if (!reply.trim()) setReply("Sorry, I couldn't come up with an answer. Please contact our team directly.");
    } catch {
      setReply("Connection problem. Please check your internet and try again.");
    } finally {
      setBusy(false);
    }
  }

  const wa = whatsappLink();

  return (
    <div className={cn("flex h-[460px] flex-col overflow-hidden rounded-[24px] border border-midnight/[0.07] bg-white", className)}>
      <div className="flex items-center gap-3 border-b border-midnight/[0.07] bg-navy px-5 py-4 text-white">
        <span className="grid size-10 place-items-center rounded-2xl bg-electric text-midnight">
          <Bot className="size-5" />
        </span>
        <div>
          <p className="font-bold tracking-[-0.02em]">AI Assistant</p>
          <p className="text-xs text-steel">Instant answers, 24/7</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="ml-auto grid size-9 place-items-center rounded-full text-steel transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-snow px-4 py-4" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
            <p
              className={cn(
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed",
                m.role === "user" ? "rounded-br-md bg-navy text-white" : "rounded-bl-md border border-midnight/[0.07] bg-white text-midnight",
              )}
            >
              {m.content || <Loader2 className="size-4 animate-spin text-midnight/40" aria-label="Typing" />}
            </p>
          </div>
        ))}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="rounded-full border border-electric/25 bg-white px-3 py-1.5 text-xs font-semibold text-electric transition-colors hover:bg-electric hover:text-midnight"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-midnight/[0.07] p-3"
      >
        <label htmlFor="chatbot-input" className="sr-only">
          Message the AI assistant
        </label>
        <input
          id="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={chatLimits.maxMessageLength}
          placeholder="Type your question…"
          autoComplete="off"
          className="h-11 min-w-0 flex-1 rounded-full border border-midnight/10 bg-white px-4 text-[14px] text-midnight outline-none transition-all placeholder:text-midnight/35 focus:border-electric focus:ring-4 focus:ring-electric/10"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send message"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-white transition-all hover:bg-midnight active:scale-95 disabled:opacity-40"
        >
          {busy ? <Loader2 className="size-5 animate-spin" /> : <SendHorizontal className="size-5" />}
        </button>
      </form>
      {wa && (
        <p className="border-t border-midnight/[0.05] px-4 py-2 text-center text-[11px] text-midnight/45">
          AI answers may be imperfect. For anything important,{" "}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-electric hover:underline">
            talk to a human on WhatsApp
          </a>
          .
        </p>
      )}
    </div>
  );
}

/** Floating chat launcher (bottom-right) that opens the AI assistant on every page. */
export function FloatingChatBot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="RadixGlide AI assistant"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-x-3 bottom-24 z-[56] origin-bottom-right sm:inset-x-auto sm:bottom-28 sm:right-7 sm:w-[380px]"
          >
            <ChatBot onClose={() => setOpen(false)} className="h-[min(520px,calc(100dvh-8rem))] shadow-[0_25px_60px_-15px_rgba(7,26,51,0.45)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Chat with our AI assistant"}
        aria-expanded={open}
        className="group fixed bottom-5 right-5 z-[56] flex items-center gap-3 rounded-full border border-azure/40 bg-navy p-3.5 text-white shadow-[0_15px_40px_-10px_rgba(168,131,79,0.7)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
      >
        {open ? <X className="size-7" /> : <MessageCircle className="size-7" />}
        {!open && (
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[160px] group-hover:pr-1 sm:block">
            Ask AI
          </span>
        )}
      </button>
    </>
  );
}
