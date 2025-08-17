import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../common/AnimatedBackground';

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'career'
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [error, setError] = useState(false);
  const [titleGlitch, setTitleGlitch] = useState(false);
  const titleRef = useRef(null);
  const hoverTimeout = useRef(null);
  
  const correctPassword = "the5151@@";
    // 로그인 상태 체크 (새로 추가)
useEffect(() => {
  const authenticated = sessionStorage.getItem('authenticated');
  
  if (authenticated === 'true') {
    setCurrentPage('career');
  }
}, []);


  const careers = [
    { id: 'designer', title: '디자이너', icon: '🎨' },
    { id: 'publisher', title: '퍼블리셔', icon: '💻' },
    { id: 'planner', title: '기획자', icon: '📋' },
    { id: 'admin', title: '경영지원', icon: '💼' }
  ];

  // 타이틀 홀로그램 효과 및 2초 호버 글리치
  useEffect(() => {
    if (titleRef.current && currentPage === 'login') {
      const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
          setTitleGlitch(true);
          setTimeout(() => setTitleGlitch(false), 100);
        }, 2000);
      };
      
      const handleMouseLeave = () => {
        setTitleGlitch(false);
        if (hoverTimeout.current) {
          clearTimeout(hoverTimeout.current);
        }
      };
      
      titleRef.current.addEventListener('mouseenter', handleMouseEnter);
      titleRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        if (titleRef.current) {
          titleRef.current.removeEventListener('mouseenter', handleMouseEnter);
          titleRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
        if (hoverTimeout.current) {
          clearTimeout(hoverTimeout.current);
        }
      };
    }
  }, [currentPage]);

const handleSubmit = () => {
  if (password === correctPassword) {
    setIsUnlocking(true);
    setError(false);
    
    // 로그인 상태 저장
    sessionStorage.setItem('authenticated', 'true');
      
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
      
      setTimeout(() => {
        setCurrentPage('career');
        setIsUnlocking(false);
      }, 2000);
    } else {
      setError(true);
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
      setTimeout(() => setError(false), 2000);
    }
  };

const handleCareerSelect = (careerId) => {
  navigate(`/career/${careerId}`);
};

