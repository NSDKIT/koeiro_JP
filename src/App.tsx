import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Show content after 1 second
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show white screen for 5 seconds
  if (!showContent) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        {/* Optional: Add a subtle loading indicator */}
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Enhanced Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-700 cursor-pointer transform hover:scale-105">
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.1s' }}>P</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.2s' }}>U</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.3s' }}>L</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.4s' }}>G</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.5s' }}>R</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.6s' }}>I</span>
                  <span className="inline-block animate-float-up" style={{ animationDelay: '0.7s' }}>T</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Vision', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 animate-float-up"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <span className="relative z-10 font-medium">{item}</span>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                  </div>
                  <div className="absolute top-1 right-0 transform translate-x-2 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="w-0.5 h-0.5 bg-purple-400 rounded-full animate-float-delayed"></div>
                  </div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <div className="relative">
                <Menu className={`w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="pt-4 pb-2 space-y-2">
              {['About', 'Services', 'Vision', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transition-all duration-1000 ${
          isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}></div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10 text-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main handwritten text overlay */}
            <h1 className="text-4xl font-black mb-8 leading-tight relative">
              <div className="inline-block animate-fade-in-up handwritten-text text-gray-800 drop-shadow-lg">
                <span className="handwritten-char">飾</span>
                <span className="handwritten-char">ら</span>
                <span className="handwritten-char">ず</span>
                <span className="handwritten-char">、</span>
                <span className="handwritten-char">ぶ</span>
                <span className="handwritten-char">れ</span>
                <span className="handwritten-char">ず</span>
                <span className="handwritten-char">、</span>
              </div><br />
              <div className="text-blue-600 inline-block animate-fade-in-up-delayed handwritten-text drop-shadow-lg">
                <span className="handwritten-char">進</span>
                <span className="handwritten-char">め</span>
                <span className="handwritten-char">ば</span>
                <span className="handwritten-char">い</span>
                <span className="handwritten-char">い</span>
                <span className="handwritten-char">。</span>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 animate-fade-in-up-delayed-2">
              本音で動く人が、ちゃんと報われる社会を、<br />
              自らの手でつくっていく。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-3">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">私たちの事業を見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-shimmer"></div>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Content sections would continue here... */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8 text-gray-800 handwritten-text animate-fade-in-up">
            {['コ', 'ン', 'テ', 'ン', 'ツ', 'セ', 'ク', 'シ', 'ョ', 'ン'].map((char, index) => (
              <span key={index} className="handwritten-char">{char}</span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto handwritten-text animate-fade-in-up-delayed">
            {['こ', 'こ', 'に', '追', '加', 'の', 'コ', 'ン', 'テ', 'ン', 'ツ', 'が', '入', 'り', 'ま', 'す', '。', 'ヘ', 'ッ', 'ダ', 'ー', 'の', 'ア', 'ニ', 'メ', 'ー', 'シ', 'ョ', 'ン', 'を', 'お', '楽', 'し', 'み', 'く', 'だ', 'さ', 'い', '。'].map((char, index) => (
              <span key={index} className="handwritten-char">{char}</span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;