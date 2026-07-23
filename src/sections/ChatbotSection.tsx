import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Shield, Terminal, Key, Info, RefreshCw, X } from 'lucide-react';
import { SYSTEM_INSTRUCTION } from '../data/hassaanData';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotSectionProps {
  geminiKey: string;
  setGeminiKey: (key: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotSection({ geminiKey, setGeminiKey, isOpen, onClose }: ChatbotSectionProps) {
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [keyInput, setKeyInput] = useState(geminiKey);
  const [botAvatarStyle, setBotAvatarStyle] = useState<'bot' | 'human'>('bot');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hello! I am Hassaan Kayani's Virtual QA Twin, configured to run with cognitive testing insights. Paste your Gemini API key inside the settings console to launch direct model responses, or ask me a simulated SQA question!"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  useEffect(() => {
    setKeyInput(geminiKey);
  }, [geminiKey]);

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

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    setGeminiKey(keyInput);
    localStorage.setItem('GEMINI_API_KEY', keyInput);
    setShowSettings(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    if (geminiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
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
              temperature: 0.7,
              maxOutputTokens: 800
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
        setChatMessages(prev => [...prev, { sender: 'bot', text: "Cognitive twin packet loss detected. Check your network or key status in settings!" }]);
      } finally {
        setIsTyping(false);
      }
    } else {
      // Offline Demo Sim Responses
      setTimeout(() => {
        const textLower = userMsg.toLowerCase();
        let reply = "I am operating in demo mode. Please paste a Gemini API Key in the settings toggle to chat live with my LLM representative!";
        
        if (textLower.includes('experience') || textLower.includes('work') || textLower.includes('job')) {
          reply = "I work as an AI Engineer at Tritanium Global and as an R&D executive lead at Primus Leads LLC. Previously, I was Team Lead at Cloudwave Innovations.";
        } else if (textLower.includes('project') || textLower.includes('portfolio') || textLower.includes('repos')) {
          reply = "You can view my projects above: CBO Rural Billing system PWA, ultd-realestate listing platform, and ai-recruitment-auditor. Clicking the card links opens their code repositories.";
        } else if (textLower.includes('education') || textLower.includes('university') || textLower.includes('arid')) {
          reply = "I am in my final year of BS Software Engineering at UIIT PMAS-Arid Agriculture University, Rawalpindi. I serve as student lead in campus societies and representative to GDG Cloud Islamabad.";
        } else if (textLower.includes('fiverr') || textLower.includes('upwork') || textLower.includes('hire')) {
          reply = "You can hire me directly on Fiverr or Upwork! Tap 'Hire Me' at the top banner or bottom gateway section of my portfolio.";
        }
        
        setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[190] animate-fade-in"
        onClick={onClose}
      />

      {/* Floating Chat Drawer Container */}
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#050a1f]/95 border-l border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] z-[200] flex flex-col animate-slide-in-right text-left"
      >
        {/* Drawer Header */}
        <div className="bg-[#050a1f] px-6 py-5 flex items-center justify-between border-b border-white/5 relative">
          <div className="flex items-center gap-3">
            {/* Avatar frame with switcher */}
            <div 
              className="relative w-9 h-9 rounded-full border border-[#0096ff]/30 overflow-hidden cursor-pointer bg-[#0a1535] flex items-center justify-center shrink-0 group"
              onClick={() => setBotAvatarStyle(prev => prev === 'bot' ? 'human' : 'bot')}
              title="Click to toggle avatar (AI vs Human)"
            >
              {botAvatarStyle === 'bot' ? (
                <svg viewBox="0 0 100 100" className="w-5 h-5 text-[#0096ff]">
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
                {botAvatarStyle === 'bot' ? 'hassaan_twin_v1.2' : 'hassaan_kayani'}
              </span>
              <span className="text-[9px] text-[#0096ff] font-mono tracking-widest uppercase block mt-1">
                {geminiKey ? 'Gemini Engine Active' : 'Offline Demo Mode'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Settings button */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                showSettings 
                  ? 'bg-[#ff3232]/10 border-[#ff3232]/25 text-[#ff3232]' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Settings API Key Drawer overlay */}
        {showSettings && (
          <div className="p-5 bg-[#0a1535] border-b border-white/10 animate-fade-in text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#0096ff]" />
              API Settings
            </h4>
            <p className="text-[10px] text-gray-400 leading-normal font-light mb-3">
              Enter your Gemini API key to activate natural language processing. Keys remain stored on your browser.
            </p>
            <form onSubmit={handleSaveKey} className="flex gap-2">
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Paste Gemini API Key..."
                className="flex-1 bg-[#050a1f] border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 text-xs text-white outline-none font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#0096ff]/20 to-[#ff3232]/20 border border-white/10 hover:border-white/25 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
              >
                Apply
              </button>
            </form>
          </div>
        )}

        {/* Message Logs */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-[#050a1f]/60">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                {msg.sender === 'user' ? 'Guest_User' : botAvatarStyle === 'bot' ? 'hassaan_twin' : 'hassaan'}
              </span>
              <div
                className={`p-3.5 rounded-2xl text-xs leading-relaxed font-light ${
                  msg.sender === 'user'
                    ? 'bg-[#0096ff]/10 border border-[#0096ff]/20 text-white rounded-tr-none text-right'
                    : 'bg-white/[0.02] border border-white/5 text-gray-300 rounded-tl-none text-left'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                {botAvatarStyle === 'bot' ? 'hassaan_twin' : 'hassaan'}
              </span>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0096ff] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0096ff] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0096ff] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 bg-[#050a1f] border-t border-white/5 flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 focus:border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all"
          />
          <button
            type="submit"
            className="p-3 rounded-xl bg-gradient-to-r from-[#0096ff]/20 to-[#ff3232]/20 border border-white/15 hover:border-white/25 text-white transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </>
  );
}
