// DesignerPath.js
// 자동 생성된 파일 - 2025-08-18T18:15:14.070Z
import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import CareerPathViewer from '../common/CareerPathViewer';

const DesignerPath = () => {
  const designerNodes = {
    web_designer_entry: {
        id: "web_designer_entry",
        title: "웹 디자이너",
        year: "1-3년차",
        salary: "2,800-3,800만원",
        icon: "🎨",
        level: 0,
        x: 50,
        projectType: "hybrid",
        description: "웹 디자인 기초 역량 구축 및 다양한 프로젝트 경험",
        skills: [
            "포토샵/일러스트",
            "Figma 기초",
            "웹 디자인 기본",
            "HTML/CSS 이해"
        ],
        parents: [],
        children: [
            "ui_designer",
            "ux_designer",
            "graphic_designer",
            "mobile_designer",
            "product_designer_l1",
            "design_assistant",
            "node_1755397258472"
        ]
    },
    ui_designer: {
        id: "ui_designer",
        title: "UI 디자이너",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "🖥️",
        level: 1,
        x: 9.5,
        projectType: "construction",
        description: "사용자 인터페이스 설계 및 구현",
        skills: [
            "Figma/Sketch",
            "프로토타이핑",
            "디자인 시스템",
            "인터랙션 디자인"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "senior_ui_ux_designer",
            "product_designer",
            "senior_designer",
            "service_designer",
            "design_ops_specialist",
            "brand_designer_l2",
            "node_1755397354313"
        ]
    },
    ux_designer: {
        id: "ux_designer",
        title: "UX 디자이너",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "🎯",
        level: 1,
        x: 20.5,
        projectType: "construction",
        description: "사용자 경험 연구 및 설계",
        skills: [
            "사용자 리서치",
            "와이어프레임",
            "정보 설계",
            "사용성 테스트"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "senior_ui_ux_designer",
            "service_designer",
            "design_ops_specialist",
            "brand_designer_l2",
            "node_1755397354313"
        ]
    },
    graphic_designer: {
        id: "graphic_designer",
        title: "그래픽 디자이너",
        year: "4-7년차",
        salary: "3,000-4,000만원",
        icon: "🎨",
        level: 1,
        x: 45,
        projectType: "hybrid",
        description: "비주얼 콘텐츠 제작",
        skills: [
            "일러스트레이션",
            "편집 디자인",
            "브랜딩",
            "인포그래픽"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "content_designer",
            "brand_designer_l2",
            "senior_designer",
            "node_1755397354313",
            "design_ops_specialist"
        ]
    },
    mobile_designer: {
        id: "mobile_designer",
        title: "모바일 디자이너",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "📱",
        level: 1,
        x: 57,
        projectType: "hybrid",
        description: "모바일 앱 UI/UX 디자인",
        skills: [
            "iOS/Android 가이드",
            "모바일 UX",
            "앱 디자인",
            "제스처 인터랙션"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "product_designer",
            "service_designer",
            "content_designer",
            "node_1755397354313"
        ]
    },
    product_designer_l1: {
        id: "product_designer_l1",
        title: "프로덕트 디자이너",
        year: "4-7년차",
        salary: "3,800-4,800만원",
        icon: "📦",
        level: 1,
        x: 33.5,
        projectType: "hybrid",
        description: "제품 전반의 디자인 담당",
        skills: [
            "제품 이해",
            "데이터 기반 디자인",
            "프로토타이핑",
            "사용자 테스트"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "product_designer",
            "senior_designer",
            "design_ops_specialist",
            "node_1755397354313"
        ]
    },
    design_assistant: {
        id: "design_assistant",
        title: "디자인 어시스턴트",
        year: "4-7년차",
        salary: "3,200-4,200만원",
        icon: "🔧",
        level: 1,
        x: 84.5,
        projectType: "operation",
        description: "디자인 운영 및 유지보수 담당",
        skills: [
            "디자인 QA",
            "에셋 관리",
            "가이드 문서화",
            "디자인 운영"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "design_lead",
            "design_ops_specialist",
            "node_1755397354313",
            "service_designer",
            "senior_designer",
            "senior_ui_ux_designer"
        ]
    },
    senior_ui_ux_designer: {
        id: "senior_ui_ux_designer",
        title: "시니어 UI/UX 디자이너",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "⭐",
        level: 2,
        x: 9.5,
        projectType: "construction",
        description: "UI/UX 전문성 심화 및 프로젝트 리딩",
        skills: [
            "디자인 전략",
            "멘토링",
            "프로젝트 리딩",
            "디자인 시스템 구축"
        ],
        parents: [
            "ui_designer",
            "ux_designer",
            "node_1755397258472",
            "design_assistant"
        ],
        children: [
            "art_director",
            "cx_manager",
            "creative_director_l3",
            "node_1755398053934",
            "presales_designer"
        ]
    },
    senior_designer: {
        id: "senior_designer",
        title: "Senior Designer",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "💎",
        level: 2,
        x: 20.5,
        projectType: "construction",
        description: "디자인 전문성 확립",
        skills: [
            "전문 분야 확립",
            "복잡한 문제해결",
            "크로스펑셔널 협업",
            "디자인 혁신"
        ],
        parents: [
            "product_designer_l1",
            "node_1755397258472",
            "graphic_designer",
            "ui_designer",
            "design_assistant"
        ],
        children: [
            "creative_director_l3",
            "design_team_lead",
            "cx_manager",
            "presales_designer",
            "node_1755398053934"
        ]
    },
    product_designer: {
        id: "product_designer",
        title: "시니어 프로덕트 디자이너",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "🚀",
        level: 2,
        x: 32.5,
        projectType: "hybrid",
        description: "제품 디자인 전반 리딩 및 전략적 디자인 결정",
        skills: [
            "제품 전략",
            "데이터 기반 디자인",
            "비즈니스 임팩트",
            "크로스펑셔널 리딩",
            "A/B 테스팅 설계"
        ],
        parents: [
            "ui_designer",
            "mobile_designer",
            "product_designer_l1"
        ],
        children: [
            "product_manager",
            "presales_designer",
            "node_1755398053934"
        ],
        color: "#6B7280"
    },
    service_designer: {
        id: "service_designer",
        title: "서비스 디자이너",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "🌟",
        level: 2,
        x: 51.5,
        projectType: "hybrid",
        description: "서비스 경험 전체 설계",
        skills: [
            "서비스 블루프린트",
            "저니맵",
            "비즈니스 모델",
            "혁신 방법론"
        ],
        parents: [
            "ux_designer",
            "mobile_designer",
            "node_1755397258472",
            "ui_designer",
            "design_assistant"
        ],
        children: [
            "cx_manager",
            "design_team_lead",
            "node_1755398053934",
            "presales_designer"
        ]
    },
    content_designer: {
        id: "content_designer",
        title: "콘텐츠 디자이너",
        year: "8-12년차",
        salary: "4,200-5,200만원",
        icon: "✏️",
        level: 2,
        x: 61.5,
        projectType: "hybrid",
        description: "콘텐츠 기획 및 디자인",
        skills: [
            "콘텐츠 전략",
            "UX 라이팅",
            "정보 아키텍처",
            "톤앤매너"
        ],
        parents: [
            "graphic_designer",
            "mobile_designer"
        ],
        children: [
            "brand_designer",
            "creative_director_l3",
            "node_1755398053934",
            "presales_designer"
        ]
    },
    brand_designer_l2: {
        id: "brand_designer_l2",
        title: "브랜드 디자이너",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "🏷️",
        level: 2,
        x: 42.5,
        projectType: "hybrid",
        description: "브랜드 아이덴티티 구축",
        skills: [
            "브랜드 전략",
            "CI/BI 개발",
            "브랜드 가이드",
            "마케팅 협업"
        ],
        parents: [
            "graphic_designer",
            "node_1755397258472",
            "ui_designer",
            "ux_designer"
        ],
        children: [
            "brand_designer",
            "art_director",
            "creative_director_l3",
            "node_1755398053934",
            "presales_designer"
        ]
    },
    design_lead: {
        id: "design_lead",
        title: "디자인 리드",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "👥",
        level: 2,
        x: 79.5,
        projectType: "operation",
        description: "디자인 품질 관리 및 프로세스 개선",
        skills: [
            "디자인 QA",
            "프로세스 최적화",
            "품질 관리",
            "운영 효율화"
        ],
        parents: [
            "design_assistant",
            "node_1755397258472"
        ],
        children: [
            "design_ops_manager",
            "design_team_lead",
            "creative_director_l3",
            "art_director",
            "node_1755398053934",
            "presales_designer"
        ]
    },
    design_ops_specialist: {
        id: "design_ops_specialist",
        title: "DesignOps Specialist",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "⚙️",
        level: 2,
        x: 90.5,
        projectType: "operation",
        description: "디자인 운영 체계 관리",
        skills: [
            "툴체인 관리",
            "워크플로우 최적화",
            "리소스 관리",
            "성과 측정"
        ],
        parents: [
            "design_assistant",
            "graphic_designer",
            "product_designer_l1",
            "ux_designer",
            "ui_designer",
            "node_1755397258472"
        ],
        children: [
            "design_ops_manager",
            "creative_director_l3",
            "design_team_lead",
            "node_1755398053934",
            "presales_designer"
        ],
        color: "#6B7280"
    },
    art_director: {
        id: "art_director",
        title: "아트 디렉터",
        year: "13-18년차",
        salary: "5,800-7,000만원",
        icon: "🎭",
        level: 3,
        x: 9.5,
        projectType: "construction",
        description: "비주얼 컨셉 총괄",
        skills: [
            "아트 디렉션",
            "크리에이티브 전략",
            "브랜드 비주얼",
            "캠페인 기획"
        ],
        parents: [
            "senior_ui_ux_designer",
            "brand_designer_l2",
            "design_lead"
        ],
        children: [
            "senior_art_director",
            "creative_director_l4"
        ]
    },
    creative_director_l3: {
        id: "creative_director_l3",
        title: "디자인 매니저",
        year: "13-18년차",
        salary: "6,000-7,500만원",
        icon: "🎬",
        level: 3,
        x: 20.5,
        projectType: "construction",
        description: "디자인 팀 관리, 프로젝트 기획, 실행, 품질 관리, 팀원 역량 개발, 크리에이티브 방향성 제시, 디자인 혁신 주도",
        skills: [
            "디자인 전략 수립",
            "프로젝트 관리",
            "팀 리더십 및 멘토링",
            "크리에이티브 방향성 제시",
            "디자인 툴 및 프로세스 최적화",
            "협업 및 커뮤니케이션",
            "디자인 품질 관리"
        ],
        parents: [
            "senior_designer",
            "design_lead",
            "brand_designer_l2",
            "node_1755397354313",
            "senior_ui_ux_designer",
            "design_ops_specialist",
            "content_designer"
        ],
        children: [
            "creative_director_l4",
            "brand_director",
            "node_1755398128591",
            "design_director",
            "senior_art_director"
        ],
        color: "#6B7280"
    },
    product_manager: {
        id: "product_manager",
        title: "Product Manager",
        year: "13-18년차",
        salary: "5,800-7,000만원",
        icon: "📊",
        level: 3,
        x: 31.5,
        projectType: "hybrid",
        description: "제품 전략 및 로드맵 관리",
        skills: [
            "제품 전략",
            "로드맵 관리",
            "데이터 분석",
            "stakeholder 관리"
        ],
        parents: [
            "product_designer"
        ],
        children: [
            "senior_pm"
        ]
    },
    brand_designer: {
        id: "brand_designer",
        title: "브랜드/마케팅 매니저",
        year: "13-18년차",
        salary: "5,500-6,800만원",
        icon: "💫",
        level: 3,
        x: 41.5,
        projectType: "hybrid",
        description: "브랜드 전략 총괄, 마케팅 캠페인 디자인",
        skills: [
            "브랜드 전략",
            "마케팅 전략",
            "캠페인 디자인/관리",
            "파트너십",
            "성과 분석",
            "A/B 테스트"
        ],
        parents: [
            "content_designer",
            "brand_designer_l2"
        ],
        children: [
            "brand_director",
            "marketing_director"
        ],
        color: "#6B7280"
    },
    cx_manager: {
        id: "cx_manager",
        title: "CX Manager",
        year: "13-18년차",
        salary: "5,500-6,800만원",
        icon: "🌈",
        level: 3,
        x: 90,
        projectType: "operation",
        description: "고객 경험 관리 총괄",
        skills: [
            "CX 전략 수립",
            "고객 데이터 분석",
            "옴니채널 관리",
            "CX 혁신"
        ],
        parents: [
            "service_designer",
            "node_1755397354313",
            "senior_designer",
            "senior_ui_ux_designer"
        ],
        children: [
            "head_of_cx"
        ],
        color: "#6B7280"
    },
    presales_designer: {
        id: "presales_designer",
        title: "Pre-sales Designer",
        year: "13-18년차",
        salary: "5,500-6,800만원",
        icon: "💼",
        level: 3,
        x: 61.5,
        projectType: "hybrid",
        description: "영업 지원 및 제안서 디자인",
        skills: [
            "제안서 작성",
            "프레젠테이션",
            "고객 니즈 분석",
            "비즈니스 이해"
        ],
        parents: [
            "product_designer",
            "senior_designer",
            "brand_designer_l2",
            "senior_ui_ux_designer",
            "service_designer",
            "content_designer",
            "node_1755397354313",
            "design_lead",
            "design_ops_specialist"
        ],
        children: [
            "bd_manager",
            "marketing_director",
            "brand_director"
        ]
    },
    design_team_lead: {
        id: "design_team_lead",
        title: "디자인 센터장",
        year: "13-18년차",
        salary: "5,800-7,000만원",
        icon: "👔",
        level: 3,
        x: 51.5,
        projectType: "hybrid",
        description: "디자인 센터 운영 총괄",
        skills: [
            "센터 관리",
            "인재 육성",
            "성과 관리",
            "조직 문화"
        ],
        parents: [
            "service_designer",
            "design_lead",
            "node_1755397354313",
            "senior_designer",
            "design_ops_specialist"
        ],
        children: [
            "creative_director_l4",
            "design_director",
            "head_of_cx",
            "senior_art_director",
            "node_1755398128591"
        ],
        color: "#6B7280"
    },
    design_ops_manager: {
        id: "design_ops_manager",
        title: "DesignOps Manager",
        year: "13-18년차",
        salary: "5,800-7,000만원",
        icon: "🔄",
        level: 3,
        x: 80.5,
        projectType: "operation",
        description: "디자인 운영 체계 총괄",
        skills: [
            "운영 전략",
            "프로세스 혁신",
            "도구 관리",
            "팀 효율화"
        ],
        parents: [
            "design_lead",
            "design_ops_specialist"
        ],
        children: [
            "design_director",
            "creative_director_l4"
        ],
        color: "#6B7280"
    },
    senior_art_director: {
        id: "senior_art_director",
        title: "Senior Art Director",
        year: "20년차+",
        salary: "6,800-8,500만원",
        icon: "🎪",
        level: 4,
        x: 9.5,
        projectType: "construction",
        description: "크리에이티브 비전 제시",
        skills: [
            "크리에이티브 비전",
            "대형 캠페인",
            "글로벌 브랜딩",
            "아트 디렉션"
        ],
        parents: [
            "art_director",
            "design_team_lead",
            "creative_director_l3",
            "node_1755398053934"
        ],
        children: [
            "cco",
            "node_1755396753912",
            "vp_design",
            "cdo",
            "head_of_design"
        ]
    },
    creative_director_l4: {
        id: "creative_director_l4",
        title: "Creative Director",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "🎨",
        level: 4,
        x: 20.5,
        projectType: "construction",
        description: "크리에이티브 전략 총괄",
        skills: [
            "크리에이티브 전략",
            "브랜드 캠페인",
            "혁신 주도",
            "대외 협력"
        ],
        parents: [
            "art_director",
            "creative_director_l3",
            "design_team_lead",
            "design_ops_manager",
            "node_1755398053934"
        ],
        children: [
            "cco",
            "cdo",
            "head_of_design",
            "node_1755396753912",
            "vp_design"
        ]
    },
    senior_pm: {
        id: "senior_pm",
        title: "Principal PM (제품)",
        year: "20년차+",
        salary: "7,000-8,500만원",
        icon: "🚀",
        level: 4,
        x: 31,
        projectType: "hybrid",
        description: "제품 전략 최고 전문가, 복수 제품군 전략 총괄 및 신규 비즈니스 모델 개발",
        skills: [
            "제품 비전",
            "전사 전략",
            "글로벌 프로젝트",
            "혁신 리더십",
            "P&L 책임",
            "0 to 1 제품 개발"
        ],
        parents: [
            "product_manager"
        ],
        children: [
            "cpo"
        ],
        color: "#6B7280"
    },
    brand_director: {
        id: "brand_director",
        title: "Brand Director",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "🏆",
        level: 4,
        x: 40,
        projectType: "hybrid",
        description: "브랜드 전략 이사",
        skills: [
            "브랜드 경영",
            "글로벌 브랜딩",
            "전략적 파트너십",
            "브랜드 가치 극대화"
        ],
        parents: [
            "brand_designer",
            "creative_director_l3",
            "presales_designer"
        ],
        children: [
            "cmo"
        ]
    },
    bd_manager: {
        id: "bd_manager",
        title: "BD Manager",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "📈",
        level: 4,
        x: 61,
        projectType: "hybrid",
        description: "사업개발 매니저",
        skills: [
            "사업 개발",
            "파트너십 구축",
            "시장 분석",
            "전략적 제휴"
        ],
        parents: [
            "presales_designer"
        ],
        children: [
            "bd_director"
        ]
    },
    head_of_design: {
        id: "head_of_design",
        title: "Head of Design",
        year: "20년차+",
        salary: "9,000만-1.3억원",
        icon: "👑",
        level: 5,
        x: 80,
        projectType: "operation",
        description: "디자인 조직 총괄",
        skills: [
            "조직 리더십",
            "전략 수립",
            "비즈니스 임팩트",
            "혁신 문화"
        ],
        parents: [
            "creative_director_l4",
            "node_1755398128591",
            "senior_art_director",
            "design_director"
        ],
        children: [
            "ceo"
        ],
        color: "#6B7280"
    },
    head_of_cx: {
        id: "head_of_cx",
        title: "Head of CX",
        year: "20년차+",
        salary: "7,500-9,500만원",
        icon: "🌟",
        level: 4,
        x: 89.5,
        projectType: "operation",
        description: "CX 조직 총괄 책임자",
        skills: [
            "CX 전략 총괄",
            "디지털 혁신",
            "글로벌 CX 관리",
            "C-level 협업"
        ],
        parents: [
            "cx_manager",
            "design_team_lead"
        ],
        children: [
            "cxo"
        ]
    },
    marketing_director: {
        id: "marketing_director",
        title: "Marketing Director",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "📣",
        level: 4,
        x: 50.5,
        projectType: "hybrid",
        description: "마케팅 부문 이사",
        skills: [
            "마케팅 전략",
            "브랜드 관리",
            "성과 최적화",
            "글로벌 캠페인"
        ],
        parents: [
            "brand_designer",
            "presales_designer"
        ],
        children: [
            "cmo"
        ]
    },
    design_director: {
        id: "design_director",
        title: "Design Director",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "🎨",
        level: 4,
        x: 80.5,
        projectType: "operation",
        description: "디자인 부문 이사",
        skills: [
            "디자인 전략",
            "조직 운영",
            "비즈니스 연계",
            "혁신 관리"
        ],
        parents: [
            "design_ops_manager",
            "design_team_lead",
            "creative_director_l3",
            "node_1755398053934"
        ],
        children: [
            "vp_design",
            "cdo",
            "head_of_design"
        ]
    },
    cdo: {
        id: "cdo",
        title: "CDO",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "💎",
        level: 5,
        x: 9.5,
        projectType: "construction",
        description: "최고 디자인 책임자 (Chief Design Officer)",
        skills: [
            "디자인 경영",
            "혁신 전략",
            "조직 문화",
            "비즈니스 임팩트"
        ],
        parents: [
            "creative_director_l4",
            "senior_art_director",
            "design_director"
        ],
        children: [
            "ceo"
        ]
    },
    cco: {
        id: "cco",
        title: "CCO",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "🎭",
        level: 5,
        x: 50,
        projectType: "hybrid",
        description: "최고 크리에이티브 책임자 (Chief Creative Officer)",
        skills: [
            "크리에이티브 경영",
            "브랜드 가치",
            "마케팅 ROI",
            "혁신 문화"
        ],
        parents: [
            "senior_art_director",
            "creative_director_l4",
            "node_1755398128591"
        ],
        children: [
            "ceo"
        ]
    },
    vp_design: {
        id: "vp_design",
        title: "VP of Design",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "🏢",
        level: 5,
        x: 59.5,
        projectType: "hybrid",
        description: "디자인 부문 부사장",
        skills: [
            "경영 전략",
            "포트폴리오 관리",
            "혁신 주도",
            "이사회 보고"
        ],
        parents: [
            "design_director",
            "creative_director_l4",
            "senior_art_director",
            "node_1755398128591"
        ],
        children: [
            "ceo"
        ]
    },
    cpo: {
        id: "cpo",
        title: "CPO (제품)",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "🎯",
        level: 5,
        x: 30.5,
        projectType: "hybrid",
        description: "최고 제품 책임자 (Chief Product Officer)",
        skills: [
            "제품 경영",
            "전사 전략",
            "혁신 리더십",
            "시장 개척"
        ],
        parents: [
            "senior_pm"
        ],
        children: [
            "ceo"
        ],
        color: "#6B7280"
    },
    cmo: {
        id: "cmo",
        title: "CMO",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "📊",
        level: 5,
        x: 40,
        projectType: "hybrid",
        description: "최고 마케팅 책임자 (Chief Marketing Officer)",
        skills: [
            "마케팅 경영",
            "브랜드 전략",
            "성장 전략",
            "ROI 극대화"
        ],
        parents: [
            "brand_director",
            "marketing_director"
        ],
        children: [
            "ceo"
        ]
    },
    bd_director: {
        id: "bd_director",
        title: "BD Director",
        year: "25년차+",
        salary: "9,000만-1.2억원",
        icon: "🎯",
        level: 5,
        x: 69,
        projectType: "hybrid",
        description: "사업개발 이사",
        skills: [
            "전략적 사업 개발",
            "M&A 전략",
            "글로벌 파트너십",
            "신규 시장 개척"
        ],
        parents: [
            "bd_manager",
            "node_1755398128591"
        ],
        children: [
            "ceo"
        ]
    },
    cxo: {
        id: "cxo",
        title: "CXO",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "⭐",
        level: 5,
        x: 89.5,
        projectType: "operation",
        description: "최고 경험 책임자 (Chief Experience Officer)",
        skills: [
            "CX 경영 전략",
            "디지털 트랜스포메이션",
            "고객 중심 문화",
            "글로벌 CX 혁신"
        ],
        parents: [
            "head_of_cx",
            "node_1755398128591"
        ],
        children: [
            "ceo"
        ]
    },
    ceo: {
        id: "ceo",
        title: "CEO",
        year: "25년차+",
        salary: "1.5억-2억원+",
        icon: "👑",
        level: 6,
        x: 50,
        projectType: "hybrid",
        description: "최고 경영자",
        skills: [
            "경영 전반",
            "비전 수립",
            "조직 문화",
            "대외 관계"
        ],
        parents: [
            "cdo",
            "cco",
            "vp_design",
            "cpo",
            "cmo",
            "bd_director",
            "cxo",
            "head_of_design",
            "node_1755396753912"
        ],
        children: []
    },
    node_1755396753912: {
        id: "node_1755396753912",
        title: "ECD",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "🎬",
        level: 5,
        x: 20,
        projectType: "construction",
        description: "Executive Creative Director - 크리에이티브 총괄 이사",
        skills: [
            "크리에이티브 비전 수립",
            "글로벌 캠페인 총괄",
            "멀티 브랜드 관리",
            "크리에이티브 조직 운영"
        ],
        parents: [
            "creative_director_l4",
            "senior_art_director"
        ],
        children: [
            "ceo"
        ],
        color: "#6B7280"
    },
    node_1755397258472: {
        id: "node_1755397258472",
        title: "PA (Project)",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "📝",
        level: 1,
        x: 70.5,
        projectType: "hybrid",
        description: "프로젝트 매니저 보조, 실무 지원 및 문서화",
        skills: [
            "회의 관리",
            "일정 관리 지원",
            "산출물 관리 보조",
            "고객 소통 지원"
        ],
        parents: [
            "web_designer_entry"
        ],
        children: [
            "node_1755397354313",
            "design_lead",
            "senior_designer",
            "service_designer",
            "brand_designer_l2",
            "senior_ui_ux_designer",
            "design_ops_specialist"
        ],
        color: "#6B7280"
    },
    node_1755397354313: {
        id: "node_1755397354313",
        title: "PL (Project)",
        year: "8-12년차",
        salary: "4,200-5,200만원",
        icon: "👨‍💼",
        level: 2,
        x: 70.5,
        projectType: "hybrid",
        description: "하위 파트 리더, 팀원 조율, 산출물 책임",
        skills: [
            "팀 조율",
            "일정/리소스 관리",
            "산출물 품질 관리",
            "문제 해"
        ],
        parents: [
            "node_1755397258472",
            "design_assistant",
            "graphic_designer",
            "ux_designer",
            "ui_designer",
            "mobile_designer",
            "product_designer_l1"
        ],
        children: [
            "design_team_lead",
            "node_1755398053934",
            "cx_manager",
            "creative_director_l3",
            "presales_designer"
        ],
        color: "#6B7280"
    },
    node_1755398053934: {
        id: "node_1755398053934",
        title: "PM (Project)",
        year: "13-18년차",
        salary: "5,800-7,000만원",
        icon: "📊",
        level: 3,
        x: 70.5,
        projectType: "hybrid",
        description: "프로젝트 총괄 관리, 일정·자원·위험 관리 및 의사결정",
        skills: [
            "프로젝트 계획 수립",
            "팀 및 이해관계자 관리",
            "위험 식별/대응",
            "프로젝트 진행 모니터"
        ],
        parents: [
            "node_1755397354313",
            "senior_designer",
            "design_lead",
            "senior_ui_ux_designer",
            "brand_designer_l2",
            "service_designer",
            "content_designer",
            "design_ops_specialist",
            "product_designer"
        ],
        children: [
            "node_1755398128591",
            "creative_director_l4",
            "design_director",
            "senior_art_director"
        ],
        color: "#6B7280"
    },
    node_1755398128591: {
        id: "node_1755398128591",
        title: "PMO (Project)",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "🏢",
        level: 4,
        x: 70.5,
        projectType: "hybrid",
        description: "Project Management Offic, 프로젝트 관리 방법론 구축, 팀 지원 및 프로세스 개선",
        skills: [
            "프로젝트 관리 표준화",
            "프로세스 개선",
            "교육/코칭",
            "성과 분석 및 보"
        ],
        parents: [
            "node_1755398053934",
            "design_team_lead",
            "creative_director_l3"
        ],
        children: [
            "cco",
            "bd_director",
            "head_of_design",
            "cxo",
            "vp_design"
        ],
        color: "#6B7280"
    }
};

  const renderBottomPanel = ({ viewMode, selectedPath, targetNode, nodes }) => {
    const getNodeInfo = (nodeId) => {
      const node = nodes[nodeId];
      return node ? `${node.title} (${node.year})` : '';
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-xl border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'explore' && selectedPath.length > 0 && (
            <div className="text-sm text-gray-300">
              <span className="text-gray-500">선택된 경로:</span> {selectedPath.map(getNodeInfo).join(' → ')}
            </div>
          )}
          {viewMode === 'target' && targetNode && (
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
        <div className="px-4 sm:px-6 pt-4 sm:pt-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    <span className="metallic-text">웹 디자이너 커리어패스</span>
  </h1>
  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
    비주얼 디자인부터 UI/UX, 그리고 크리에이티브 리더십까지
  </p>
</div>
        
        <CareerPathViewer 
          initialNodes={designerNodes}
          careerType="designer"
          renderBottomPanel={renderBottomPanel}
        />
      </div>
    </AnimatedBackground>
  );
};

export default DesignerPath;