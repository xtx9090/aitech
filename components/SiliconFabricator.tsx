
import React, { useState } from 'react';

const SiliconFabricator: React.FC = () => {
  const [target, setTarget] = useState('');
  const [isFabing, setIsFabing] = useState(false);

  const fabricateChip = () => {
    setIsFabing(true);
    setTimeout(() => {
      alert("FAB_ERROR: LITHOGRAPHY_LINK_OFFLINE. 芯片制程合成模块已禁用。");
      setIsFabing(false);
    }, 2000);
  };

  return (
    <div className="my-10 hud-border bg-black/80 p-8 overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <div className="space-y-1">
          <h3 className="font-cyber text-sm text-amber-500 uppercase tracking-[0.3em]">Silicon_Fab_Construct</h3>
          <p className="text-[9px] font-cyber text-zinc-600">STATUS: OFFLINE_MODE</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <input 
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="DESIGN_TARGET_SCENARIO..."
            className="bg-amber-950/10 border border-amber-900/30 px-4 py-2 text-xs font-cyber text-amber-100 outline-none focus:border-amber-500 transition-all flex-1 md:w-64"
          />
          <button 
            onClick={fabricateChip}
            disabled={isFabing}
            className="px-6 py-2 bg-amber-600 text-black font-cyber text-[10px] hover:bg-white transition-all disabled:opacity-50"
          >
            {isFabing ? '[FABRICATING...]' : '[INIT_CONSTRUCT]'}
          </button>
        </div>
      </div>

      <div className="h-64 border border-dashed border-amber-900/20 flex flex-col items-center justify-center opacity-30">
        <i className="fas fa-microchip text-4xl text-amber-900 mb-4"></i>
        <span className="text-[10px] font-cyber text-amber-900 uppercase">Awaiting_Hardware_Directives (API_OFFLINE)</span>
      </div>
    </div>
  );
};

export default SiliconFabricator;
