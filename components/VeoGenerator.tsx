
import React, { useState } from 'react';

interface VeoGeneratorProps {
  title: string;
}

const VeoGenerator: React.FC<VeoGeneratorProps> = ({ title }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressText, setProgressText] = useState('');

  const generateVideo = () => {
    setIsGenerating(true);
    setProgressText('INITIALIZING_VEO_RENDERER...');
    
    setTimeout(() => {
      setProgressText('ERROR: API_DISABLED_BY_OPERATOR');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="my-10 hud-border bg-black/60 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
            <i className="fas fa-video text-cyan-500 text-xs animate-pulse"></i>
          </div>
          <div>
            <h4 className="font-cyber text-[10px] text-white uppercase tracking-widest">Temporal_Visual_Engine</h4>
            <p className="text-[8px] text-cyan-900 font-cyber">MODEL_VEO_OFFLINE / STATUS: DISABLED</p>
          </div>
        </div>
        
        {!videoUrl && !isGenerating && (
          <button 
            onClick={generateVideo}
            className="px-6 py-2 bg-transparent border border-cyan-500 text-cyan-500 font-cyber text-[9px] hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)]"
          >
            [MATERIALIZE_CINEMATIC]
          </button>
        )}
      </div>

      {isGenerating && (
        <div className="h-48 flex flex-col items-center justify-center bg-zinc-950/50 border border-dashed border-cyan-900/30">
          <div className="w-3/4 h-1 bg-zinc-900 mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-500 animate-loading-bar shadow-[0_0_10px_#00f3ff]"></div>
          </div>
          <span className="text-[10px] font-cyber text-cyan-500 animate-pulse">{progressText}</span>
        </div>
      )}

      {videoUrl && (
        <div className="animate-fade-in group">
          <video src={videoUrl} autoPlay loop muted className="w-full aspect-video object-cover" />
        </div>
      )}
    </div>
  );
};

export default VeoGenerator;
