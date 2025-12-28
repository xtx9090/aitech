
import React, { useState } from 'react';

interface DeepIntelProps {
  title: string;
}

const DeepIntel: React.FC<DeepIntelProps> = ({ title }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [intelData, setIntelData] = useState<string | null>(null);

  const decryptIntel = () => {
    setIsDecrypting(true);
    setTimeout(() => {
      setIntelData("AUTHENTICATION_ERROR: API_DISABLED. 情报流已切断。");
      setIsUnlocked(true);
      setIsDecrypting(false);
    }, 2000);
  };

  return (
    <div className="mt-20 hud-border p-8 bg-black/60 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-red-500/5 transition-opacity duration-1000 ${isUnlocked ? 'opacity-0' : 'opacity-100'}`}></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 flex items-center justify-center rounded border ${isUnlocked ? 'border-emerald-500 text-emerald-500' : 'border-red-500 text-red-500 animate-pulse'}`}>
          <i className={`fas ${isUnlocked ? 'fa-unlock' : 'fa-lock'}`}></i>
        </div>
        <div>
          <h4 className="font-cyber text-xs uppercase tracking-[0.4em] text-white">Encrypted_Deep_Intel_Stream</h4>
          <p className="text-[8px] font-cyber text-zinc-600">CLEARANCE: LEVEL_RED / STATUS: OFFLINE</p>
        </div>
      </div>

      {!isUnlocked ? (
        <div className="space-y-6">
          <div className="h-24 bg-zinc-900/50 flex items-center justify-center border border-dashed border-red-900/30">
            <span className="text-[10px] font-cyber text-red-900 opacity-50 tracking-widest">CONTENT_IS_RESTRICTED_BY_FIREWALL</span>
          </div>
          <button 
            onClick={decryptIntel}
            disabled={isDecrypting}
            className="w-full py-3 hud-border border-red-900 text-red-500 font-cyber text-[10px] hover:bg-red-500 hover:text-black transition-all flex items-center justify-center gap-3 group"
          >
            {isDecrypting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> BYPASSING_SECURITY_LAYER...
              </>
            ) : (
              <>
                <i className="fas fa-skull-crossbones group-hover:animate-bounce"></i> [INITIATE_DECRYPTION_PROTOCOL]
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-emerald-950/10 border-l-2 border-emerald-500 p-6 font-mono text-sm text-zinc-300 leading-relaxed relative">
            <div className="absolute top-2 right-2 text-[8px] font-cyber text-emerald-500/30 uppercase tracking-tighter">Decrypted_Output_v1.0</div>
            {intelData}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeepIntel;
