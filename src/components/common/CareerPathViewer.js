import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  Search, Download, Upload, Save, ZoomIn, ZoomOut,
  Maximize2, Minimize2, RefreshCw, Settings, X,
  Plus, Edit2, Trash2, Copy, Link2, Undo, Redo,
  Grid, Eye, MousePointer, Command, HelpCircle,
  ArrowLeft, Unlock, Lock, ChevronRight, Target,
  Filter, LayoutTemplate, Link, Layers, AlertCircle,
  CheckCircle, XCircle, Clipboard, Smartphone, FileCode
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// ==================== 모달 컴포넌트들 ====================

// 패스워드 확인 모달
const PasswordModal = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const adminPassword = "the5151@@@@";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-black/90 rounded-2xl border border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">관리자 인증</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">관리자 패스워드</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-600 focus:outline-none transition-all ${
                  error ? 'border-red-500 shadow-red-500/50 shadow-lg animate-shake' : 'border-gray-600/50 focus:border-gray-400/50'
                }`}
                placeholder="••••••••••"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center animate-pulse">
                잘못된 패스워드입니다
              </p>
            )}
            <div className="flex justify-end space-x-3 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
                취소
              </button>
              <button type="submit" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// 노드 편집 모달
const NodeEditModal = ({ nodeId, nodes, onClose, onUpdate, isAdminMode }) => {
  const node = nodes[nodeId];
  const [originalNodeId] = useState(nodeId); // 원본 ID 저장
  
  const [formData, setFormData] = useState({
    id: node?.id || nodeId, // ID 추가
    title: node?.title || '',
    year: node?.year || '',
    salary: node?.salary || '',
    description: node?.description || '',
    projectType: node?.projectType || 'hybrid',
    skills: (node?.skills || []).join(', '),
    icon: node?.icon || '💼',
    color: node?.color || '#6B7280',
    level: node?.level || 0,
    x: node?.x || 50
  });

  if (!node) return null;

const handleSubmit = (e) => {
  e.preventDefault();
  
  // ID 중복 체크 (관리자 모드에서 ID 변경 시)
  if (isAdminMode && formData.id !== originalNodeId) {
    if (nodes[formData.id]) {
      alert('이미 존재하는 ID입니다.');
      return;
    }
  }
  
  onUpdate(originalNodeId, {
    ...formData,
    skills: formData.skills.split(',').map(s => s.trim()).filter(s => s)
  });
  onClose();
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="backdrop-blur-xl bg-black/90 rounded-2xl border border-gray-700/50 p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">노드 편집</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 관리자 모드에서만 ID 편집 가능 */}
            {isAdminMode && (
              <div>
                <label className="block text-sm text-gray-400 mb-1">ID (주의: 변경 시 연결 관계가 끊어질 수 있음)</label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => {
                    const newId = e.target.value;
                    setFormData({...formData, id: newId});
                  }}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">직무명</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">경력</label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
              >
                <option value="">경력 선택</option>
                <option value="1-3년차">1-3년차</option>
                <option value="4-7년차">4-7년차</option>
                <option value="8-12년차">8-12년차</option>
                <option value="13-18년차">13-18년차</option>
                <option value="20년차+">20년차+</option>
                <option value="25년차+">25년차+</option>
                <option value="30년차+">30년차+</option>
              </select>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">연봉</label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({...formData, salary: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                  placeholder="예: 3,500-4,500만원"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">레벨</label>
                <input
                  type="number"
                  value={formData.level}
                  onChange={(e) => setFormData({...formData, level: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                  min="0"
                  max="6"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">프로젝트 타입</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                >
                  <option value="operation">운영</option>
                  <option value="construction">구축</option>
                  <option value="hybrid">복합</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">X 위치 (%)</label>
                <input
                  type="number"
                  value={formData.x}
                  onChange={(e) => setFormData({...formData, x: parseFloat(e.target.value) || 50})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                  min="0"
                  max="100"
                  step="0.1"  // 0.1 단위로 위치 수정 가능
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">설명</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">스킬 (쉼표로 구분)</label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
                placeholder="예: Figma, 프로토타이핑, UX 리서치"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">아이콘</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none text-2xl text-center"
                  placeholder="이모지"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">색상</label>
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  className="w-full h-10 bg-gray-900/50 border border-gray-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
                취소
              </button>
              <button type="submit" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// 검색 모달
const SearchModal = ({ nodes, onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = Object.values(nodes).filter(node => 
        node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        node.salary?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm, nodes]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="backdrop-blur-xl bg-black/90 rounded-2xl border border-gray-700/50 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="노드 검색 (이름, 스킬, 연봉...)"
              className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-gray-500 focus:outline-none"
              autoFocus
            />
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {results.map(node => (
              <button
                key={node.id}
                onClick={() => {
                  onSelect(node.id);
                  onClose();
                }}
                className="w-full text-left p-3 hover:bg-gray-800/50 rounded-lg transition-colors mb-2"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{node.icon}</span>
                  <div>
                    <h4 className="font-medium text-white">{node.title}</h4>
                    <p className="text-sm text-gray-400">{node.year} · {node.salary}</p>
                  </div>
                </div>
              </button>
            ))}
            {searchTerm && results.length === 0 && (
              <p className="text-center text-gray-500 py-8">검색 결과가 없습니다</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 노드 템플릿 모달
const NodeTemplateModal = ({ templates, onSelectTemplate, onClose }) => {
  const defaultTemplates = [
    {
      id: 'junior',
      name: '주니어 템플릿',
      icon: '🌱',
      data: { level: 0, projectType: 'hybrid', year: '1-3년차' }
    },
    {
      id: 'senior',
      name: '시니어 템플릿',
      icon: '⭐',
      data: { level: 2, projectType: 'construction', year: '8-12년차' }
    },
    {
      id: 'manager',
      name: '매니저 템플릿',
      icon: '👔',
      data: { level: 3, projectType: 'hybrid', year: '13-18년차' }
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-black/90 rounded-2xl border border-gray-700/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">노드 템플릿</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            {[...defaultTemplates, ...templates].map(template => (
              <button
                key={template.id}
                onClick={() => {
                  onSelectTemplate(template.data);
                  onClose();
                }}
                className="w-full text-left p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{template.icon}</span>
                  <div>
                    <h4 className="font-medium text-white">{template.name}</h4>
                    <p className="text-sm text-gray-400">레벨 {template.data.level} · {template.data.year}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 메인 컴포넌트 ====================

const CareerPathViewer = ({ 
  initialNodes,
  careerType,
  onAdminModeToggle,
  renderBottomPanel
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
// ==================== 상태 관리 ====================
  
  // 기본 상태
  const [nodes, setNodes] = useState(initialNodes);
  const [targetNode, setTargetNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState('target');
  const [isAdminMode, setIsAdminMode] = useState(location.state?.isAdminMode || false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editingNode, setEditingNode] = useState(null);
  const [connectionMode, setConnectionMode] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [draggedNode, setDraggedNode] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [mobilePopupNode, setMobilePopupNode] = useState(null);
  
  // 새로운 기능을 위한 상태
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(1000);
  const [isPanning, setIsPanning] = useState(false);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMinimap, setShowMinimap] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [contextMenuTarget, setContextMenuTarget] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copiedNode, setCopiedNode] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [nodeTemplates, setNodeTemplates] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartDistance, setTouchStartDistance] = useState(0);
  const [hoveredConnection, setHoveredConnection] = useState(null);
  const [scale, setScale] = useState(1);
const [mobileZoomScale, setMobileZoomScale] = useState(1);  // 모바일 핀치 줌용 별도 상태
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // 상수 정의
  const GRID_SIZE = 0.5;
  const MIN_ZOOM = 0.25;
  const MAX_ZOOM = 2.5;
  const ZOOM_STEP = 0.1;
  const MAX_HISTORY = 50;

  // 연결선 굵기 상수
  const MOBILE_NORMAL_LINE = 0.2;      // 모바일 일반선
  const MOBILE_HIGHLIGHT_LINE = 0.5;   // 모바일 강조선
  const DESKTOP_NORMAL_LINE = 1.0;     // 데스크탑 일반선  
  const DESKTOP_HIGHLIGHT_LINE = 2.0;  // 데스크탑 강조선
    
  // ==================== Refs ====================
  
  const containerRef = useRef(null);
  const minimapRef = useRef(null);
  const panStartRef = useRef(null);
  const lastTouchRef = useRef(null);
  
  // ==================== 히스토리 관리 함수 ====================
  
  const addToHistory = useCallback((state) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(state)));
    if (newHistory.length > MAX_HISTORY) {
      newHistory.shift();
    }
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);
  
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setNodes(prevState);
      setHistoryIndex(historyIndex - 1);
    }
  }, [history, historyIndex]);
  
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setNodes(nextState);
      setHistoryIndex(historyIndex + 1);
    }
  }, [history, historyIndex]);
  
  
  const handlePanStart = useCallback((e) => {
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      e.preventDefault();
      setIsPanning(true);
      panStartRef.current = {
        x: e.clientX - pan.x,
        y: e.clientY - pan.y
      };
    }
  }, [pan]);
  
  const handlePanMove = useCallback((e) => {
    if (isPanning && panStartRef.current) {
      setPan({
        x: e.clientX - panStartRef.current.x,
        y: e.clientY - panStartRef.current.y
      });
    }
  }, [isPanning]);
  
  const handlePanEnd = useCallback(() => {
    setIsPanning(false);
    panStartRef.current = null;
  }, []);
  
const resetView = useCallback(() => {
    setPan({ x: 0, y: 0 });
  }, []);
  
  // ==================== 모바일 터치 핸들러 ====================
  
  const handleTouchStart = useCallback((e) => {
    // 노드를 터치했는지 확인
    const touchedElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    const touchedNode = touchedElement?.closest('[id^="node-"]');
    
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchStartDistance(distance);
    } else if (e.touches.length === 1) {
      // 노드를 터치한 경우 팬 동작 방지
      if (touchedNode) {
        return; // 팬 시작하지 않음
      }
      lastTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  }, []);
  
const handleTouchMove = useCallback((e) => {
  // 두 손가락 핀치 줌
  if (e.touches.length === 2 && touchStartDistance > 0) {
    e.preventDefault(); // 기본 동작 방지
    const currentDistance = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    
    const scaleDelta = currentDistance / touchStartDistance;
    setMobileZoomScale(prev => {
      const newScale = prev * scaleDelta;
      return Math.max(0.5, Math.min(3, newScale));
    });
    
    setTouchStartDistance(currentDistance);
  }
  // 한 손가락 팬 - lastTouchRef가 있을 때만 (노드가 아닌 빈 공간에서 시작한 경우)
  else if (e.touches.length === 1 && lastTouchRef.current) {
    e.preventDefault(); // 기본 동작 방지
    const deltaX = e.touches[0].clientX - lastTouchRef.current.x;
    const deltaY = e.touches[0].clientY - lastTouchRef.current.y;
    
    setPan(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
    
    lastTouchRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  }
}, [touchStartDistance]);
  
  // ==================== 그리드 스냅 함수 ====================
  
  const snapToGridValue = useCallback((value) => {
    if (!snapToGrid) return value;
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  }, [snapToGrid]);
  
  // ==================== 키보드 단축키 ====================
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Z: 실행 취소
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      
      // Ctrl/Cmd + Y 또는 Ctrl/Cmd + Shift + Z: 다시 실행
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
      
      // Ctrl/Cmd + S: 저장
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (isAdminMode) saveData();
      }
      
      // Ctrl/Cmd + F: 검색
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        setShowSearch(true);
      }
      
      // Delete: 선택된 노드 삭제
      if (e.key === 'Delete' && isAdminMode) {
        if (selectedNodes.length > 0) {
          deleteMultipleNodes(selectedNodes);
        } else if (selectedNode) {
          deleteNode(selectedNode);
        }
      }
      
      // Escape: 선택 취소
      if (e.key === 'Escape') {
        setSelectedNodes([]);
        setSelectedNode(null);
        setConnectionMode(false);
        setConnectionStart(null);
      }
      
      // Ctrl/Cmd + A: 전체 선택
      if ((e.ctrlKey || e.metaKey) && e.key === 'a' && isAdminMode) {
        e.preventDefault();
        setSelectedNodes(Object.keys(nodes));
      }
      
      // Ctrl/Cmd + C: 복사
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedNode) {
        setCopiedNode(nodes[selectedNode]);
      }
      
      // Ctrl/Cmd + V: 붙여넣기
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && copiedNode) {
        pasteNode();
      }
      
      // Tab: 다음 노드로 이동
      if (e.key === 'Tab' && !isAdminMode) {
        e.preventDefault();
        navigateToNextNode();
      }
      
      // Space: 팬 모드 토글
      if (e.key === ' ' && !e.target.closest('input, textarea')) {
        e.preventDefault();
        document.body.style.cursor = 'grab';
      }
    };
    
    const handleKeyUp = (e) => {
      if (e.key === ' ') {
        document.body.style.cursor = 'default';
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isAdminMode, selectedNode, selectedNodes, nodes, copiedNode, undo, redo]);
  
  // ==================== 컨텍스트 메뉴 ====================
  
  const handleContextMenu = useCallback((e, nodeId = null) => {
    e.preventDefault();
    // 관리자 모드일 때만 컨텍스트 메뉴 표시
    if (isAdminMode) {
      setShowContextMenu(true);
      setContextMenuPos({ x: e.clientX, y: e.clientY });
      setContextMenuTarget(nodeId);
    }
  }, [isAdminMode]);
  
  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  
  // ==================== 자동 레이아웃 ====================
  
const autoLayout = useCallback(() => {
  const newNodes = { ...nodes };
  
  // 화면 크기에 따른 영역 조정
  const isMobileView = viewportWidth <= 768;
  
  const typeGroups = isMobileView ? {
    construction: { nodes: [], xRange: [10, 30] },
    hybrid: { nodes: [], xRange: [35, 65] },
    operation: { nodes: [], xRange: [70, 90] }
  } : {
    construction: { nodes: [], xRange: [5, 25] },
    hybrid: { nodes: [], xRange: [30, 70] },
    operation: { nodes: [], xRange: [75, 95] }
  };
  // 레벨별, 타입별로 분류
  const levelTypeNodes = {};
  
  Object.values(nodes).forEach(node => {
    const key = `${node.level}-${node.projectType}`;
    if (!levelTypeNodes[key]) {
      levelTypeNodes[key] = [];
    }
    levelTypeNodes[key].push(node);
  });
  
// 카드 크기와 최소 간격 정의
  const CARD_WIDTH = 8;  // 카드 너비 약 8%
  const MIN_SPACING = 3; // 최소 간격 3%
  
  // 각 그룹별로 x 좌표 재배치
  Object.entries(levelTypeNodes).forEach(([key, nodeList]) => {
    const [level, type] = key.split('-');
    const xRange = typeGroups[type].xRange;
    const rangeWidth = xRange[1] - xRange[0];
    const count = nodeList.length;
    
    if (count === 0) return;
    
    // 필요한 총 너비 계산
    const totalNeededWidth = count * CARD_WIDTH + (count - 1) * MIN_SPACING;
    
    if (totalNeededWidth <= rangeWidth) {
      // 공간이 충분한 경우: 가운데 정렬
      const startOffset = (rangeWidth - totalNeededWidth) / 2;
      nodeList.forEach((node, index) => {
        newNodes[node.id] = {
          ...node,
          x: xRange[0] + startOffset + index * (CARD_WIDTH + MIN_SPACING) + CARD_WIDTH / 2
        };
      });
    } else {
      // 공간이 부족한 경우: 균등 배치
      const spacing = rangeWidth / count;
      nodeList.forEach((node, index) => {
        newNodes[node.id] = {
          ...node,
          x: xRange[0] + spacing * (index + 0.5)
        };
      });
    }
  });
  
  addToHistory(nodes);
  setNodes(newNodes);
  setUnsavedChanges(true);
}, [nodes, addToHistory, viewportWidth]);
  // ==================== 다중 선택 ====================
  
  const handleNodeSelection = useCallback((nodeId, e) => {
    if (e.ctrlKey || e.metaKey) {
      setSelectedNodes(prev => 
        prev.includes(nodeId) 
          ? prev.filter(id => id !== nodeId)
          : [...prev, nodeId]
      );
    } else if (e.shiftKey && selectedNode) {
      // Shift 클릭으로 범위 선택
      const startLevel = nodes[selectedNode].level;
      const endLevel = nodes[nodeId].level;
      const minLevel = Math.min(startLevel, endLevel);
      const maxLevel = Math.max(startLevel, endLevel);
      
      const rangeNodes = Object.values(nodes)
        .filter(node => node.level >= minLevel && node.level <= maxLevel)
        .map(node => node.id);
      
      setSelectedNodes(rangeNodes);
    } else {
      setSelectedNode(nodeId);
      setSelectedNodes([]);
    }
  }, [nodes, selectedNode]);
  
  // ==================== 노드 복제 ====================
  
  const duplicateNode = useCallback((nodeId) => {
    const originalNode = nodes[nodeId];
    const newId = `node_${Date.now()}`;
    const newNode = {
      ...originalNode,
      id: newId,
      title: `${originalNode.title} (복사본)`,
      x: Math.min(95, originalNode.x + 5),
      parents: [],
      children: []
    };
    
    addToHistory(nodes);
    setNodes(prev => ({ ...prev, [newId]: newNode }));
    setUnsavedChanges(true);
}, [nodes, addToHistory, viewportWidth]);
  
  // ==================== 노드 붙여넣기 ====================
  
  const pasteNode = useCallback(() => {
    if (!copiedNode) return;
    
    const newId = `node_${Date.now()}`;
    const newNode = {
      ...copiedNode,
      id: newId,
      title: `${copiedNode.title} (붙여넣기)`,
      x: Math.min(95, (copiedNode.x || 50) + 5),
      parents: [],
      children: []
    };
    
    addToHistory(nodes);
    setNodes(prev => ({ ...prev, [newId]: newNode }));
    setUnsavedChanges(true);
  }, [copiedNode, nodes, addToHistory]);
  
  // ==================== 다음 노드로 이동 ====================
  
  const navigateToNextNode = useCallback(() => {
    const nodeList = Object.keys(nodes);
    if (nodeList.length === 0) return;
    
    const currentIndex = nodeList.indexOf(selectedNode || '');
    const nextIndex = (currentIndex + 1) % nodeList.length;
    setSelectedNode(nodeList[nextIndex]);
    
    // 선택된 노드로 스크롤
    const node = nodes[nodeList[nextIndex]];
    if (node && containerRef.current) {
      const nodeElement = document.getElementById(`node-${node.id}`);
      if (nodeElement) {
        nodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [nodes, selectedNode]);
  
  // ==================== 노드 삭제 함수들 ====================
  
const deleteNode = useCallback((nodeId) => {
  if (window.confirm('정말 이 노드를 삭제하시겠습니까?')) {
    addToHistory(nodes);
    const newNodes = { ...nodes };
    
    // 삭제할 노드가 존재하는지 확인
    if (!newNodes[nodeId]) {
      console.warn(`Node ${nodeId} not found`);
      return;
    }
    
    // 연결 정보 정리
    Object.values(newNodes).forEach(node => {
      if (node && node.parents) {
        node.parents = node.parents.filter(id => id !== nodeId);
      }
      if (node && node.children) {
        node.children = node.children.filter(id => id !== nodeId);
      }
    });
    
    delete newNodes[nodeId];
    setNodes(newNodes);
    setUnsavedChanges(true);
    
    // 선택된 노드 초기화 - 이 부분이 함수 안으로 들어와야 함
    if (selectedNode === nodeId) {
      setSelectedNode(null);
    }
    if (selectedNodes.includes(nodeId)) {
      setSelectedNodes(prev => prev.filter(id => id !== nodeId));
    }
  }
}, [nodes, addToHistory, selectedNode, selectedNodes]);

const deleteMultipleNodes = useCallback((nodeIds) => {
  if (window.confirm(`${nodeIds.length}개의 노드를 삭제하시겠습니까?`)) {
    addToHistory(nodes);
    const newNodes = { ...nodes };
    
    nodeIds.forEach(nodeId => {
      // 연결 정보 정리
      Object.values(newNodes).forEach(node => {
        if (node && node.parents) {
          node.parents = node.parents.filter(id => id !== nodeId);
        }
        if (node && node.children) {
          node.children = node.children.filter(id => id !== nodeId);
        }
      });
      
      delete newNodes[nodeId];
    });
    
    setNodes(newNodes);
    setSelectedNodes([]);
    setUnsavedChanges(true);
  }
}, [nodes, addToHistory, viewportWidth]);

// ==================== 연결 유효성 검사 ====================

const canConnect = useCallback((fromId, toId) => {
  if (fromId === toId) return false;
  
  const fromNode = nodes[fromId];
  const toNode = nodes[toId];
  
  if (!fromNode || !toNode) return false;
  
  // 레벨 체크 (하위 레벨에서 상위 레벨로만 연결 가능)
  if (fromNode.level >= toNode.level) return false;
  
  // 순환 참조 체크
  const checkCycle = (startId, targetId, visited = new Set()) => {
    if (startId === targetId) return true;
    if (visited.has(startId)) return false;
    
    visited.add(startId);
    const node = nodes[startId];
    
    // node가 존재하지 않거나 children이 없으면 false 반환
    if (!node || !node.children) return false;
    
    return node.children.some(childId => checkCycle(childId, targetId, visited));
  };
  
return !checkCycle(toId, fromId);
  }, [nodes]);
  
  // ==================== 연결선 삭제 ====================

  const handleConnectionClick = useCallback((fromId, toId) => {
    if (!isAdminMode) return;
    
    if (window.confirm(`${nodes[fromId]?.title}와 ${nodes[toId]?.title} 간의 연결을 해제하시겠습니까?`)) {
      addToHistory(nodes);
      const newNodes = { ...nodes };
      
      // 연결 해제
      if (newNodes[fromId]?.children) {
        newNodes[fromId].children = newNodes[fromId].children.filter(id => id !== toId);
      }
      if (newNodes[toId]?.parents) {
        newNodes[toId].parents = newNodes[toId].parents.filter(id => id !== fromId);
      }
      
      setNodes(newNodes);
      setUnsavedChanges(true);
    }
  }, [nodes, isAdminMode, addToHistory]);
  
  // ==================== 검색 결과로 이동 ====================
  
const scrollToNode = useCallback((nodeId) => {
  const node = nodes[nodeId];
  if (!node || !containerRef.current) return;
  
  const levelHeight = 200 * scale;
  const yPosition = 60 * scale + node.level * levelHeight;
  const xPosition = (node.x / 100) * containerRef.current.clientWidth;
  
  setPan({
    x: containerRef.current.clientWidth / 2 - xPosition,
    y: containerRef.current.clientHeight / 2 - yPosition
  });
  
  setSelectedNode(nodeId);
  setHoveredNode(nodeId);
  
  setTimeout(() => setHoveredNode(null), 2000);
}, [nodes]);
  
  // ==================== 성능 최적화: 뷰포트 내 노드만 렌더링 ====================
    
const visibleNodes = useMemo(() => {
  if (!containerRef.current) return Object.values(nodes);
  
  // 모바일 줌 스케일 적용
  const zoomScale = isMobile ? mobileZoomScale : 1;
  
  const viewport = {
    left: -pan.x / zoomScale,
    right: (containerRef.current.clientWidth - pan.x) / zoomScale,
    top: -pan.y / zoomScale,
    bottom: (containerRef.current.clientHeight - pan.y) / zoomScale
  };
  
  return Object.values(nodes).filter(node => {
    const levelHeight = 200 * scale;
    const yPosition = 60 * scale + node.level * levelHeight;
    const xPosition = (node.x / 100) * containerRef.current.clientWidth;
    
    const margin = 100 / zoomScale; // 마진도 줌 스케일에 맞게 조정
    return xPosition > viewport.left - margin &&
          xPosition < viewport.right + margin &&
          yPosition > viewport.top - margin &&
          yPosition < viewport.bottom + margin;
  });
}, [nodes, pan, isMobile, mobileZoomScale, scale]);
  
  // ==================== 로컬스토리지 관리 ====================
  
  useEffect(() => {
    const savedData = localStorage.getItem(`${careerType}CareerTree`);
    if (savedData) {
      try {
        const loadedNodes = JSON.parse(savedData);
        setNodes(loadedNodes);
        setHistory([loadedNodes]);
        setHistoryIndex(0);
      } catch (e) {
        console.error('Failed to load saved data:', e);
      }
    }
  }, [careerType]);
  
  const saveData = useCallback(() => {
    localStorage.setItem(`${careerType}CareerTree`, JSON.stringify(nodes));
    
    // 템플릿도 저장
    localStorage.setItem(`${careerType}Templates`, JSON.stringify(nodeTemplates));
    
    setUnsavedChanges(false);
    alert('저장되었습니다!');
  }, [careerType, nodes, nodeTemplates]);
  
  // ==================== 모바일 감지 ====================
  
useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  // 모바일 팝업 외부 클릭 감지 - 여기에 추가!
  useEffect(() => {
    if (!isMobile || !mobilePopupNode) return;
    
    const handleOutsideClick = (e) => {
      // 팝업과 노드 자체를 클릭한 경우는 제외
      const clickedOnNode = e.target.closest(`#node-${mobilePopupNode}`);
      const clickedOnPopup = e.target.closest('.mobile-popup');
      
      if (!clickedOnNode && !clickedOnPopup) {
        setMobilePopupNode(null);
      }
    };
    
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 100);
    
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobile, mobilePopupNode]);


