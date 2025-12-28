
import React, { useState, useEffect, useMemo } from 'react';
import { SITE_NAME, SITE_SUBTITLE, POSTS } from '../constants';

interface HeaderProps {
  onHome: () => void;
  onAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHome, onAbout }) => {
  const [typedText, setTypedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchAnalysis, setSearchAnalysis] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  
  const fullText = SITE_SUBTITLE;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i = (i + 1) % (fullText.length + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [fullText]);

  const handleSemanticSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setSearchAnalysis("ERROR: API_CORE_OFFLINE. 语义搜索功能已禁用。");
      setIsSearching(false);
    }, 1000);
  };

  const navItems = useMemo(() => [
    { label: 'TERMINAL', icon: 'fa-home', onClick: onHome },
    { label: 'DATABASE', icon: 'fa-database', onClick: onHome },
    { label: 'PROFILE', icon: 'fa-user-astronaut', onClick: onAbout },
  ], [onHome, onAbout]);

  return (
    <>
      <header className="relative h-[65vh] flex flex-col justify-center items-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920)', filter: 'brightness(0.4)' }}
        ></div>
        
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050b15]"></div>

        <div className="relative z-10 text-center space-y-6 px-4">
          <div className="inline-block px-3 py-1 border border-cyan-500 text-cyan-500 text-[10px] font-cyber mb-2 animate-pulse">
            SYSTEM_STATUS: LOCAL_ONLY_MODE
          </div>
          <h1 
            onClick={onHome}
            className="text-5xl md:text-7xl font-cyber font-bold tracking-tighter cursor-pointer hover:text-cyan-400 transition-all drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] glitch-text"
            data-text={SITE_NAME.split(' ')[0]}
          >
            {SITE_NAME.split(' ')[0]}<span className="text-cyan-500">_</span>
          </h1>
          <div className="text-sm md:text-lg font-cyber h-6 flex items-center justify-center text-cyan-200/70 tracking-widest">
            {typedText}<span className="w-2 h-5 bg-cyan-500 ml-1 animate-pulse"></span>
          </div>
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-6 z-30">
          <div className="text-xl font-cyber font-bold text-cyan-500 tracking-tighter cursor-pointer" onClick={onHome}>
            IC_HORIZON v2.5
          </div>
          <div className="flex space-x-10 items-center">
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button 
                  key={item.label}
                  onClick={item.onClick} 
                  className="group relative px-2 py-1"
                >
                  <span className="text-[10px] font-cyber text-zinc-400 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <i className={`fas ${item.icon}`}></i> {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-cyan-400 hover:scale-110 transition-transform p-2 bg-cyan-950/20 border border-cyan-900/30 rounded"
            >
              <i className="fas fa-satellite-dish"></i>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-cyan-400"
            >
              <i className="fas fa-terminal"></i>
            </button>
          </div>
        </nav>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b15]/95 backdrop-blur-xl animate-fade-in p-4">
          <div className="hud-border bg-black/80 w-full max-w-2xl shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden">
            <form onSubmit={handleSemanticSearch} className="flex items-center px-8 py-6 border-b border-cyan-900/50">
              <span className="text-cyan-500 font-cyber mr-4">QUERY:</span>
              <input 
                type="text" 
                placeholder="INPUT_TARGET_DATA..." 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xl font-cyber text-cyan-100 placeholder-cyan-900"
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="text-cyan-900 hover:text-cyan-400 transition-colors">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </form>
            
            <div className="p-8 space-y-6">
              {isSearching ? (
                <div className="text-center font-cyber text-xs text-cyan-400 tracking-widest animate-pulse py-10">
                  [ SEMANTIC_ANALYSIS_IN_PROGRESS... ]
                </div>
              ) : searchAnalysis ? (
                <div className="animate-fade-in bg-cyan-950/20 p-4 border-l-2 border-cyan-500 space-y-2">
                   <div className="text-[8px] font-cyber text-cyan-700 uppercase">AI_Associative_Mapping</div>
                   <div className="text-xs text-zinc-300 italic">"{searchAnalysis}"</div>
                </div>
              ) : (
                <div className="text-center font-cyber text-[10px] text-cyan-900/50 tracking-widest py-10">
                  [ SCANNING DATABASE FOR AGI / LLM / QUANTUM_ARCH ]
                </div>
              )}

              {searchQuery && (
                <div className="space-y-3">
                  <div className="text-[8px] font-cyber text-zinc-600 uppercase mb-2">Relevant_Database_Entries</div>
                  {POSTS.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3).map(p => (
                    <div key={p.id} className="flex justify-between items-center text-xs p-3 bg-zinc-900/50 border border-zinc-800/50 hover:border-cyan-500 transition-all cursor-pointer">
                      <span className="truncate">{p.title}</span>
                      <i className="fas fa-chevron-right text-[10px] text-cyan-900"></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
