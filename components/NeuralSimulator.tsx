
import React, { useState } from 'react';

interface SimulationData {
  projectName: string;
  coreLogic: string;
}

const NeuralSimulator: React.FC = () => {
  const [input, setInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      alert("SIMULATION_ERROR: API_CORE_DISABLED. 架构合成模块已禁用。");
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="my-12 hud-border bg-[#050b15]/80 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h3 className="font-cyber text-sm text-cyan-400 uppercase tracking-[0.3em]">Neural_Arch_Simulator</h3>
          <p className="text-[9px] font-cyber text-zinc-600">STATUS: OFFLINE_MODE</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER_TECH_CONCEPT..."
            className="bg-cyan-950/20 border border-cyan-900/50 px-4 py-2 text-xs font-cyber text-cyan-100 outline-none focus:border-cyan-500 transition-all flex-1 md:w-64"
          />
          <button 
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-6 py-2 bg-cyan-500 text-black font-cyber text-[10px] hover:bg-white transition-all disabled:opacity-50"
          >
            {isSimulating ? '[COMPUTING...]' : '[SIMULATE]'}
          </button>
        </div>
      </div>

      <div className="h-64 border border-dashed border-cyan-900/20 flex items-center justify-center">
        <span className="text-[10px] font-cyber text-cyan-900/50 animate-pulse">AWAITING_CORE_INPUT_FOR_PROJECTION (API_OFFLINE)</span>
      </div>
    </div>
  );
};

export default NeuralSimulator;