// 반응형 스케일 계산 - 제곱근 함수로 완만한 변화
useEffect(() => {
  const calculateScale = () => {
    const width = window.innerWidth;
    setViewportWidth(width);
    
    // 제곱근 함수를 사용한 완만한 스케일 계산
    let calculatedScale;
    if (width <= 320) {
      calculatedScale = 0.05;
    } else if (width >= 1920) {
      calculatedScale = 1.0;
    } else {
      // 제곱근 함수로 더 자연스러운 축소 비율
      calculatedScale = 0.05 + Math.sqrt((width - 320) / (1920 - 320)) * 0.95;
    }
    
    setScale(calculatedScale);
  };
    
    calculateScale();
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

// ==================== 컨테이너 크기 변화 감지 ====================

useEffect(() => {
  if (!containerRef.current) return;
  
  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  };
  
  // 초기 너비 설정
  updateWidth();
  
  // ResizeObserver로 크기 변화 감지
  const resizeObserver = new ResizeObserver(updateWidth);
  resizeObserver.observe(containerRef.current);
  
  // window resize 이벤트도 감지 (브라우저 줌 포함)
  window.addEventListener('resize', updateWidth);
  
  return () => {
    resizeObserver.disconnect();
    window.removeEventListener('resize', updateWidth);
  };
}, []);

  // 모바일 초기 뷰포트 설정 추가
useEffect(() => {
  if (isMobile && containerRef.current) {
    // 모바일에서 전체 노드가 보이도록 초기 위치 조정
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // 컨테이너 중앙 정렬
    setPan({
      x: 0,
      y: 50 // 상단 여백 조정
    });
  } else if (!isMobile) {
    // 데스크톱으로 돌아올 때 리셋
    setPan({
      x: 0,
      y: 0  // 또는 원하는 데스크톱 기본값
    });
  }
}, [isMobile]);

    // ==================== 부모 노드 찾기 함수 ====================
  const findAllParentNodes = useCallback((nodeId, visited = new Set()) => {
    if (visited.has(nodeId)) return [];
    visited.add(nodeId);
    
    const node = nodes[nodeId];
    if (!node || !node.parents || node.parents.length === 0) return [nodeId];
    
    let allParents = [nodeId];
    node.parents.forEach(parentId => {
      allParents = allParents.concat(findAllParentNodes(parentId, visited));
    });
    
    return [...new Set(allParents)];
  }, [nodes]);
  
  
// ==================== 캔버스 그리기 ====================
  

  // ==================== 미니맵 그리기 ====================
  
  useEffect(() => {
    if (!showMinimap || !minimapRef.current || !containerRef.current) return;
    
    const canvas = minimapRef.current;
    const ctx = canvas.getContext('2d');
    const rect = containerRef.current.getBoundingClientRect();
    
    const minimapWidth = 200;
    const minimapHeight = 150;
    const scale = Math.min(minimapWidth / rect.width, minimapHeight / 1200);
    
    canvas.width = minimapWidth;
    canvas.height = minimapHeight;
    
    ctx.clearRect(0, 0, minimapWidth, minimapHeight);
    
    // 배경
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, minimapWidth, minimapHeight);
    
    // 노드들
    Object.values(nodes).forEach(node => {
      const x = (node.x / 100) * rect.width * scale;
      const y = (150 + node.level * 180) * scale;
      
      ctx.fillStyle = selectedNodes.includes(node.id) || selectedNode === node.id
        ? '#DAA520'
        : '#6B7280';
      ctx.fillRect(x - 2, y - 1, 4, 2);
    });
    
// 뷰포트
ctx.strokeStyle = '#DAA520';
ctx.lineWidth = 2;
ctx.strokeRect(
  -pan.x * scale,
  -pan.y * scale,
  rect.width * scale,
  rect.height * scale
);
  }, [nodes, showMinimap, pan, selectedNode, selectedNodes]);
  
  // ==================== 경로 관련 함수들 ====================
  
