import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, X } from 'lucide-react';
import { SYSTEM_INSTRUCTION } from '../data/hassaanData';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotSectionProps {
  geminiKey?: string;
  setGeminiKey?: (key: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const PERMANENT_GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || (typeof window !== 'undefined' ? atob("QVEuQWI4Uk42SndaYTBtNEV5ZkVBWVI1RW1PTWhmbXYyZm5XRV9pd2FpalVILVI3dzRMTGc=") : "");

// Helper component to cleanly format Markdown without raw ** symbols or unparsed URLs
function FormattedMessageText({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <div className="space-y-1 text-xs leading-relaxed font-light text-neutral-200">
      {lines.map((line, lIdx) => {
        if (!line.trim()) return <div key={lIdx} className="h-1" />;

        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
        const cleanLine = isBullet ? line.trim().slice(2) : line;

        const parts: React.ReactNode[] = [];
        const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|\bhttps?:\/\/[^\s<]+)/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(cleanLine)) !== null) {
          if (match.index > lastIndex) {
            parts.push(cleanLine.substring(lastIndex, match.index));
          }

          const matchedStr = match[0];
          if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
            const inner = matchedStr.slice(2, -2);
            parts.push(
              <strong key={match.index} className="font-bold text-white">
                {inner}
              </strong>
            );
          } else if (matchedStr.startsWith('[') && matchedStr.includes('](')) {
            const title = matchedStr.substring(1, matchedStr.indexOf(']('));
            const url = matchedStr.substring(matchedStr.indexOf('](') + 2, matchedStr.length - 1);
            parts.push(
              <a
                key={match.index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-[#E50914] underline font-semibold hover:text-white transition-colors"
              >
                {title}
              </a>
            );
          } else if (matchedStr.startsWith('http://') || matchedStr.startsWith('https://')) {
            parts.push(
              <a
                key={match.index}
                href={matchedStr}
                target="_blank"
                rel="noreferrer"
                className="text-[#E50914] underline font-semibold hover:text-white transition-colors break-all"
              >
                {matchedStr}
              </a>
            );
          } else {
            parts.push(matchedStr);
          }

          lastIndex = regex.lastIndex;
        }

        if (lastIndex < cleanLine.length) {
          parts.push(cleanLine.substring(lastIndex));
        }

        return (
          <p key={lIdx} className={isBullet ? 'pl-3 relative' : ''}>
            {isBullet && <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#E50914] rounded-full" />}
            {parts}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatbotSection({ geminiKey, isOpen, onClose }: ChatbotSectionProps) {
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [botAvatarStyle, setBotAvatarStyle] = useState<'bot' | 'human'>('bot');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hello! I am Hassaan's Virtual AI Representative. Ask me anything about Software Engineering, SQA, or direct hiring profiles on Fiverr & Upwork!"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const activeKey = geminiKey || PERMANENT_GEMINI_KEY;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  // Escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${activeKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userMsg}` }]
            }
          ],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 600
          }
        })
      });

      if (!response.ok) {
        throw new Error('Gemini API return error status');
      }

      const data = await response.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (candidateText) {
        setChatMessages(prev => [...prev, { sender: 'bot', text: candidateText }]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Gemini call fail:', error);
      // Clean, direct fallback without fluff
      const textLower = userMsg.toLowerCase();
      let reply = "Direct AI connection check. What would you like to verify?";
      
      if (textLower.includes('fiverr') || textLower.includes('hire') || textLower.includes('work')) {
        reply = "Here is Hassaan's direct Fiverr profile link: https://www.fiverr.com/hassaankayani1";
      } else if (textLower.includes('upwork')) {
        reply = "Here is Hassaan's direct Upwork profile link: https://www.upwork.com/freelancers/~016d3a3d2b6da309a6";
      } else if (textLower.includes('email') || textLower.includes('contact')) {
        reply = "Direct Email: hassaanabdullahkayani@gmail.com";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[190] animate-fade-in"
        onClick={onClose}
      />

      {/* Floating Chat Drawer Container - Red & Black Theme */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0D0D0D] border-l border-neutral-800 shadow-[0_0_60px_rgba(229,9,20,0.15)] z-[200] flex flex-col animate-slide-in-right text-left"
      >
        {/* Drawer Header */}
        <div className="bg-[#0A0A0A] px-6 py-4 flex items-center justify-between border-b border-neutral-800 relative">
          <div className="flex items-center gap-3">
            {/* Avatar frame with switcher */}
            <div 
              className="relative w-9 h-9 rounded-full border border-[#E50914]/40 overflow-hidden cursor-pointer bg-[#E50914]/10 flex items-center justify-center shrink-0 group shadow-[0_0_12px_rgba(229,9,20,0.2)]"
              onClick={() => setBotAvatarStyle(prev => prev === 'bot' ? 'human' : 'bot')}
              title="Click to toggle avatar (AI vs Human)"
            >
              {botAvatarStyle === 'bot' ? (
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-[#E50914]">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="35" y="40" width="30" height="15" rx="3" fill="currentColor" />
                  <circle cx="42" cy="62" r="4" fill="currentColor" />
                  <circle cx="58" cy="62" r="4" fill="currentColor" />
                  <path d="M40 78 Q50 84 60 78" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              ) : (
                <img src="/hassaan-portrait.png" alt="Hassaan Portrait" className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <RefreshCw className="w-3 h-3 text-white animate-spin" />
              </div>
            </div>

            <div>
              <span className="font-bold text-white font-heading text-sm tracking-wide block leading-none">
                {botAvatarStyle === 'bot' ? 'HASSAAN_AI_TWIN' : 'HASSAAN_KAYANI'}
              </span>
              <span className="text-[9px] text-[#E50914] font-mono tracking-widest uppercase block mt-1 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#E50914] rounded-full animate-pulse" />
                Online &amp; Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#E50914] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Logs */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-[#000000]/90">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[88%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                {msg.sender === 'user' ? 'GUEST_USER' : botAvatarStyle === 'bot' ? 'HASSAAN_AI' : 'HASSAAN'}
              </span>
              <div
                className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#E50914] text-white rounded-tr-none text-right font-medium shadow-[0_2px_12px_rgba(229,9,20,0.3)]'
                    : 'bg-[#141414] border border-neutral-800 text-neutral-200 rounded-tl-none text-left'
                }`}
              >
                {msg.sender === 'user' ? (
                  <span>{msg.text}</span>
                ) : (
                  <FormattedMessageText text={msg.text} />
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                {botAvatarStyle === 'bot' ? 'HASSAAN_AI' : 'HASSAAN'}
              </span>
              <div className="p-3 bg-[#141414] border border-neutral-800 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 bg-[#0A0A0A] border-t border-neutral-800 flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask a question or request direct links..."
            className="flex-1 bg-[#141414] border border-neutral-800 focus:border-[#E50914] rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none transition-all"
          />
          <button
            type="submit"
            className="p-3 rounded-xl bg-[#E50914] hover:bg-[#b80710] text-white shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all cursor-pointer"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
