import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const PRESET = [
  "Hello! How can we help you today?",
  "Get a quote",
  "Career inquiry",
  "Emergency contact"
];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([PRESET[0]]);
  const [typing, setTyping] = useState(false);

  const handleQuickReply = (text) => {
    setMessages((prev) => [...prev, `You: ${text}`]);
    setTyping(true);
  };

  useEffect(() => {
    if (!typing) return;
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, "Thanks! A consultant will reach out shortly."]);
      setTyping(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [typing]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-white/10 bg-navy p-4 text-white shadow-lift">
          <div className="space-y-2 text-sm" aria-live="polite">
            {messages.map((msg, index) => (
              <p key={`${msg}-${index}`} className={msg.startsWith("You") ? "text-gold" : "text-white/80"}>
                {msg}
              </p>
            ))}
            {typing && <p className="text-xs text-white/60">Typing...</p>}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESET.slice(1).map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-lift"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        <MessageCircle size={18} />
      </button>
    </div>
  );
};
