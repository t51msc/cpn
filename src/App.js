import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnimatedBackground from './components/common/AnimatedBackground';
import LandingPage from './components/pages/LandingPage';
import './App.css';
import './styles/cyberpunk.css';

// React.lazy로 모든 경로에 코드 스플리팅 적용
const DesignerPath = React.lazy(() => import('./components/pages/DesignerPath'));
const PublisherPath = React.lazy(() => import('./components/pages/PublisherPath'));
const PlannerPath = React.lazy(() => import('./components/pages/PlannerPath'));
const AdminPath = React.lazy(() => import('./components/pages/AdminPath'));

// 로딩 컴포넌트
const LoadingPage = () => (
  <AnimatedBackground>
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-gray-300 rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-gray-400 animate-pulse">커리어패스 로딩 중...</p>
      </div>
    </div>
  </AnimatedBackground>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* 디자이너 경로 */}
        <Route 
          path="/career/designer" 
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <DesignerPath />
            </React.Suspense>
          } 
        />
        
        {/* 퍼블리셔 경로 */}
        <Route 
          path="/career/publisher" 
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <PublisherPath />
            </React.Suspense>
          } 
        />
        
        {/* 기획자 경로 */}
        <Route 
          path="/career/planner" 
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <PlannerPath />
            </React.Suspense>
          } 
        />
        
        {/* 경영지원 경로 */}
        <Route 
          path="/career/admin" 
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <AdminPath />
            </React.Suspense>
          } 
        />
        
        {/* 404 처리 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;