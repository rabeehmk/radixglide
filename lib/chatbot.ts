/** Limits applied to every chat request — keeps abuse and token spend bounded. */
export const chatLimits = {
  maxMessages: 20,
  maxMessageLength: 2000,
};

export type ChatMessage = { role: "user" | "assistant"; content: string };

export function validateChat(body: unknown): ChatMessage[] | null {
  if (!body || typeof body !== "object" || !Array.isArray((body as { messages?: unknown }).messages)) return null;
  const messages = (body as { messages: unknown[] }).messages;
  if (messages.length === 0 || messages.length > chatLimits.maxMessages) return null;
  const valid = messages.every(
    (m): m is ChatMessage =>
      !!m &&
      typeof m === "object" &&
      ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
      typeof (m as ChatMessage).content === "string" &&
      (m as ChatMessage).content.trim().length > 0 &&
      (m as ChatMessage).content.length <= chatLimits.maxMessageLength,
  );
  if (!valid) return null;
  const list = messages as ChatMessage[];
  if (list[0].role !== "user" || list[list.length - 1].role !== "user") return null;
  return list;
}
