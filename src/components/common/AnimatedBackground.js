import React, { useState, useEffect, useRef } from 'react';

const AnimatedBackground = ({ 
  children, 
  particleCount = 200,
  gridAnimationSpeed = 1,
  enableSpotlight = true,
  spotlightIntensity = 0.25,
  glitchFrequency = 0.85
}) => {
  const [gridOffset, setGridOffset] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const [particles, setParticles] = useState([]);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef(null);

  // 파티클 초기화
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 120 - 20,
        size: Math.random() * 2.5 + 0.7,
        baseSpeed: Math.random() * 0.001 + 0.0003,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360
      });
    }
    setParticles(newParticles);
  }, [particleCount]);

  // 파티클 애니메이션 - 거리 기반 감속
  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const particleX = window.innerWidth * (particle.x / 100);
          const particleY = window.innerHeight * (particle.y / 100);
          const distance = Math.sqrt(
            Math.pow(particleX - mousePosition.x, 2) + 
            Math.pow(particleY - mousePosition.y, 2)
          );
          
          const spotlightRadius = 192;
          let speedMultiplier = 1;
          
          if (distance < spotlightRadius) {
            speedMultiplier = distance / spotlightRadius;
            speedMultiplier = Math.max(0.1, speedMultiplier);
          }
          
          const currentSpeed = particle.baseSpeed * speedMultiplier;
          
          let newY = particle.y - currentSpeed * 100;
          let newRotation = particle.rotation + currentSpeed * 10;
          
          if (newY < -20) {
            newY = 120;
            newRotation = Math.random() * 360;
          }
          
          return {
            ...particle,
            y: newY,
            rotation: newRotation % 360
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

// 마우스 움직임 추적
useEffect(() => {
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setGridOffset({ x, y });
    
    // 뷰포트 기준 좌표 사용 (스크롤 영향 없음)
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 랜덤 글리치 효과
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > glitchFrequency) {
        setGlitchActive(true);
        setGlitchIntensity(Math.random());
        setTimeout(() => setGlitchActive(false), 150);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [glitchFrequency]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 노이즈 텍스처 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 noise"></div>
      </div>

      {/* 추가 배경 이펙트 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>

      {/* JavaScript로 제어되는 파티클 */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gray-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: `rotate(${particle.rotation}deg)`,
              boxShadow: '0 0 4px rgba(192, 192, 192, 0.5)',
              transition: 'none',
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      {/* 레트로 그리드 배경 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${gridOffset.x}px, ${gridOffset.y}px) rotateX(${gridOffset.y * 0.5}deg) rotateY(${gridOffset.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="grid-container">
          <div 
            className="absolute inset-0 grid-layer"
            style={{
              backgroundImage: `
                linear-gradient(rgba(192, 192, 192, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(192, 192, 192, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0',
              transform: 'perspective(1000px) rotateX(60deg) scale(2)',
              transformOrigin: 'center center',
              animation: `grid-scroll ${gridAnimationSpeed}s linear infinite`
            }}
          />
        </div>
      </div>

      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-slate-800/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-zinc-800/20" />
      </div>

      {/* 스캔라인 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanlines"></div>
        <div className="scanlines-thick"></div>
      </div>

      {/* 추가 글리치 오버레이 */}
      <div 
        className={`absolute inset-0 pointer-events-none ${glitchActive ? 'glitch-overlay' : ''}`}
        style={{ opacity: glitchIntensity * 0.1 }} 
      />

{/* 마우스 추적 스포트라이트 */}
{enableSpotlight && (
  <div 
    className="fixed w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300"
    style={{
      left: `${mousePosition.x - 192}px`,
      top: `${mousePosition.y - 192}px`,
      transform: 'translate(0, 0)', // GPU 가속
      willChange: 'left, top',
            background: `radial-gradient(circle, rgba(192, 192, 192, ${spotlightIntensity}) 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: isHovering ? 0.88 : 0.33
          }}
        />
      )}

      {/* 콘텐츠 */}
      <div 
        className="relative z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;