const isPathToTarget = useCallback((nodeId, targetId) => {
  if (nodeId === targetId) return true;
  
  const visited = new Set();
  const queue = [nodeId];
  
  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    
    const node = nodes[current];
    // 노드가 존재하지 않으면 건너뛰기
    if (!node) continue;
    
    if (node.children?.includes(targetId)) return true;
    
    node.children?.forEach(childId => {
      // childId 노드가 존재하는지 확인
      if (!visited.has(childId) && nodes[childId]) {
        queue.push(childId);
      }
    });
  }
  
  return false;
}, [nodes]);


  // ==================== 노드 가시성 체크 함수 ====================
  const isNodeVisible = useCallback((node) => {
    // 필터 타입에 따른 가시성 체크
    if (filterType === 'all') return true;
    if (filterType === node.projectType) return true;
    
    // 관리자 모드에서는 모든 노드 표시
    if (isAdminMode) return true;
    
    // 목표 경로에 있는 노드는 항상 표시
    if (targetNode && isPathToTarget(node.id, targetNode)) return true;
    
    return false;
  }, [filterType, isAdminMode, targetNode, isPathToTarget]);


  // ==================== 노드 클릭 핸들러 ====================
  
const handleNodeClick = useCallback((nodeId, e) => {
  // 모바일에서 팝업 토글 처리 추가
  if (isMobile && !isAdminMode) {
    e.stopPropagation();
    // 동일 노드 체크를 두 상태 모두에 적용
    if (nodeId === targetNode) {
      // 같은 노드 재클릭 - 둘 다 비활성화
      setMobilePopupNode(null);
      setTargetNode(null);
    } else {
      // 다른 노드 클릭 - 둘 다 활성화
      setMobilePopupNode(nodeId);
      setTargetNode(nodeId);
    }
    return;
  }
  
  if (isAdminMode && connectionMode) {
    if (!connectionStart) {
      setConnectionStart(nodeId);
    } else if (connectionStart !== nodeId) {
      if (canConnect(connectionStart, nodeId)) {
        addToHistory(nodes);
        const newNodes = { ...nodes };
        
        // 노드 존재 확인 추가
        if (!newNodes[connectionStart] || !newNodes[nodeId]) {
          alert('노드를 찾을 수 없습니다.');
          setConnectionStart(null);
          return;
        }
        
        if (!newNodes[connectionStart].children) {
          newNodes[connectionStart].children = [];
        }
        if (!newNodes[nodeId].parents) {
          newNodes[nodeId].parents = [];
        }
        
        // 중복 연결 방지
        if (!newNodes[connectionStart].children.includes(nodeId)) {
          newNodes[connectionStart].children.push(nodeId);
        }
        if (!newNodes[nodeId].parents.includes(connectionStart)) {
          newNodes[nodeId].parents.push(connectionStart);
        }
        
        setNodes(newNodes);
        setUnsavedChanges(true);
      } else {
        alert('이 연결은 허용되지 않습니다. (레벨 제약 또는 순환 참조)');
      }
      
      setConnectionMode(false);
      setConnectionStart(null);
    }
    if (!connectionStart) {
      setConnectionStart(nodeId);
    } else if (connectionStart !== nodeId) {
      if (canConnect(connectionStart, nodeId)) {
        addToHistory(nodes);
        const newNodes = { ...nodes };
        
        // 노드 존재 확인 추가
        if (!newNodes[connectionStart] || !newNodes[nodeId]) {
          alert('노드를 찾을 수 없습니다.');
          setConnectionStart(null);
          return;
        }
        
        if (!newNodes[connectionStart].children) {
          newNodes[connectionStart].children = [];
        }
        if (!newNodes[nodeId].parents) {
          newNodes[nodeId].parents = [];
        }
        
        // 중복 연결 방지
        if (!newNodes[connectionStart].children.includes(nodeId)) {
          newNodes[connectionStart].children.push(nodeId);
        }
        if (!newNodes[nodeId].parents.includes(connectionStart)) {
          newNodes[nodeId].parents.push(connectionStart);
        }
        
        setNodes(newNodes);
        setUnsavedChanges(true);
      } else {
        alert('이 연결은 허용되지 않습니다. (레벨 제약 또는 순환 참조)');
      }
      
      setConnectionMode(false);
      setConnectionStart(null);
    }
  } else if (isAdminMode) {
    handleNodeSelection(nodeId, e);
  } else {
    // 일반 모드에서 목표 노드 토글 - 같은 노드 클릭 시 해제
    if (targetNode === nodeId) {
      setTargetNode(null);
    } else {
      setTargetNode(nodeId);
    }
  }
}, [isAdminMode, connectionMode, connectionStart, nodes, 
    handleNodeSelection, canConnect, addToHistory, isMobile, mobilePopupNode, targetNode]);  
  // ==================== 드래그 앤 드롭 ====================
  
  const handleDragStart = useCallback((e, nodeId) => {
    if (!isAdminMode) return;
    
    // 다중 선택된 경우 모두 이동
    if (selectedNodes.includes(nodeId)) {
      setDraggedNode(selectedNodes);
    } else {
      setDraggedNode(nodeId);
    }
    
    e.dataTransfer.effectAllowed = 'move';
  }, [isAdminMode, selectedNodes]);
  
