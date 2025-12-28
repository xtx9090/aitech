
import React, { useState, useEffect } from 'react';

interface IntelItem {
  title: string;
  snippet: string;
  url: string;
}

const GridIntel: React.FC = () => {
  const [intel, setIntel] = useState<IntelItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGlobalIntel = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIntel([
        {
          title: "API_CONNECTION_DISABLED",
          snippet: "外部情报抓取模块已根据系统策略禁用。",
          url: "#"
        },
        {
          title: "LOCAL_CACHE_EMPTY",
          snippet: "未检测到本地缓存的情报数据包。",
          url: "#"
        }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchGlobalIntel();
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-md hud-border p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3 font-cyber text-[10px] text-emerald-500 uppercase tracking-widest">
          <i className="fas fa-globe-asia animate-spin-slow"></i> Global_Grid_Feed
        </div>
        <button onClick={fetchGlobalIntel} className="text-emerald-900 hover:text-emerald-500 transition-colors">
          <i className="fas fa-sync-alt text-[10px]"></i>
        </button>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="animate-pulse space-y-2">
                <div className="h-2 w-2/3 bg-emerald-900/30 rounded"></div>
                <div className="h-2 w-full bg-emerald-900/10 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          intel.map((item, idx) => (
            <div key={idx} className="group relative border-l border-emerald-900/20 pl-4 py-1 hover:border-emerald-500 transition-colors">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                <h5 className="text-[11px] font-bold text-emerald-100 group-hover:text-emerald-400 transition-colors mb-1 uppercase tracking-tighter">
                  {item.title}
                </h5>
                <p className="text-[10px] text-zinc-600 line-clamp-2 leading-tight">
                  {item.snippet}
                </p>
              </a>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t border-emerald-900/10 flex justify-between items-center">
        <span className="text-[8px] font-cyber text-zinc-700 uppercase tracking-widest">Latency: 0ms</span>
        <span className="text-[8px] font-cyber text-emerald-900">OFFLINE_MODE</span>
      </div>
    </div>
  );
};

export default GridIntel;
