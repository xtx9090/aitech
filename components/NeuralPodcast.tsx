
import React, { useState } from 'react';

interface NeuralPodcastProps {
  postTitle: string;
  postContent: string;
}

const NeuralPodcast: React.FC<NeuralPodcastProps> = ({ postTitle, postContent }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const startPodcast = () => {
    setIsGenerating(true);
    setTimeout(() => {
      alert("SYSTEM_ERROR: API_OFFLINE. 神经网络播客引擎无法连接。");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="my-10 hud-border bg-gradient-to-r from-purple-950/20 to-cyan-950/20 p-8 relative group">
      <div className="absolute top-2 right-4 text-[8px] font-cyber text-purple-900/40 uppercase tracking-widest">Neural_Podcast_Node_v4</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex -space-x-4 relative">
          <div className="w-16 h-16 rounded-full border-2 border-purple-500 bg-zinc-900 flex items-center justify-center overflow-hidden grayscale">
             <i className="fas fa-user-tie text-2xl text-purple-400"></i>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-cyan-500 bg-zinc-900 flex items-center justify-center overflow-hidden grayscale">
             <i className="fas fa-microphone-lines text-2xl text-cyan-400"></i>
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <h4 className="font-cyber text-sm text-white uppercase tracking-[0.2em]">Intel_Dialogue_Stream</h4>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">
            [ 播客生成模块目前处于离线状态 ]
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <button 
              onClick={startPodcast}
              disabled={isGenerating}
              className="px-8 py-2 hud-border border-purple-500 text-purple-500 font-cyber text-[10px] hover:bg-purple-500 hover:text-black transition-all flex items-center gap-2 group"
            >
              {isGenerating ? (
                <><i className="fas fa-cog fa-spin"></i> ATTEMPTING_CONNECTION...</>
              ) : (
                <><i className="fas fa-play"></i> [GENERATE_NEURAL_PODCAST]</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralPodcast;
