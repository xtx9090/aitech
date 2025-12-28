
import React, { useState } from 'react';

interface AIAnalysisConsoleProps {
  content: string;
  title: string;
}

const AIAnalysisConsole: React.FC<AIAnalysisConsoleProps> = ({ content, title }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [progress, setProgress] = useState(0);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setAnalysis("ERROR: API_DISABLED. 智能分析模块目前处于离线状态。");
          setIsAnalyzing(false);
          return 100;
        }
        return p + 5;
      });
    }, 100);
  };

  const playVoice = () => {
    alert("SYSTEM_MESSAGE: 语音合成引擎已禁用。");
  };

  return (
    <div className="my-8 hud-border bg-cyan-950/10 p-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-2 opacity-10 text-[40px] font-cyber pointer-events-none">AI_CORE</div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
        <div>
          <h4 className="text-cyan-400 font-cyber text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
            <i className="fas fa-brain animate-pulse"></i> Intelligent_Neural_Summary
          </h4>
          <p className="text-[10px] text-zinc-500 font-cyber">MODEL: GEMINI_OFFLINE / STATUS: DISABLED</p>
        </div>
        
        {!analysis && !isAnalyzing && (
          <button 
            onClick={runAnalysis}
            className="px-6 py-2 bg-cyan-500 text-black font-cyber text-[10px] hover:bg-white transition-all shadow-[0_0_15px_rgba(0,243,255,0.5)]"
          >
            [INITIATE_DECODE]
          </button>
        )}
      </div>

      {isAnalyzing && (
        <div className="space-y-4 animate-pulse">
          <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
            <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="font-cyber text-[9px] text-cyan-800 flex justify-between">
            <span>SCRAPING_NEURAL_NODES...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      )}

      {analysis && (
        <div className="animate-fade-in relative">
          <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
          <div className="text-zinc-300 text-sm leading-relaxed italic border-l border-cyan-900/50 pl-4 py-2 bg-black/20 mb-4">
            <span className="text-cyan-500 font-cyber text-[10px] block mb-2 uppercase tracking-tighter">/ System_Notice /</span>
            {analysis}
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={playVoice} 
              disabled={isSynthesizing}
              className={`flex items-center gap-2 font-cyber text-[10px] px-3 py-1 hud-border transition-all ${isSynthesizing ? 'text-zinc-600 border-zinc-800' : 'text-purple-400 hover:bg-purple-500 hover:text-black'}`}
            >
              <i className={`fas ${isSynthesizing ? 'fa-spinner fa-spin' : 'fa-volume-up'}`}></i> 
              {isSynthesizing ? 'SYNTHESIZING...' : 'LISTEN_TO_INTEL'}
            </button>
            <div className="text-[8px] font-cyber text-zinc-600">
              COMPLEXITY: <span className="text-purple-500">N/A</span>
            </div>
            <div className="text-[8px] font-cyber text-zinc-600">
              SAFETY_STATUS: <span className="text-cyan-500">OFFLINE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalysisConsole;