const handleBack = () => {
  setCurrentPage('login');
  setPassword('');
  setError(false);
};

  return (
    <AnimatedBackground>
      {currentPage === 'login' ? (
        /* 로그인 페이지 */
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className={`max-w-md w-full transform transition-all duration-1000 ${isUnlocking ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
            {/* 로고 섹션 */}
            <div className="text-center mb-12">
              <div className={`relative inline-block`} ref={titleRef}>
                {/* 타이틀 잔상/그림자 레이어들 */}
                <div className="absolute inset-0" style={{ opacity: 0.1, transform: 'translate(-1px, -1px)' }}>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                    <span className="metallic-text">THE FIFTY ONE</span>
                  </h1>
                </div>
                <div className="absolute inset-0" style={{ opacity: 0.1, transform: 'translate(1px, 1px)' }}>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                    <span className="metallic-text">THE FIFTY ONE</span>
                  </h1>
                </div>
                <div className="absolute inset-0" style={{ opacity: 0.1, transform: 'translate(0px, -1px)' }}>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                    <span className="metallic-text">THE FIFTY ONE</span>
                  </h1>
                </div>
                
                {/* 메인 타이틀 */}
                <h1 className={`text-5xl md:text-6xl font-bold tracking-wider transform transition-all duration-300 relative whitespace-nowrap`} style={{ marginBottom: '0.5rem' }}>
                  <span className={`metallic-text ${titleGlitch ? '' : ''}`}>
                    THE FIFTY ONE
                  </span>
                  {titleGlitch && (
                    <>
                      <span className="absolute inset-0 metallic-text whitespace-nowrap" style={{ 
                        clipPath: 'inset(0 0 50% 0)',
                        transform: 'translate(0.3px, -0.3px)',
                        opacity: titleGlitch ? 1 : 0.8
                      }}>
                        THE FIFTY ONE
                      </span>
                      <span className="absolute inset-0 metallic-text whitespace-nowrap" style={{ 
                        clipPath: 'inset(50% 0 0 0)',
                        transform: 'translate(-0.3px, 0.3px)',
                        opacity: titleGlitch ? 1 : 0.8,
                        filter: titleGlitch ? 'hue-rotate(90deg)' : 'none'
                      }}>
                        THE FIFTY ONE
                      </span>
                    </>
                  )}
                </h1>
                
                {/* 홀로그램 효과 */}
                <div className="absolute -inset-2 metallic-glow opacity-20 blur-xl" />
                <div className="absolute -inset-1 metallic-glow opacity-10 blur-md" />
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400 animate-pulse" />
                <p className="text-gray-400 text-sm uppercase tracking-widest hover:text-gray-300 transition-colors cursor-default">
                  Career Path Navigator
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400 animate-pulse" />
              </div>
            </div>

            {/* 패스워드 입력 폼 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 metallic-gradient rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative backdrop-blur-xl bg-black/90 rounded-2xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h2 className="text-xl font-medium text-center mb-8 text-gray-300 relative z-10">
                    접속 코드 입력
                  </h2>

                  <div className="space-y-6 relative z-10">
                    <div className="relative group/input">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && password && !isUnlocking && handleSubmit()}
                        placeholder="••••••••••"
                        className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-600 focus:outline-none transition-all duration-1000 ${
                          error 
                            ? 'border-red-500 shadow-red-500/50 shadow-lg animate-shake' 
                            : 'border-gray-600/50 focus:border-gray-400/50 focus:shadow-gray-400/10 focus:shadow-md'
                        }`}
                        disabled={isUnlocking}
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-all duration-300 text-sm hover:scale-110"
                      >
                        {showPassword ? 'HIDE' : 'SHOW'}
                      </button>
                      
                      {/* 입력 필드 하단 네온 라인 */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent opacity-0 group-focus-within/input:opacity-50 transition-opacity duration-1500" />
                    </div>

                    {error && (
                      <div className="relative overflow-hidden">
                        <p className="text-red-400 text-sm text-center animate-pulse font-mono">
                          INVALID CODE - ACCESS DENIED
                        </p>
                        <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={!password || isUnlocking}
                      className={`relative w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 overflow-hidden group/btn ${
                        !password || isUnlocking
                          ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                          : 'metallic-button text-white hover:shadow-lg hover:shadow-gray-500/30 transform hover:-translate-y-1 active:translate-y-0'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span className="font-semibold tracking-wide">
                          {isUnlocking ? 'INITIALIZING...' : '커리어패스 접속'}
                        </span>
                        <ChevronRight className={`w-5 h-5 ${isUnlocking ? 'animate-pulse' : 'group-hover/btn:translate-x-2 transition-transform'}`} />
                      </span>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-zinc-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-600 text-xs uppercase tracking-wider hover:text-gray-400 transition-colors duration-300 cursor-default">
                THE51 & THE51X Presents
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* 직군 선택 페이지 */
        <div className="min-h-screen px-4 py-8">
          {/* 뒤로가기 버튼 */}
          <button
            onClick={handleBack}
            className="absolute top-8 right-8 text-gray-500 hover:text-gray-300 transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>로그인 화면으로</span>
          </button>


          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-4xl w-full">
              {/* 타이틀 */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
                  <span className="metallic-text">당신의 직군을 선택해주세요</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  선택한 직군에 맞는 커리어 패스를 안내해드립니다
                </p>
              </div>

              {/* 직군 선택 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {careers.map((career) => (
                  <button
                    key={career.id}
                    onClick={() => handleCareerSelect(career.id)}
                    className="relative group"
                  >
<div className="absolute -inset-0.5 metallic-gradient rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500" />
                    
                    <div className="relative backdrop-blur-xl bg-black/80 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-4">{career.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">{career.title}</h3>
                        <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

{/* 성공 시 전환 효과 */}
{isUnlocking && (
  <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
    <div className="relative">
      <div className="absolute inset-0 bg-gray-400 blur-3xl opacity-50 animate-pulse" />
      <div className="relative text-4xl font-bold text-white animate-fade-in">
        <p className="metallic-text tracking-wider">
          ACCESS GRANTED
        </p>
      </div>
    </div>
  </div>
)}
    </AnimatedBackground>
  );
};

export default LandingPage;