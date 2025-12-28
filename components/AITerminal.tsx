
import React, { useState, useRef, useEffect } from 'react';

const AITerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const toggleLiveLink = () => {
    alert("SYSTEM_MESSAGE: Live Neural Link 已禁用。");
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', text: "TERMINAL_OFFLINE: 目前无法建立神经链路。API 接口已禁用。"
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[380px] h-[550px] bg-[#050b15]/95 backdrop-blur-2xl hud-border flex flex-col shadow-[0_0_50px_rgba(0,243,255,0.2)] animate-scale-in origin-bottom-right">
          <div className="p-4 border-b border-cyan-900/50 flex justify-between items-center bg-cyan-950/20">
            <span className="font-cyber text-[10px] text-cyan-400 tracking-widest flex items-center gap-2">
              <i className="fas fa-terminal"></i> NEURAL_TERMINAL_OFFLINE
            </span>
            <div className="flex gap-4">
              <button onClick={toggleLiveLink} className="text-cyan-900 hover:text-cyan-400 transition-colors">
                <i className="fas fa-microphone"></i>
              </button>
              <button onClick={() => setIsOpen(false)} className="text-cyan-900 hover:text-cyan-400 transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide text-[11px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${m.role === 'user' ? 'bg-cyan-900/40 border border-cyan-500/30' : 'bg-zinc-900/60 border border-purple-900/30'}`}>
                  <div className="mb-1 text-[8px] font-cyber opacity-30">{m.role.toUpperCase()}</div>
                  <div className="leading-relaxed whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
            {isTyping && <div className="flex justify-start"><div className="bg-zinc-900/60 p-3 rounded animate-pulse text-cyan-500 font-cyber">DECODING_DATA_STREAM...</div></div>}
          </div>

          <div className="p-4 bg-black/40 border-t border-cyan-900/30 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="QUERY_CORE (OFFLINE)..." className="flex-1 bg-cyan-950/20 border border-cyan-900/50 px-3 py-2 outline-none font-cyber text-xs text-cyan-100 focus:border-cyan-500 transition-all" />
            <button onClick={handleSend} className="w-10 h-10 bg-cyan-500 text-black flex items-center justify-center hover:bg-white transition-colors"><i className="fas fa-paper-plane text-xs"></i></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 bg-cyan-500 text-black rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)] flex items-center justify-center hover:scale-110 hover:bg-white transition-all group">
          <i className="fas fa-comment-dots text-xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default AITerminal;