const handleDragOver = useCallback((e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  
  if (snapToGrid && containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / rect.width * 100;
    const snappedX = snapToGridValue(x);
  }
}, [snapToGrid, pan, snapToGridValue]);
  
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    if (!draggedNode || !containerRef.current) return;
    
const rect = containerRef.current.getBoundingClientRect();
let x = (e.clientX - rect.left - pan.x) / rect.width * 100;
const y = (e.clientY - rect.top - pan.y);
    const level = Math.max(0, Math.min(6, Math.floor((y - 150) / 200)));
    
    // 그리드 스냅
    if (snapToGrid) {
      x = snapToGridValue(x);
    }
    
    x = Math.max(0, Math.min(100, x));
    
    addToHistory(nodes);
    
    if (Array.isArray(draggedNode)) {
      // 다중 노드 이동
      const deltaX = x - nodes[draggedNode[0]].x;
      const deltaLevel = level - nodes[draggedNode[0]].level;
      
      const newNodes = { ...nodes };
      draggedNode.forEach(nodeId => {
        newNodes[nodeId] = {
          ...newNodes[nodeId],
          x: Math.max(5, Math.min(95, newNodes[nodeId].x + deltaX)),
          level: Math.max(0, Math.min(6, newNodes[nodeId].level + deltaLevel))
        };
      });
      
      setNodes(newNodes);
    } else {
      // 단일 노드 이동
      setNodes(prev => ({
        ...prev,
        [draggedNode]: {
          ...prev[draggedNode],
          x,
          level
        }
      }));
    }
    
    setDraggedNode(null);
    setUnsavedChanges(true);
  }, [draggedNode, nodes, pan, snapToGrid, snapToGridValue, addToHistory]);
  
  // ==================== 노드 추가 (더블클릭) ====================
  
  const handleCanvasDoubleClick = useCallback((e) => {
    if (!isAdminMode || e.target !== containerRef.current) return;
    
const rect = containerRef.current.getBoundingClientRect();
const x = (e.clientX - rect.left - pan.x) / rect.width * 100;
const y = (e.clientY - rect.top - pan.y);
    const level = Math.max(0, Math.min(6, Math.floor((y - 150) / 180)));
    
    const newId = `node_${Date.now()}`;
    const newNode = {
      id: newId,
      title: '새 직무',
      year: '경력',
      salary: '연봉',
      level,
      x: snapToGrid ? snapToGridValue(x) : x,
      projectType: 'hybrid',
      description: '설명을 입력하세요',
      skills: [],
      parents: [],
      children: [],
      color: '#6B7280',
      icon: '💼'
    };
    
    addToHistory(nodes);
    setNodes(prev => ({ ...prev, [newId]: newNode }));
    setEditingNode(newId);
    setUnsavedChanges(true);
  }, [isAdminMode, nodes, pan, snapToGrid, snapToGridValue, addToHistory]);
  
  // ==================== 노드 템플릿 선택 ====================
  
  const handleTemplateSelect = useCallback((templateData) => {
    const newId = `node_${Date.now()}`;
    const newNode = {
      id: newId,
      title: templateData.title || '새 직무',
      year: templateData.year || '경력',
      salary: templateData.salary || '연봉',
      level: templateData.level || 0,
      x: 50,
      projectType: templateData.projectType || 'hybrid',
      description: templateData.description || '설명을 입력하세요',
      skills: templateData.skills || [],
      parents: [],
      children: [],
      color: templateData.color || '#6B7280',
      icon: templateData.icon || '💼'
    };
    
    addToHistory(nodes);
    setNodes(prev => ({ ...prev, [newId]: newNode }));
    setEditingNode(newId);
    setUnsavedChanges(true);
 }, [nodes, addToHistory, viewportWidth]);
  
  // ==================== 데이터 저장/불러오기 ====================
  
  const exportData = useCallback(() => {
    const exportObj = {
      nodes,
      templates: nodeTemplates,
      metadata: {
        careerType,
        exportDate: new Date().toISOString(),
        version: '2.0'
      }
    };
    
    const dataStr = JSON.stringify(exportObj, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${careerType}_career_path_${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [nodes, nodeTemplates, careerType]);

  // JS 파일로 내보내기
  const exportAsJS = useCallback(() => {
    const nodeVarName = `${careerType}Nodes`;
    
    // JS 파일 템플릿 생성
    const jsContent = `// ${careerType.charAt(0).toUpperCase() + careerType.slice(1)}Path.js
// 자동 생성된 파일 - ${new Date().toISOString()}
import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import CareerPathViewer from '../common/CareerPathViewer';

const ${careerType.charAt(0).toUpperCase() + careerType.slice(1)}Path = () => {
  const ${nodeVarName} = ${JSON.stringify(nodes, null, 4).replace(/"([^"]+)":/g, '$1:')};

  const renderBottomPanel = ({ viewMode, targetNode, nodes }) => {
    const getNodeInfo = (nodeId) => {
      const node = nodes[nodeId];
      return node ? \`\${node.title} (\${node.year})\` : '';
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-xl border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          {targetNode && (
            <div className="text-sm text-gray-300">
              <span className="text-gray-500">목표:</span> {getNodeInfo(targetNode)}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <AnimatedBackground>
      <div className="min-h-screen">
        <div className="hidden sm:block px-4 sm:px-6 pt-4 sm:pt-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    <span className="metallic-text">${getCareerTitle(careerType)} 커리어패스</span>
  </h1>
  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
    ${getCareerDescription(careerType)}
  </p>
</div>
        
        <CareerPathViewer 
          initialNodes={${nodeVarName}}
          careerType="${careerType}"
          renderBottomPanel={renderBottomPanel}
        />
      </div>
    </AnimatedBackground>
  );
};

export default ${careerType.charAt(0).toUpperCase() + careerType.slice(1)}Path;`;

    // 파일 다운로드
    const blob = new Blob([jsContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${careerType.charAt(0).toUpperCase() + careerType.slice(1)}Path.js`;
    link.click();
    URL.revokeObjectURL(url);
  }, [nodes, careerType]);

  // 헬퍼 함수들
  const getCareerTitle = (type) => {
    const titles = {
      designer: '웹 디자이너',
      publisher: '웹 퍼블리셔', 
      planner: '웹 기획자',
      admin: '경영지원'
    };
    return titles[type] || type;
  };

  const getCareerDescription = (type) => {
    const descriptions = {
      designer: '비주얼 디자인부터 UI/UX, 그리고 크리에이티브 리더십까지',
      publisher: 'HTML/CSS부터 프론트엔드 개발, 그리고 기술 리더십까지',
      planner: '서비스 기획부터 프로덕트 매니지먼트, 그리고 비즈니스 리더십까지',
      admin: '회계/인사/총무부터 전략 기획, 그리고 경영 리더십까지'
    };
    return descriptions[type] || '커리어 성장 경로';
  };
  
  const importData = useCallback((event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        
        // 버전 호환성 체크
        if (imported.metadata?.version) {
          setNodes(imported.nodes);
          setNodeTemplates(imported.templates || []);
        } else {
          // 구 버전 호환
          setNodes(imported);
        }
        
        addToHistory(nodes);
        setUnsavedChanges(true);
        alert('데이터를 성공적으로 가져왔습니다!');
      } catch (error) {
        alert('파일을 읽는 중 오류가 발생했습니다.');
      }
    };
    reader.readAsText(file);
 }, [nodes, addToHistory, viewportWidth]);
  
  // ==================== UI 렌더링 ====================
  
  return (
    <>
{/* 모바일 뒤로가기 버튼 - 상단바 밖에 독립적으로 배치 */}
{isMobile && (
  <button
    onClick={() => navigate('/')}
    className="absolute top-4 left-4 z-20 p-2 bg-gray-800/80 backdrop-blur hover:bg-gray-700/80 rounded-full transition-colors"
    style={{ 
      width: `${100 * scale}px`, 
      height: `${100 * scale}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <ArrowLeft style={{ width: `${50 * scale}px`, height: `${50 * scale}px` }} />
  </button>
)}

{/* 상단 컨트롤 패널 - 모바일에서는 숨김 */}
{!isMobile && (
<div className="relative z-10 px-6 pb-4">
  <div className="backdrop-blur-xl bg-black/90 rounded-xl border border-gray-700/50 p-4">
    <div className={`flex items-center justify-between ${
      viewportWidth <= 768 ? 'flex-col gap-3' : 'flex-row flex-wrap gap-4'
    }`}>
      <div className={`flex items-center ${
        viewportWidth <= 768 ? 'w-full justify-evenly gap-2' : 'space-x-4 flex-wrap'
      }`}>
        {/* 직무 선택 돌아가기 버튼 - 데스크탑용 */}
        <button
          onClick={() => navigate('/')}
          className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">직무 선택</span>
        </button>

        {/* 구분선 추가 */}
        <div className="h-6 w-px bg-gray-700" />

        {/* 관리자 모드 토글 - 데스크톱에서만 표시 */}
        {!isMobile && (
          <button
            onClick={() => {
              if (!isAdminMode) {
                setShowPasswordModal(true);
              } else {
                setIsAdminMode(false);
                setConnectionMode(false);
                setConnectionStart(null);
                setSelectedNode(null);
                setSelectedNodes([]);
              }
            }}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
              isAdminMode 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50'
            }`}
          >
            {isAdminMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            <span>{isAdminMode ? '관리자 모드' : '관리자 모드'}</span>
          </button>
        )}



        {/* 필터 - 데스크톱에서만 표시 */}
        {!isMobile && (
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:border-gray-500 focus:outline-none"
            >
              <option value="all">전체 보기</option>
              <option value="construction">구축 프로젝트</option>
              <option value="operation">운영 프로젝트</option>
              <option value="hybrid">복합형</option>
            </select>
          </div>
        )}

        {/* 검색 - 데스크톱에서만 표시 */}
        {!isMobile && (
          <button
            onClick={() => setShowSearch(true)}
            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
            title="Ctrl+F"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">검색</span>
          </button>
        )}

        {/* 초기화 */}
        <button
          onClick={() => {
            if (isAdminMode) {
              setSelectedNode(null);
              setSelectedNodes([]);
              setConnectionMode(false);
              setConnectionStart(null);
            } else {
              setTargetNode(null);
            }
          }}
          className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span className="text-sm hidden sm:inline">초기화</span>
        </button>

        {/* 모바일 줌 컨트롤 추가 */}
        {isMobile && !isAdminMode && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setScale(prev => Math.max(MIN_ZOOM, prev - ZOOM_STEP));
              }}
              className="px-2 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setScale(prev => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
              }}
              className="px-2 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        )}

        {isAdminMode && (
          <>
            <div className="h-6 w-px bg-gray-700" />
            
            {/* 나머지 관리자 모드 버튼들... (기존 코드 유지) */}
                  
                  {/* 노드 추가 */}
                  <button
                    onClick={() => {
                      const newId = `node_${Date.now()}`;
                      const newNode = {
                        id: newId,
                        title: '새 직무',
                        year: '경력',
                        salary: '연봉',
                        level: 0,
                        x: 50,
                        projectType: 'hybrid',
                        description: '설명을 입력하세요',
                        skills: [],
                        parents: [],
                        children: [],
                        color: '#6B7280',
                        icon: '💼'
                      };
                      addToHistory(nodes);
                      setNodes(prev => ({ ...prev, [newId]: newNode }));
                      setEditingNode(newId);
                      setUnsavedChanges(true);
                    }}
                    className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
                    title="새 노드 추가"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-sm hidden sm:inline">노드 추가</span>
                  </button>

                  {/* 템플릿 */}
                  <button
                    onClick={() => setShowTemplates(true)}
                    className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
                    title="템플릿에서 추가"
                  >
                    <LayoutTemplate className="w-4 h-4" />
                    <span className="text-sm hidden sm:inline">템플릿</span>
                  </button>

                  {/* 연결 모드 */}
                  <button
                    onClick={() => {
                      setConnectionMode(!connectionMode);
                      setConnectionStart(null);
                    }}
                    className={`px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                      connectionMode 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    title="연결 모드"
                  >
                    <Link className="w-4 h-4" />
                    <span className="text-sm hidden sm:inline">연결</span>
                  </button>

                  {/* 자동 레이아웃 */}
                  <button
                    onClick={autoLayout}
                    className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
                    title="자동 정렬"
                  >
                    <Layers className="w-4 h-4" />
                    <span className="text-sm hidden sm:inline">자동 정렬</span>
                  </button>

                  {/* 실행 취소/다시 실행 */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={undo}
                      disabled={historyIndex <= 0}
                      className={`p-1.5 rounded transition-colors ${
                        historyIndex > 0 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                      }`}
                      title="실행 취소 (Ctrl+Z)"
                    >
                      <Undo className="w-4 h-4" />
                    </button>
                    <button
                      onClick={redo}
                      disabled={historyIndex >= history.length - 1}
                      className={`p-1.5 rounded transition-colors ${
                        historyIndex < history.length - 1 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                      }`}
                      title="다시 실행 (Ctrl+Y)"
                    >
                      <Redo className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="h-6 w-px bg-gray-700" />

                  {/* 저장 */}
                  <button
                    onClick={saveData}
                    className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
                    title="저장 (Ctrl+S)"
                  >
                    <Save className="w-4 h-4" />
                    <span className="text-sm hidden sm:inline">저장</span>
                  </button>

                  {/* 내보내기/가져오기 */}

<button
  onClick={exportData}
  className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors"
>
  <Download className="w-4 h-4" />
  <span className="text-sm hidden sm:inline">JSON 내보내기</span>
</button>

{/* JS 내보내기 버튼 추가 - label 태그 밖에 독립적으로 */}
<button
  onClick={exportAsJS}
  className="px-3 py-2 bg-purple-800 hover:bg-purple-700 rounded-lg flex items-center space-x-2 transition-colors"
  title="JS 파일로 내보내기"
>
  <FileCode className="w-4 h-4" />
  <span className="text-sm hidden sm:inline">JS 내보내기</span>
</button>

<label className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer">
  <Upload className="w-4 h-4" />
  <span className="text-sm hidden sm:inline">가져오기</span>
  <input
    type="file"
    accept=".json"
    onChange={importData}
    className="hidden"
  />
</label>
                </>
              )}
            </div>

            {/* 상태 표시 */}
            <div className="flex items-center space-x-4">
              {unsavedChanges && isAdminMode && (
                <span className="text-yellow-400 text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  저장되지 않음
                </span>
              )}
              
              <div className="text-sm text-gray-400">
                {targetNode && !isAdminMode && (
                  <span>목표: {nodes[targetNode]?.title}</span>
                )}
                {isAdminMode && connectionMode && (
                  <span>{connectionStart ? '연결할 노드 선택' : '시작 노드 선택'}</span>
                )}
                {isAdminMode && selectedNodes.length > 0 && (
                  <span>{selectedNodes.length}개 선택됨</span>
                )}
              </div>
            </div>
          </div>

          {/* 추가 컨트롤 (두 번째 줄) */}
          {isAdminMode && (
            <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-gray-700">
              {/* 그리드 토글 */}
              <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                  className="w-4 h-4 bg-gray-800 border-gray-600 rounded"
                />
                <Grid className="w-4 h-4" />
                <span>그리드</span>
              </label>

              {/* 스냅 토글 */}
              <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={snapToGrid}
                  onChange={(e) => setSnapToGrid(e.target.checked)}
                  className="w-4 h-4 bg-gray-800 border-gray-600 rounded"
                />
                <MousePointer className="w-4 h-4" />
                <span>스냅</span>
              </label>

              {/* 미니맵 토글 */}
              <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showMinimap}
                  onChange={(e) => setShowMinimap(e.target.checked)}
                  className="w-4 h-4 bg-gray-800 border-gray-600 rounded"
                />
                <Eye className="w-4 h-4" />
                <span>미니맵</span>
              </label>

              {/* 고대비 모드 */}
              <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrastMode}
                  onChange={(e) => setHighContrastMode(e.target.checked)}
                  className="w-4 h-4 bg-gray-800 border-gray-600 rounded"
                />
                <Eye className="w-4 h-4" />
                <span>고대비</span>
              </label>

              <div className="h-6 w-px bg-gray-700" />

              {/* 단축키 도움말 */}
              <button
                onClick={() => alert(
                  '키보드 단축키:\n\n' +
                  'Ctrl+Z: 실행 취소\n' +
                  'Ctrl+Y: 다시 실행\n' +
                  'Ctrl+S: 저장\n' +
                  'Ctrl+F: 검색\n' +
                  'Ctrl+A: 전체 선택\n' +
                  'Ctrl+C: 노드 복사\n' +
                  'Ctrl+V: 노드 붙여넣기\n' +
                  'Delete: 선택 삭제\n' +
                  'Tab: 다음 노드\n' +
                  'Space+드래그: 팬\n' +
                  'Ctrl+휠: 줌\n' +
                  'Escape: 취소'
                )}
                className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center space-x-2 transition-colors text-sm"
              >
                <Command className="w-4 h-4" />
                <span>단축키</span>
              </button>
            </div>
          )}
        </div>
      </div>
)}

      {/* 메인 캔버스 영역 */}
      <div 
        ref={containerRef}
        className="relative mx-auto"
        style={{ 
          width: '100%',
          height: '1600px',
          minHeight: '600px',
          paddingTop: isMobile ? '60px' : '0px',
          cursor: isPanning ? 'grabbing' : 'default',
          touchAction: isMobile ? 'manipulation' : 'none'  // 모바일에서는 manipulation으로 변경
        }}
        onMouseDown={handlePanStart}
        onMouseMove={handlePanMove}
        onMouseUp={handlePanEnd}
        onMouseLeave={handlePanEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDoubleClick={handleCanvasDoubleClick}
        onContextMenu={(e) => handleContextMenu(e)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          lastTouchRef.current = null;  // 터치 종료 시 리셋
          setTouchStartDistance(0);
        }}
      >
{/* 연결선 SVG */}
<svg 
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ overflow: 'visible' }}
>
  <g transform={isMobile 
    ? `translate(${pan.x}, ${pan.y}) scale(${mobileZoomScale})`
    : `translate(${pan.x}, ${pan.y})`}>
    {/* 그리드 (옵션) */}
    {showGrid && (
      <>
        {Array.from({ length: 40 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 50}
            y1={0}
            x2={i * 50}
            y2={2000}
            stroke={highContrastMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(156, 163, 175, 0.1)'}
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 20 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * 50}
            x2={2000}
            y2={i * 50}
            stroke={highContrastMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(156, 163, 175, 0.1)'}
            strokeWidth="0.5"
          />
        ))}
      </>
    )}
    
    {/* 레이어 1: 일반 연결선 (강조되지 않은 선들) */}
    <g id="normal-connections">
      {Object.values(nodes).map(node => 
        node.parents?.map(parentId => {
          const parent = nodes[parentId];
          if (!parent) return null;
          
const levelHeight = 200 * scale;
const cardHeight = 80 * scale;

const startX = (parent.x / 100) * containerWidth;
const startY = 60 * scale + parent.level * levelHeight + cardHeight / 2;
const endX = (node.x / 100) * containerWidth;
const endY = 60 * scale + node.level * levelHeight + cardHeight / 2;
          const midY = startY + (endY - startY) / 2;
          
          // 강조 상태 체크
          const isInSelectedPath = false; // 경로 탐색 모드 제거
          
          let isConnectedToHovered = false;
          if (hoveredNode) {
            const allParents = findAllParentNodes(hoveredNode);
            const directChildren = Object.values(nodes)
              .filter(n => n.parents?.includes(hoveredNode))
              .map(n => n.id);
            
            isConnectedToHovered = 
              (allParents.includes(parentId) && allParents.includes(node.id)) ||
              (hoveredNode === parentId && directChildren.includes(node.id));
          }
          
          const isTargetPath = viewMode === 'target' && targetNode &&
                              (isPathToTarget(parentId, targetNode) && isPathToTarget(node.id, targetNode));
          const isSelected = selectedNodes.includes(parentId) && selectedNodes.includes(node.id);
          
          // 강조된 선은 이 레이어에서 그리지 않음
          if (isInSelectedPath || isConnectedToHovered || isTargetPath || isSelected) {
            return null;
          }
          
          return (
            <path
  key={`${parentId}-${node.id}`}
  d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
  stroke={highContrastMode ? '#484848' : '#363636'}
  strokeWidth={isMobile ? MOBILE_NORMAL_LINE : DESKTOP_NORMAL_LINE}
  fill="none"
  opacity={0.7}
/>
          );
        })
      )}
    </g>
    
{/* 레이어 2: 강조된 연결선 (호버, 선택 등) */}
    <g id="highlighted-connections">
      {/* 먼저 호버/선택 연결선 렌더링 */}
      {Object.values(nodes).map(node => 
        node.parents?.map(parentId => {
          const parent = nodes[parentId];
          if (!parent) return null;
          
const levelHeight = 200 * scale;
const cardHeight = 80 * scale;

const startX = (parent.x / 100) * containerWidth;
const startY = 60 * scale + parent.level * levelHeight + cardHeight / 2;
const endX = (node.x / 100) * containerWidth;
const endY = 60 * scale + node.level * levelHeight + cardHeight / 2;
          const midY = startY + (endY - startY) / 2;
          
          // 강조 상태 체크
          const isInSelectedPath = false; // 경로 탐색 모드 제거
          
          let isConnectedToHovered = false;
          if (hoveredNode) {
            const allParents = findAllParentNodes(hoveredNode);
            const directChildren = Object.values(nodes)
              .filter(n => n.parents?.includes(hoveredNode))
              .map(n => n.id);
            
            isConnectedToHovered = 
              (allParents.includes(parentId) && allParents.includes(node.id)) ||
              (hoveredNode === parentId && directChildren.includes(node.id));
          }
          
          const isTargetPath = viewMode === 'target' && targetNode &&
                              (isPathToTarget(parentId, targetNode) && isPathToTarget(node.id, targetNode));
          const isSelected = selectedNodes.includes(parentId) && selectedNodes.includes(node.id);
          
          // 목표 경로는 나중에 그리기 위해 여기서 제외
          if (isTargetPath) return null;
          
          // 강조된 선만 이 레이어에서 그림
          if (!isInSelectedPath && !isConnectedToHovered && !isSelected) {
            return null;
          }
          
          let strokeColor = '#DAA520';
let strokeWidth = isMobile ? MOBILE_HIGHLIGHT_LINE : DESKTOP_HIGHLIGHT_LINE;

if (isConnectedToHovered && !isInSelectedPath && !isSelected) {
  strokeColor = '#ad9469';
  strokeWidth = isMobile ? MOBILE_HIGHLIGHT_LINE * 0.75 : DESKTOP_HIGHLIGHT_LINE * 0.75;
}

return (
  <path
    key={`${parentId}-${node.id}-highlight`}
    d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    fill="none"
    opacity={1}
    style={{
      filter: (isInSelectedPath || isSelected) ? 'drop-shadow(0 0 8px #DAA520)' : 'none'
    }}
  />
);
        })
      )}
      
{/* 목표 경로는 마지막에 렌더링 (최상위) */}
      {targetNode && Object.values(nodes).map(node => 
        node.parents?.map(parentId => {
          const parent = nodes[parentId];
          if (!parent) return null;
          
          const isTargetPath = isPathToTarget(parentId, targetNode) && isPathToTarget(node.id, targetNode);
          if (!isTargetPath) return null;
          
          const levelHeight = 200 * scale;
          const cardHeight = 80 * scale;
          
          const startX = (parent.x / 100) * containerWidth;
          const startY = 60 * scale + parent.level * levelHeight + cardHeight / 2;
          const endX = (node.x / 100) * containerWidth;
          const endY = 60 * scale + node.level * levelHeight + cardHeight / 2;
          const midY = startY + (endY - startY) / 2;
          
          return (
            <path
  key={`${parentId}-${node.id}-target`}
  d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
  stroke="#e0cf6fff"
  strokeWidth={isMobile ? MOBILE_HIGHLIGHT_LINE * 1.2 : DESKTOP_HIGHLIGHT_LINE * 1.25}
  fill="none"
  opacity={1}
/>
          );
        })
      )}
      
      {/* 목표 노드의 다음 레벨 연결선 별도 렌더링 */}
      {targetNode && nodes[targetNode]?.children?.map(childId => {
        const child = nodes[childId];
        if (!child) return null;
        
        const levelHeight = 200 * scale;
        const cardHeight = 80 * scale;
        
        const startX = (nodes[targetNode].x / 100) * containerWidth;
        const startY = 60 * scale + nodes[targetNode].level * levelHeight + cardHeight / 2;
        const endX = (child.x / 100) * containerWidth;
        const endY = 60 * scale + child.level * levelHeight + cardHeight / 2;
        const midY = startY + (endY - startY) / 2;
        
        return (
          <path
            key={`${targetNode}-${childId}-next`}
            d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
            stroke="#ad9469"  // 마우스오버 색상
            strokeWidth={isMobile 
              ? (MOBILE_NORMAL_LINE + MOBILE_HIGHLIGHT_LINE) / 2  // 모바일: 중간 굵기
              : DESKTOP_HIGHLIGHT_LINE * 0.75}  // 데스크탑: 더 얇게
            fill="none"
            opacity={1}
          />
        );
      })}
    </g>
    
    {/* 연결 모드 임시선 */}
    {connectionMode && connectionStart && hoveredNode && hoveredNode !== connectionStart && (() => {
      const startNode = nodes[connectionStart];
      const endNode = nodes[hoveredNode];
      if (!startNode || !endNode) return null;
      
      const levelHeight = 200;
      const cardHeight = 80;
      
      const startX = (startNode.x / 100) * containerWidth;
      const startY = 150 + startNode.level * levelHeight + cardHeight / 2;
      const endX = (endNode.x / 100) * containerWidth;
      const endY = 150 + endNode.level * levelHeight + cardHeight / 2;
      
      return (
        <path
          d={`M ${startX} ${startY} L ${endX} ${endY}`}
          stroke={canConnect(connectionStart, hoveredNode) ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'}
          strokeWidth="1.5"
          strokeDasharray="8 4"
          fill="none"
        />
      );
    })()}
  </g>
</svg>

              <div
        style={{
          transform: isMobile 
            ? `translate(${pan.x}px, ${pan.y}px) scale(${mobileZoomScale})`
            : `translate(${pan.x}px, ${pan.y}px)`,
          transformOrigin: '0 0',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
{/* 프로젝트 타입별 영역 표시 (관리자 모드) */}
          {isAdminMode && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 bottom-0 left-0 w-[25%] bg-blue-500/5 border-r border-blue-500/20">
                <span className="absolute top-4 left-4 text-xs text-blue-500/50">구축</span>
              </div>
              <div className="absolute top-0 bottom-0 left-[25%] w-[50%] bg-gray-500/5 border-r border-gray-500/20">
                <span className="absolute top-4 left-4 text-xs text-gray-500/50">복합</span>
              </div>
              <div className="absolute top-0 bottom-0 left-[75%] w-[25%] bg-green-500/5">
                <span className="absolute top-4 left-4 text-xs text-green-500/50">운영</span>
              </div>
            </div>
          )}

{/* 레벨별 구분선 */}
              {[0, 1, 2, 3, 4, 5, 6].map(level => (
                <div
                  key={level}
                  className="absolute left-0 right-0 border-dashed"
                  style={{ 
                    top: `${60 * scale + level * 200 * scale - 40 * scale}px`,
                    borderColor: 'rgba(107, 114, 128, 0.15)',
                    borderTopWidth: isMobile ? '1px' : '2px',
                    borderTopStyle: 'dashed'
                  }}
                >
              <span className="absolute -top-0 left-4 px-2 bg-black text-gray-400"
                    style={{ fontSize: `${12 * scale}px` }}>
                {level === 0 && '입문 (1-3년차)'}
                {level === 1 && '체계화 (4-7년차)'}
                {level === 2 && '전문화 (8-12년차)'}
                {level === 3 && '주도화 (13-18년차)'}
                {level === 4 && '차별화 (20년차+)'}
                {level === 5 && '전략화 (25년차+)'}
                {level === 6 && '최고 경영자'}
              </span>
              </div>
            ))}
            
            {/* 관리자 모드에서 클릭 가능한 연결선 */}
            {isAdminMode && (
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{
                  width: '100%',
                  height: '100%',
                  transform: isMobile ? `scale(${mobileZoomScale})` : 'none',
                  transformOrigin: '0 0'
                }}
              >
                {Object.values(nodes).map(node =>
                node.parents?.map(parentId => {
                  const parent = nodes[parentId];
                  if (!parent) return null;
                  
                  const actualWidth = containerWidth;
                  const startX = (parent.x / 100) * actualWidth;
                  const startY = 60 * scale + parent.level * 200 * scale + 40 * scale;
                  const endX = (node.x / 100) * actualWidth;
                  const endY = 60 * scale + node.level * 200 * scale + 40 * scale;
                  const midY = startY + (endY - startY) / 2;
                  
                  const connectionKey = `${parentId}-${node.id}`;
                  const isHovered = hoveredConnection === connectionKey;
                  
                  return (
                    <g key={connectionKey}>
                      {/* 투명한 클릭 영역 (더 넓게) */}
                      <path
                        d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
                        stroke="transparent"
                        strokeWidth="20"
                        fill="none"
                        className="pointer-events-auto cursor-pointer"
                        onClick={() => handleConnectionClick(parentId, node.id)}
                        onMouseEnter={() => setHoveredConnection(connectionKey)}
                        onMouseLeave={() => setHoveredConnection(null)}
                      />
                      {/* 실제 보이는 선 */}
                      <path
                        d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
                        stroke={isHovered ? '#EF4444' : 'transparent'}
                        strokeWidth={isHovered ? '3' : '0'}
                        fill="none"
                        className="pointer-events-none"
                        strokeDasharray={isHovered ? '5,5' : 'none'}
                      />
                      {/* 호버 시 X 표시 */}
                      {isHovered && (
                        <g transform={`translate(${(startX + endX) / 2}, ${midY})`}>
                          <circle r="12" fill="#EF4444" />
                          <text
                            x="0"
                            y="0"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="16"
                            fontWeight="bold"
                            className="pointer-events-none select-none"
                          >
                            ×
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          )}

          {/* 노드 렌더링 (성능 최적화: 뷰포트 내 노드만) */}
          {visibleNodes.map(node => {
            const levelHeight = 200 * scale;
            const yPosition = 60 * scale + node.level * levelHeight;
            const isVisible = isNodeVisible(node);
            const isTargetPath = targetNode && isPathToTarget(node.id, targetNode);
            const isSelected = selectedNode === node.id || selectedNodes.includes(node.id);
            
            return (
              <div
                key={node.id}
                id={`node-${node.id}`}
                className={`absolute transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-20'
                } ${!isAdminMode || isAdminMode ? 'cursor-pointer' : 'cursor-default'}`}
                style={{
                  left: `calc(${node.x}% - ${(isMobile ? 140 * scale : 188 * scale) / 2}px)`,
                  top: `${yPosition}px`,
                  zIndex: hoveredNode === node.id ? 60 : isTargetPath || isSelected ? 50 : 30,
                  // 모바일에서 터치 영역 보정
                  ...(isMobile && {
                    pointerEvents: 'auto',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  })
                }}
                draggable={isAdminMode}
                onDragStart={(e) => handleDragStart(e, node.id)}
                onMouseEnter={() => !isMobile && setHoveredNode(node.id)}
                onMouseLeave={() => !isMobile && setHoveredNode(null)}
                onClick={(e) => {
  e.stopPropagation();
  handleNodeClick(node.id, e);
}}
                onDoubleClick={() => {
                  if (isAdminMode) {
                    setEditingNode(node.id);
                  }
                }}
                onContextMenu={(e) => handleContextMenu(e, node.id)}
                role="button"
                tabIndex={0}
                aria-label={`${node.title} - ${node.year} - ${node.salary}`}
                aria-selected={isSelected}
              >
                {/* 노드 글로우 효과 - 모바일에서는 비활성화 또는 간소화 */}
                {!isMobile && (hoveredNode === node.id || isTargetPath || isSelected) && (
                  <div 
                    className="absolute rounded-full filter blur-xl opacity-20 pointer-events-none"
                    style={{ 
                      backgroundColor: highContrastMode ? '#FFD700' : node.color,
                      width: isMobile ? `${140 * scale}px` : '160px',
                      height: isMobile ? `${140 * scale}px` : '160px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                )}

                {/* 노드 카드 */}
                <div className={`relative ${!isMobile ? 'backdrop-blur-xl' : 'backdrop-blur-sm'} rounded-2xl border transition-all duration-300 ${
                  (targetNode === node.id) || isSelected
                    ? 'bg-gray-600/30 border-gray-400/50 shadow-2xl scale-105'
                    : isTargetPath
                    ? 'bg-gray-700/30 border-gray-500/50 shadow-xl'
                    : connectionStart === node.id
                    ? 'bg-gray-600/30 border-gray-400/50 shadow-2xl scale-110'
                    : hoveredNode === node.id
                    ? 'bg-black/80 border-gray-600/50 scale-105'
                    : 'bg-black/70 border-gray-700/50'
                    }`} 
                    style={{
                      width: isMobile ? `${140 * scale}px` : `${188 * scale}px`,
                      padding: isMobile ? `${12 * scale}px` : `${14 * scale}px`,
                      fontSize: `${12 * scale}px`,
                      // 모바일에서 터치 영역 확대
                      ...(isMobile && {
                        paddingTop: `${16 * scale}px`,
                        paddingBottom: `${16 * scale}px`,
                        minHeight: `${80 * scale}px`,
                        pointerEvents: 'auto',
                        WebkitTapHighlightColor: 'transparent'
                      }),
                      boxShadow: (() => {
                        // 다음 레벨 노드 체크: 목표 노드의 직접 자식
                        const isNextLevel = targetNode && nodes[targetNode]?.children?.includes(node.id);
                        
                        if (isMobile) {
                          if (targetNode === node.id) {
                            return '0 0 7px #e0cf6f';  // 모바일 목표 노드
                          } else if (isNextLevel) {
                            return '0 0 1px #e0cf6f';  // 모바일 다음 레벨: 더 약한 그림자
                          } else if (isTargetPath) {
                            return '0 0 2px #e0cf6f';  // 모바일 일반 경로
                          }
                        } else {
                          if (targetNode === node.id) {
                            return '0 0 10px #e0cf6f, 0 0 20px #e0cf6f';  // 데스크탑 목표 노드
                          } else if (isNextLevel) {
                            return '0 0 3px #e0cf6f';  // 데스크탑 다음 레벨: 중간 그림자
                          } else if (isTargetPath) {
                            return '0 0 5px #e0cf6f';  // 데스크탑 일반 경로
                          }
                        }
                        return 'none';
                      })()
                    }}
                    >
                  {/* 관리자 모드 버튼들 */}
                  {isAdminMode && hoveredNode === node.id && (
                    <div className="absolute -top-3 -right-3 flex space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingNode(node.id);
                        }}
                        className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                        title="편집"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicateNode(node.id);
                        }}
                        className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                        title="복제"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNode(node.id);
                        }}
                        className="w-7 h-7 bg-red-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                        title="삭제"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}




                  {/* 다중 선택 표시 */}
                  {selectedNodes.includes(node.id) && (
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                  )}

                  {/* 레벨 인디케이터 */}
                  {!selectedNodes.includes(node.id) && (
                    <div className="absolute bg-gray-800 rounded-full flex items-center justify-center font-bold"
                        style={{
                          top: `${-10 * scale}px`,
                          left: `${-10 * scale}px`,
                          width: `${20 * scale}px`,
                          height: `${20 * scale}px`,
                          fontSize: `${10 * scale}px`
                        }}>
                      L{node.level}
                    </div>
                  )}

                  {/* 연결 유효성 표시 (연결 모드) */}
                  {connectionMode && connectionStart && connectionStart !== node.id && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center">
                      {canConnect(connectionStart, node.id) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  )}

                  {/* 모바일 컴팩트 뷰 */}
                  {isMobile ? (
                    <div className="flex flex-col items-center">
                      <span style={{ fontSize: `${18 * scale}px`, marginBottom: `${4 * scale}px` }}>
                        {node.icon}
                      </span>
                      <h3 className={`font-bold text-center ${highContrastMode ? 'text-white' : ''}`}
                          style={{ 
                            fontSize: `${14 * scale}px`,
                            marginBottom: `${2 * scale}px`
                          }}>
                        {node.title}
                      </h3>
                      <p className={`text-center ${highContrastMode ? 'text-gray-100' : 'text-gray-300'}`}
                        style={{ 
                          fontSize: `${10 * scale}px`
                        }}>
                        {node.salary}
                      </p>
                    </div>
                  ) : (
                  /* 데스크톱 뷰 - 기존 코드 */
                  <div className="flex items-start" style={{ gap: `${8 * scale}px` }}>
                    <span style={{ fontSize: `${20 * scale}px` }}>
                      {node.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-bold ${highContrastMode ? 'text-white' : ''}`}
                          style={{ 
                            fontSize: `${16 * scale}px`,
                            marginBottom: `${4 * scale}px`
                          }}>
                        {node.title}
                      </h3>
                      <p className={`${highContrastMode ? 'text-gray-100' : 'text-gray-300'}`}
                        style={{ 
                          fontSize: `${11 * scale}px`,
                          marginTop: `${4 * scale}px`
                        }}>
                        {node.salary}
                      </p>
                    </div>
                  </div>
                )}

                {/* 프로젝트 타입 인디케이터 - 데스크톱에서만 표시 */}
                {!isMobile && (
                  <div className="flex items-center justify-end" style={{ marginTop: `${7 * scale}px` }}>
                    <span className={`rounded-full font-medium ${
                      node.projectType === 'operation' 
                        ? 'bg-green-600/30 text-green-300 border border-green-500/30'
                        : node.projectType === 'construction'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30'
                        : 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                    }`}
                    style={{
                      fontSize: `${11 * scale}px`,
                      padding: `${3 * scale}px ${6 * scale}px`
                    }}>
                      {node.projectType === 'operation' ? '운영' :
                      node.projectType === 'construction' ? '구축' : '복합'}
                    </span>
                  </div>
                )}

                {/* 연결 모드 인디케이터 */}
                {connectionMode && connectionStart === node.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* 호버 정보 */}
              {hoveredNode === node.id && !isMobile && (
                <div 
                  className={`absolute top-0 w-72 p-4 backdrop-blur-xl bg-black/90 rounded-xl border border-gray-700/50 shadow-2xl ${
                    node.x >= 80 ? 'right-full mr-4' : 'left-full ml-4'
                  }`}
                  style={{ zIndex: 100 }}>
                  <h4 className="font-bold mb-2">{node.title}</h4>
                    <p className="text-sm text-gray-300 mb-3">{node.description}</p>
                    
                    {node.skills && node.skills.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-gray-400 mb-1">필요 스킬</p>
                        <div className="flex flex-wrap gap-1">
                          {node.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-gray-800/50 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-xs text-gray-500">
                        {isAdminMode 
                          ? '더블클릭: 편집 | 우클릭: 메뉴' 
                          : '클릭하여 목표 설정'}
                      </p>
                    </div>
                  </div>
                )}
                
{/* 모바일 상세 팝업 - 호버 정보 밖으로 이동! */}
                {isMobile && mobilePopupNode === node.id && (
                <div 
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-black/95 rounded-xl border border-gray-700/50 shadow-2xl z-50 mobile-popup"
                  style={{
                    width: `${320 * scale}px`,  
                    padding: `${18 * scale}px ${28 * scale}px`,  
                    fontSize: `${11 * scale}px`
                  }}
                  onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => setMobilePopupNode(null)}
                    className="absolute text-gray-400 hover:text-white"
                    style={{
                      top: `${16 * scale}px`,
                      right: `${16 * scale}px`,
                      width: `${24 * scale}px`,
                      height: `${24 * scale}px`
                    }}>
                    <X style={{ width: '100%', height: '100%' }} />
                  </button>
                  
                  <div className="flex items-center" style={{ 
                    gap: `${8 * scale}px`,
                    marginBottom: `${8 * scale}px`
                  }}>
                    <span style={{ fontSize: `${22 * scale}px` }}>{node.icon}</span>
                    <h4 className="font-bold text-white" style={{ fontSize: `${24 * scale}px` }}>
                      {node.title}
                    </h4>
                  </div>
                  
                  {/* 타입 표시 */}
                  <div style={{ marginBottom: `${8 * scale}px` }}>
                    <span className={`rounded ${
                      node.projectType === 'operation' 
                        ? 'bg-green-600/30 text-green-300'
                        : node.projectType === 'construction'
                        ? 'bg-blue-600/30 text-blue-300'
                        : 'bg-purple-600/30 text-purple-300'
                    }`}
                    style={{
                      fontSize: `${18 * scale}px`,
                      padding: `${3 * scale}px ${6 * scale}px`,
                      display: 'inline-block'
                    }}>
                      {node.projectType === 'operation' ? '운영' :
                      node.projectType === 'construction' ? '구축' : '복합'}
                    </span>
                  </div>
                  
                  {/* 설명 - 전체 표시 */}
                  {node.description && (
                    <p className="text-gray-300" style={{ 
                      fontSize: `${20 * scale}px`,
                      marginTop: `${8 * scale}px`,
                      paddingTop: `${8 * scale}px`,
                      borderTopWidth: '1px',
                      lineHeight: 1.4
                    }}>
                      {node.description}
                    </p>
                  )}
                  
                  {/* 필요 스킬 - 모두 표시 */}
                  {node.skills && node.skills.length > 0 && (
                    <div style={{ 
                      marginTop: `${8 * scale}px`,
                      paddingTop: `${8 * scale}px`,
                      borderTopWidth: '1px'
                    }}>
                      <p className="font-medium text-gray-400" style={{ 
                        fontSize: `${18 * scale}px`,
                        marginBottom: `${6 * scale}px`
                      }}>
                        스킬
                      </p>
                      <div className="flex flex-wrap" style={{ gap: `${8 * scale}px` }}>
                        {node.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-800/50 rounded" style={{
                            fontSize: `${16 * scale}px`,
                            padding: `${4 * scale}px ${6 * scale}px`
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              </div>
            );
          })}
        </div>


        



        {/* 미니맵 */}
        {showMinimap && (
          <div className="absolute bottom-4 right-4 w-52 h-40 bg-black/80 rounded-lg border border-gray-700/50 overflow-hidden">
            <canvas 
              ref={minimapRef}
              className="w-full h-full cursor-pointer"
onClick={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  
  setPan({
    x: -x * containerRef.current.clientWidth + containerRef.current.clientWidth / 2,
    y: -y * 1200 + containerRef.current.clientHeight / 2
  });
}}
            />
          </div>
        )}

        {/* 컨텍스트 메뉴 */}
        {showContextMenu && (
          <div
            className="absolute z-50 bg-gray-900 rounded-lg border border-gray-700 shadow-xl py-2"
            style={{
              left: `${contextMenuPos.x}px`,
              top: `${contextMenuPos.y}px`
            }}
          >
            {contextMenuTarget ? (
              <>
                <button
                  onClick={() => {
                    setEditingNode(contextMenuTarget);
                    setShowContextMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>편집</span>
                </button>
                <button
                  onClick={() => {
                    duplicateNode(contextMenuTarget);
                    setShowContextMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>복제</span>
                </button>
                <button
                  onClick={() => {
                    setCopiedNode(nodes[contextMenuTarget]);
                    setShowContextMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2"
                >
                  <Clipboard className="w-4 h-4" />
                  <span>복사</span>
                </button>
                <div className="h-px bg-gray-700 my-1" />
                <button
                  onClick={() => {
                    deleteNode(contextMenuTarget);
                    setShowContextMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2 text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>삭제</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
const rect = containerRef.current.getBoundingClientRect();
const x = (contextMenuPos.x - rect.left - pan.x) / rect.width * 100;
const y = (contextMenuPos.y - rect.top - pan.y);
                    const level = Math.max(0, Math.min(6, Math.floor((y - 150) / 180)));
                    
                    const newId = `node_${Date.now()}`;
                    const newNode = {
                      id: newId,
                      title: '새 직무',
                      year: '경력',
                      salary: '연봉',
                      level,
                      x: snapToGrid ? snapToGridValue(x) : x,
                      projectType: 'hybrid',
                      description: '설명을 입력하세요',
                      skills: [],
                      parents: [],
                      children: [],
                      color: '#6B7280',
                      icon: '💼'
                    };
                    
                    addToHistory(nodes);
                    setNodes(prev => ({ ...prev, [newId]: newNode }));
                    setShowContextMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>여기에 노드 추가</span>
                </button>
                {copiedNode && (
                  <button
                    onClick={() => {
                      pasteNode();
                      setShowContextMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-800 flex items-center space-x-2"
                  >
                    <Clipboard className="w-4 h-4" />
                    <span>붙여넣기</span>
                  </button>
                )}
              </>
            )}
          </div>
        )}


      </div>

      {/* 하단 정보 패널 */}
      {renderBottomPanel && renderBottomPanel({ nodes, targetNode, viewMode })}

      {/* 노드 편집 모달 */}
{editingNode && (
  <NodeEditModal 
    nodeId={editingNode}
    nodes={nodes}
    isAdminMode={isAdminMode}
    onClose={() => setEditingNode(null)}
    onUpdate={(nodeId, updates) => {
      addToHistory(nodes);
      
      // ID 변경 처리
      if (isAdminMode && updates.id && updates.id !== nodeId) {
        const newNodes = { ...nodes };
        // 기존 노드 삭제
        delete newNodes[nodeId];
        // 새 ID로 노드 추가
        newNodes[updates.id] = { ...nodes[nodeId], ...updates };
        // 연결 관계 업데이트
        Object.values(newNodes).forEach(node => {
          if (node.parents?.includes(nodeId)) {
            node.parents = node.parents.map(id => id === nodeId ? updates.id : id);
          }
          if (node.children?.includes(nodeId)) {
            node.children = node.children.map(id => id === nodeId ? updates.id : id);
          }
        });
        setNodes(newNodes);
      } else {
        setNodes(prev => ({
          ...prev,
          [nodeId]: { ...prev[nodeId], ...updates }
        }));
      }
      setUnsavedChanges(true);
      setEditingNode(null);
    }}
  />
)}
      {/* 검색 모달 */}
      {showSearch && (
        <SearchModal 
          nodes={nodes}
          onSelect={scrollToNode}
          onClose={() => setShowSearch(false)}
        />
      )}

      {/* 노드 템플릿 모달 */}
      {showTemplates && (
        <NodeTemplateModal 
          templates={nodeTemplates}
          onSelectTemplate={handleTemplateSelect}
          onClose={() => setShowTemplates(false)}
        />
      )}

      {/* 패스워드 확인 모달 */}
      {showPasswordModal && (
        <PasswordModal 
          onSuccess={() => {
            setIsAdminMode(true);
            setShowPasswordModal(false);
          }}
          onClose={() => setShowPasswordModal(false)}
        />
      )}
    </>
  );
};

export default CareerPathViewer;