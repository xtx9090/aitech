
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import RightSide from './components/RightSide';
import PostDetail from './components/PostDetail';
import About from './components/About';
import AITerminal from './components/AITerminal';
import NeuralSimulator from './components/NeuralSimulator';
import SiliconFabricator from './components/SiliconFabricator';
import { POSTS } from './constants';
import { Post } from './types';

type View = 'list' | 'post' | 'about';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAsideHidden, setIsAsideHidden] = useState(false);
  const [view, setView] = useState<View>('list');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // 增加每页显示篇数

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setView('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setView('list');
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoAbout = () => {
    setView('about');
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = POSTS.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(POSTS.length / postsPerPage);

  const renderContent = () => {
    switch (view) {
      case 'post':
        return selectedPost ? <PostDetail post={selectedPost} onBack={handleGoHome} /> : null;
      case 'about':
        return <About />;
      case 'list':
      default:
        return (
          <div className="space-y-12">
            {/* Terminal Style Banner */}
            <div className="hud-border bg-black/40 p-4 border-l-4 border-cyan-500 font-mono text-[10px] text-cyan-400 mb-8 animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <span className="opacity-50 tracking-widest uppercase">/ CONNECTION_ESTABLISHED /</span>
                <span className="text-zinc-600">IP: 192.168.0.X</span>
              </div>
              <div className="space-y-1">
                <p>{">"} LOADING_CORE_DATABASE... [SUCCESS]</p>
                <p>{">"} SCANNING_NEURAL_TOPOLOGY... [OK]</p>
                <p>{">"} WELCOME_OPERATOR: GUEST_ID_{Math.floor(Math.random()*10000)}</p>
                <p className="animate-pulse">{">"} READY_FOR_DEEP_DIVE_...</p>
              </div>
            </div>

            {/* 神经仿真器入口 */}
            <NeuralSimulator />

            {/* 芯片构架生成器 (新优化) */}
            <SiliconFabricator />
            
            <div className="border-b border-cyan-900/20 pb-4 mb-8 flex justify-between items-end">
              <h2 className="font-cyber text-lg text-white flex items-center gap-3">
                <i className="fas fa-stream text-cyan-500"></i> PRIMARY_DATA_FEED
              </h2>
              <span className="text-[8px] font-cyber text-zinc-600 uppercase tracking-widest">Page_{currentPage}_of_{totalPages}</span>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {currentPosts.map((post, index) => (
                <PostCard 
                  key={post.id} 
                  post={post} 
                  layout={index % 2 === 0 ? 'left' : 'right'} 
                  onClick={() => handlePostClick(post)}
                />
              ))}
            </div>
            
            {totalPages > 1 && (
              <nav id="pagination" className="flex justify-center mt-20">
                <div className="flex space-x-3 items-center">
                  <button 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 hud-border flex items-center justify-center transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-cyan-500 hover:bg-cyan-500 hover:text-black'}`}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                    <button
                      key={num}
                      onClick={() => handlePageChange(num)}
                      className={`w-10 h-10 hud-border font-cyber text-xs transition-all ${
                        currentPage === num 
                          ? 'bg-cyan-500 text-black border-cyan-500' 
                          : 'text-zinc-500 hover:text-cyan-500 border-zinc-900'
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 hud-border flex items-center justify-center transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-cyan-500 hover:bg-cyan-500 hover:text-black'}`}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </nav>
            )}
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen relative z-10 ${isDarkMode ? 'dark bg-[#050b15] text-zinc-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* 动态背景背景 */}
      <div className="fixed inset-0 -z-10 bg-[#050b15] tech-grid opacity-20"></div>
      
      <Header onHome={handleGoHome} onAbout={handleGoAbout} />
      
      <main className="max-w-7xl mx-auto px-6 py-10 lg:flex gap-12 min-h-[60vh]">
        <div className={`flex-1 transition-all duration-700 ${isAsideHidden ? 'w-full' : ''}`}>
          {renderContent()}
        </div>

        {!isAsideHidden && (
          <aside className="hidden lg:block w-80 shrink-0">
            <Sidebar onPostClick={handlePostClick} />
          </aside>
        )}
      </main>

      <Footer />
      <RightSide 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        toggleAside={() => setIsAsideHidden(!isAsideHidden)}
      />
      
      {/* 全球智网对话终端 */}
      <AITerminal />
    </div>
  );
};

export default App;
