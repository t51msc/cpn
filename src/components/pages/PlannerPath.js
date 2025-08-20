// PlannerPath.js
// 자동 생성된 파일 - 2025-08-18T18:16:37.350Z
import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import CareerPathViewer from '../common/CareerPathViewer';

const PlannerPath = () => {
  const plannerNodes = {
    web_planner_junior: {
        id: "web_planner_junior",
        title: "웹 기획자",
        year: "1-3년차",
        salary: "2,800-3,500만원",
        icon: "📋",
        level: 0,
        x: 50,
        projectType: "hybrid",
        description: "웹 서비스 기획 기초 역량 구축",
        skills: [
            "화면 설계",
            "기획서 작성",
            "와이어프레임",
            "기본 문서화"
        ],
        parents: [],
        children: [
            "service_planner",
            "ux_planner",
            "content_planner",
            "project_assistant",
            "mobile_planner"
        ],
        color: "#9B59B6"
    },
    service_planner: {
        id: "service_planner",
        title: "서비스 기획자",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "🌐",
        level: 1,
        x: 15,
        projectType: "construction",
        description: "서비스 전체 기획 및 설계",
        skills: [
            "서비스 설계",
            "IA 설계",
            "User Flow",
            "프로토타이핑"
        ],
        parents: [
            "web_planner_junior"
        ],
        children: [
            "senior_planner",
            "business_analyst",
            "cx_specialist"
        ],
        color: "#4062e7"
    },
    ux_planner: {
        id: "ux_planner",
        title: "UX 기획자",
        year: "4-7년차",
        salary: "3,600-4,600만원",
        icon: "🎨",
        level: 1,
        x: 39,
        projectType: "hybrid",
        description: "사용자 경험 중심 기획",
        skills: [
            "UX 리서치",
            "사용성 테스트",
            "퍼소나 정의",
            "User Journey"
        ],
        parents: [
            "web_planner_junior"
        ],
        children: [
            "senior_planner",
            "cx_specialist",
            "business_analyst",
            "junior_pm",
            "service_coordinator",
            "project_lead"
        ],
        color: "#9b59b6"
    },
    content_planner: {
        id: "content_planner",
        title: "콘텐츠 기획자",
        year: "4-7년차",
        salary: "3,300-4,200만원",
        icon: "📝",
        level: 1,
        x: 50,
        projectType: "hybrid",
        description: "콘텐츠 전략 및 기획",
        skills: [
            "콘텐츠 전략",
            "카피라이팅",
            "SEO 최적화",
            "콘텐츠 운영"
        ],
        parents: [
            "web_planner_junior"
        ],
        children: [
            "marketing_specialist",
            "data_analyst",
            "cx_specialist",
            "business_analyst",
            "senior_planner",
            "junior_pm",
            "service_coordinator",
            "project_lead"
        ],
        color: "#9B59B6"
    },
    project_assistant: {
        id: "project_assistant",
        title: "PA",
        year: "4-7년차",
        salary: "3,200-4,000만원",
        icon: "📊",
        level: 1,
        x: 85,
        projectType: "operation",
        description: "Project Assistant - 프로젝트 지원",
        skills: [
            "일정 관리",
            "문서 작성",
            "회의 조율",
            "리소스 지원"
        ],
        parents: [
            "web_planner_junior"
        ],
        children: [
            "project_lead",
            "cx_specialist",
            "business_analyst",
            "senior_planner"
        ],
        color: "#33db74"
    },
    senior_planner: {
        id: "senior_planner",
        title: "시니어 기획자",
        year: "8-12년차",
        salary: "5,000-6,200만원",
        icon: "⭐",
        level: 2,
        x: 20.5,
        projectType: "construction",
        description: "고도화된 서비스 기획",
        skills: [
            "전략적 기획",
            "데이터 분석",
            "A/B 테스트",
            "성과 측정"
        ],
        parents: [
            "service_planner",
            "ux_planner",
            "project_assistant",
            "mobile_planner",
            "content_planner"
        ],
        children: [
            "lead_planner",
            "product_manager",
            "planning_team_lead",
            "strategy_manager",
            "service_design_manager",
            "growth_manager",
            "project_manager"
        ],
        color: "#4062e8"
    },
    junior_pm: {
        id: "junior_pm",
        title: "Junior PM (제품)",
        year: "8-12년차",
        salary: "5,200-6,500만원",
        icon: "📦",
        level: 2,
        x: 10.5,
        projectType: "construction",
        description: "Junior Product Manager",
        skills: [
            "백로그 관리",
            "스프린트 계획",
            "이해관계자 소통",
            "기본 데이터 분석"
        ],
        parents: [
            "service_planner",
            "mobile_planner",
            "content_planner",
            "ux_planner"
        ],
        children: [
            "product_manager"
        ],
        color: "#4062e8"
    },
    business_analyst: {
        id: "business_analyst",
        title: "Business Analyst",
        year: "8-12년차",
        salary: "5,100-6,400만원",
        icon: "💼",
        level: 2,
        x: 45,
        projectType: "hybrid",
        description: "비즈니스 요구사항 분석",
        skills: [
            "요구사항 분석",
            "프로세스 개선",
            "비즈니스 케이스",
            "데이터 모델링"
        ],
        parents: [
            "service_planner",
            "ux_planner",
            "content_planner",
            "mobile_planner",
            "project_assistant"
        ],
        children: [
            "strategy_manager",
            "bd_manager",
            "service_design_manager",
            "growth_manager"
        ],
        color: "#9B59B6"
    },
    cx_specialist: {
        id: "cx_specialist",
        title: "CX Specialist",
        year: "8-12년차",
        salary: "5,200-6,500만원",
        icon: "✨",
        level: 2,
        x: 67,
        projectType: "hybrid",
        description: "Customer Experience Specialist",
        skills: [
            "CX 전략",
            "VOC 분석",
            "Journey Mapping",
            "서비스 설계"
        ],
        parents: [
            "ux_planner",
            "service_planner",
            "content_planner",
            "mobile_planner",
            "project_assistant"
        ],
        children: [
            "service_design_manager",
            "strategy_manager",
            "growth_manager",
            "bd_manager"
        ],
        color: "#9B59B6"
    },
    data_analyst: {
        id: "data_analyst",
        title: "Data Analyst",
        year: "8-12년차",
        salary: "5,300-6,600만원",
        icon: "📈",
        level: 2,
        x: 33.5,
        projectType: "hybrid",
        description: "데이터 기반 인사이트 도출",
        skills: [
            "SQL/Python",
            "데이터 분석",
            "대시보드 구축",
            "인사이트 도출"
        ],
        parents: [
            "content_planner"
        ],
        children: [
            "growth_manager",
            "bd_manager"
        ],
        color: "#9B59B6"
    },
    marketing_specialist: {
        id: "marketing_specialist",
        title: "마케팅 기획자",
        year: "8-12년차",
        salary: "5,200-6,500만원",
        icon: "📣",
        level: 2,
        x: 55,
        projectType: "hybrid",
        description: "디지털 마케팅 전략",
        skills: [
            "마케팅 전략",
            "캠페인 기획",
            "퍼포먼스 마케팅",
            "ROI 분석"
        ],
        parents: [
            "content_planner",
            "mobile_planner"
        ],
        children: [
            "growth_manager",
            "planning_team_lead",
            "lead_planner",
            "strategy_manager",
            "project_manager"
        ],
        color: "#9B59B6"
    },
    project_lead: {
        id: "project_lead",
        title: "PL",
        year: "8-12년차",
        salary: "5,500-6,800만원",
        icon: "👨‍💼",
        level: 2,
        x: 91.5,
        projectType: "operation",
        description: "Project Lead",
        skills: [
            "프로젝트 리딩",
            "일정 관리",
            "리스크 관리",
            "팀 조율"
        ],
        parents: [
            "project_assistant",
            "mobile_planner",
            "content_planner",
            "ux_planner"
        ],
        children: [
            "project_manager",
            "planning_team_lead",
            "strategy_manager",
            "lead_planner",
            "growth_manager"
        ],
        color: "#33db74"
    },
    mobile_planner: {
        id: "mobile_planner",
        title: "모바일 기획자",
        year: "4-7년차",
        salary: "3,300-4,200만원",
        icon: "📱",
        level: 1,
        x: 61.5,
        projectType: "hybrid",
        description: "모바일 서비스 전문 기획",
        skills: [
            "모바일 UX",
            "앱 기획",
            "플랫폼 이해",
            "모바일 최적화"
        ],
        parents: [
            "web_planner_junior"
        ],
        children: [
            "service_coordinator",
            "marketing_specialist",
            "cx_specialist",
            "business_analyst",
            "senior_planner",
            "project_lead",
            "junior_pm"
        ],
        color: "#9B59B6"
    },
    service_coordinator: {
        id: "service_coordinator",
        title: "서비스 운영 매니저",
        year: "8-12년차",
        salary: "4,800-6,000만원",
        icon: "🔧",
        level: 2,
        x: 79.5,
        projectType: "operation",
        description: "서비스 운영 및 개선",
        skills: [
            "서비스 운영",
            "CS 관리",
            "운영 프로세스",
            "품질 관리"
        ],
        parents: [
            "project_assistant",
            "mobile_planner",
            "content_planner",
            "ux_planner"
        ],
        children: [
            "planning_team_lead",
            "lead_planner",
            "service_design_manager",
            "project_manager"
        ],
        color: "#33db74"
    },
    lead_planner: {
        id: "lead_planner",
        title: "리드 기획자",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "🚀",
        level: 3,
        x: 20.5,
        projectType: "construction",
        description: "기획 팀 리드 및 전략 수립",
        skills: [
            "전략 기획",
            "비즈니스 전략",
            "혁신 주도",
            "멘토링"
        ],
        parents: [
            "senior_planner",
            "project_lead",
            "service_coordinator",
            "marketing_specialist"
        ],
        children: [
            "planning_director",
            "pmo_director",
            "strategy_director",
            "head_of_design",
            "head_of_planning"
        ],
        color: "#4062e8"
    },
    product_manager: {
        id: "product_manager",
        title: "Product Manager",
        year: "13-18년차",
        salary: "6,800-8,800만원",
        icon: "💡",
        level: 3,
        x: 10.5,
        projectType: "construction",
        description: "제품 전략 및 로드맵 관리",
        skills: [
            "제품 전략",
            "로드맵 수립",
            "OKR 설정",
            "크로스펑셔널 리딩"
        ],
        parents: [
            "senior_planner",
            "junior_pm"
        ],
        children: [
            "product_director"
        ],
        color: "#4062e8"
    },
    service_design_manager: {
        id: "service_design_manager",
        title: "CX Manager",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "🌟",
        level: 3,
        x: 67,
        projectType: "hybrid",
        description: "Customer Experience Manager",
        skills: [
            "CX 전략 실행",
            "옴니채널 관리",
            "고객 데이터 분석",
            "서비스 개선"
        ],
        parents: [
            "cx_specialist",
            "business_analyst",
            "service_coordinator",
            "senior_planner"
        ],
        children: [
            "head_of_design",
            "cx_director",
            "bd_director",
            "growth_director"
        ],
        color: "#9B59B6"
    },
    bd_manager: {
        id: "bd_manager",
        title: "BD Manager",
        year: "13-18년차",
        salary: "7,200-9,200만원",
        icon: "💫",
        level: 3,
        x: 45,
        projectType: "hybrid",
        description: "Business Development Manager",
        skills: [
            "사업 개발",
            "파트너십 구축",
            "신규 시장 개척",
            "수익 모델 개발"
        ],
        parents: [
            "business_analyst",
            "cx_specialist",
            "data_analyst"
        ],
        children: [
            "bd_director"
        ],
        color: "#9B59B6"
    },
    growth_manager: {
        id: "growth_manager",
        title: "Growth Manager",
        year: "13-18년차",
        salary: "6,800-8,800만원",
        icon: "📊",
        level: 3,
        x: 55,
        projectType: "hybrid",
        description: "성장 전략 수립 및 실행",
        skills: [
            "그로스 해킹",
            "퍼널 최적화",
            "실험 설계",
            "데이터 드리븐"
        ],
        parents: [
            "data_analyst",
            "marketing_specialist",
            "cx_specialist",
            "business_analyst",
            "senior_planner",
            "project_lead"
        ],
        children: [
            "growth_director",
            "cx_director",
            "head_of_design",
            "head_of_planning",
            "planning_director"
        ],
        color: "#9B59B6"
    },
    strategy_manager: {
        id: "strategy_manager",
        title: "전략기획 매니저",
        year: "13-18년차",
        salary: "7,500-9,500만원",
        icon: "🎯",
        level: 3,
        x: 32,
        projectType: "hybrid",
        description: "전략 기획 및 실행",
        skills: [
            "전략 수립",
            "시장 조사",
            "경쟁 분석",
            "비즈니스 모델"
        ],
        parents: [
            "business_analyst",
            "cx_specialist",
            "senior_planner",
            "project_lead",
            "marketing_specialist"
        ],
        children: [
            "strategy_director",
            "cx_director",
            "pmo_director",
            "head_of_design",
            "head_of_planning"
        ],
        color: "#9B59B6"
    },
    planning_team_lead: {
        id: "planning_team_lead",
        title: "기획팀장",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "👥",
        level: 3,
        x: 79.5,
        projectType: "operation",
        description: "기획팀 관리 및 운영",
        skills: [
            "팀 관리",
            "성과 관리",
            "프로세스 개선",
            "인재 육성"
        ],
        parents: [
            "project_lead",
            "service_coordinator",
            "marketing_specialist",
            "senior_planner"
        ],
        children: [
            "head_of_planning",
            "head_of_design"
        ],
        color: "#33db74"
    },
    project_manager: {
        id: "project_manager",
        title: "PM",
        year: "13-18년차",
        salary: "7,200-9,200만원",
        icon: "🏆",
        level: 3,
        x: 91.5,
        projectType: "operation",
        description: "Project Manager",
        skills: [
            "프로젝트 관리",
            "리스크 관리",
            "예산 관리",
            "이해관계자 관리"
        ],
        parents: [
            "project_lead",
            "service_coordinator",
            "senior_planner",
            "marketing_specialist"
        ],
        children: [
            "pmo_director",
            "head_of_design"
        ],
        color: "#33db74"
    },
    planning_director: {
        id: "planning_director",
        title: "Planning Director",
        year: "20년차+",
        salary: "9,000만-1.2억원",
        icon: "⚡",
        level: 4,
        x: 20.5,
        projectType: "construction",
        description: "기획 디렉터",
        skills: [
            "도메인 전문성",
            "기술 리더십",
            "혁신 주도",
            "멘토링"
        ],
        parents: [
            "lead_planner",
            "growth_manager"
        ],
        children: [
            "cso",
            "coo"
        ],
        color: "#4062e8"
    },
    product_director: {
        id: "product_director",
        title: "Product Director",
        year: "20년차+",
        salary: "9,500만-1.3억원",
        icon: "🌐",
        level: 4,
        x: 10.5,
        projectType: "construction",
        description: "제품 전략 디렉터",
        skills: [
            "제품 거버넌스",
            "포트폴리오 전략",
            "혁신 관리",
            "파트너십"
        ],
        parents: [
            "product_manager"
        ],
        children: [
            "cpo"
        ],
        color: "#4062e8"
    },
    head_of_design: {
        id: "head_of_design",
        title: "Innovation Director",
        year: "20년차+",
        salary: "9,500만-1.3억원",
        icon: "💡",
        level: 4,
        x: 32,
        projectType: "hybrid",
        description: "혁신 전략 디렉터",
        skills: [
            "혁신 전략",
            "디지털 전환",
            "R&D 관리",
            "벤처 협업"
        ],
        parents: [
            "service_design_manager",
            "lead_planner",
            "planning_team_lead",
            "project_manager",
            "strategy_manager",
            "growth_manager"
        ],
        children: [
            "cso"
        ],
        color: "#9B59B6"
    },
    strategy_director: {
        id: "strategy_director",
        title: "Strategy Director",
        year: "20년차+",
        salary: "1억-1.4억원",
        icon: "🔮",
        level: 4,
        x: 42,
        projectType: "hybrid",
        description: "전략 디렉터",
        skills: [
            "기업 전략",
            "M&A",
            "신사업 개발",
            "투자 유치"
        ],
        parents: [
            "strategy_manager",
            "lead_planner"
        ],
        children: [
            "cso",
            "coo"
        ],
        color: "#9B59B6"
    },
    bd_director: {
        id: "bd_director",
        title: "BD Director",
        year: "20년차+",
        salary: "1억-1.4억원",
        icon: "🚁",
        level: 4,
        x: 51,
        projectType: "hybrid",
        description: "Business Development Director",
        skills: [
            "M&A",
            "전략적 제휴",
            "글로벌 사업",
            "투자 유치"
        ],
        parents: [
            "bd_manager",
            "service_design_manager"
        ],
        children: [
            "cbo"
        ],
        color: "#9B59B6"
    },
    head_of_planning: {
        id: "head_of_planning",
        title: "Head of Planning",
        year: "20년차+",
        salary: "1억-1.4억원",
        icon: "🎖️",
        level: 4,
        x: 79.5,
        projectType: "operation",
        description: "기획 부문 최고 책임자",
        skills: [
            "경영 전략",
            "조직 리더십",
            "이사회 소통",
            "비전 수립"
        ],
        parents: [
            "planning_team_lead",
            "lead_planner",
            "strategy_manager",
            "growth_manager"
        ],
        children: [
            "vp_planning",
            "cso"
        ],
        color: "#33db74"
    },
    pmo_director: {
        id: "pmo_director",
        title: "PMO Director",
        year: "20년차+",
        salary: "9,000만-1.2억원",
        icon: "📌",
        level: 4,
        x: 91.5,
        projectType: "operation",
        description: "Project Management Office Director",
        skills: [
            "전사 PMO",
            "거버넌스",
            "표준화",
            "혁신 관리"
        ],
        parents: [
            "project_manager",
            "lead_planner",
            "strategy_manager"
        ],
        children: [
            "coo",
            "vp_planning"
        ],
        color: "#33db74"
    },
    growth_director: {
        id: "growth_director",
        title: "Growth Director",
        year: "20년차+",
        salary: "9,500만-1.3억원",
        icon: "📊",
        level: 4,
        x: 60,
        projectType: "hybrid",
        description: "성장 전략 디렉터",
        skills: [
            "성장 전략",
            "데이터 드리븐",
            "실험 문화",
            "스케일링"
        ],
        parents: [
            "growth_manager",
            "service_design_manager"
        ],
        children: [
            "cmo"
        ],
        color: "#9B59B6"
    },
    cx_director: {
        id: "cx_director",
        title: "CX Director",
        year: "20년차+",
        salary: "9,200만-1.3억원",
        icon: "✨",
        level: 4,
        x: 69,
        projectType: "hybrid",
        description: "Customer Experience Director",
        skills: [
            "CX 전략",
            "고객 데이터 분석",
            "조직 리더십",
            "디지털 전환"
        ],
        parents: [
            "strategy_manager",
            "growth_manager",
            "service_design_manager"
        ],
        children: [
            "coo",
            "cmo",
            "cso"
        ],
        color: "#9B59B6"
    },
    cpo: {
        id: "cpo",
        title: "CPO",
        year: "25년차+",
        salary: "1.3억-1.8억원",
        icon: "💎",
        level: 5,
        x: 15,
        projectType: "construction",
        description: "Chief Product Officer💎",
        skills: [
            "제품 비전",
            "경영 전략",
            "이사회 참여",
            "산업 리더십"
        ],
        parents: [
            "product_director"
        ],
        children: [
            "ceo"
        ],
        color: "#4162e8"
    },
    cso: {
        id: "cso",
        title: "CSO",
        year: "25년차+",
        salary: "1.3억-1.8억원",
        icon: "🎯",
        level: 5,
        x: 38,
        projectType: "hybrid",
        description: "Chief Strategy Officer",
        skills: [
            "기업 전략",
            "전략적 파트너십",
            "M&A",
            "혁신 전략"
        ],
        parents: [
            "strategy_director",
            "planning_director",
            "head_of_design",
            "head_of_planning",
            "cx_director"
        ],
        children: [
            "ceo"
        ],
        color: "#9B59B6"
    },
    cbo: {
        id: "cbo",
        title: "CBO",
        year: "25년차+",
        salary: "1.3억-1.8억원",
        icon: "🌍",
        level: 5,
        x: 50,
        projectType: "hybrid",
        description: "Chief Business Officer",
        skills: [
            "사업 전략",
            "사업 개발",
            "파트너십",
            "글로벌 확장"
        ],
        parents: [
            "bd_director"
        ],
        children: [
            "ceo"
        ],
        color: "#9B59B6"
    },
    coo: {
        id: "coo",
        title: "COO",
        year: "25년차+",
        salary: "1.4억-2억원",
        icon: "⚙️",
        level: 5,
        x: 79.5,
        projectType: "operation",
        description: "Chief Operating Officer",
        skills: [
            "운영 전략",
            "프로세스 혁신",
            "조직 효율화",
            "성과 관리"
        ],
        parents: [
            "pmo_director",
            "cx_director",
            "planning_director",
            "strategy_director"
        ],
        children: [
            "ceo"
        ],
        color: "#33db74"
    },
    vp_planning: {
        id: "vp_planning",
        title: "VP of Planning",
        year: "25년차+",
        salary: "1.2억-1.6억원",
        icon: "🏅",
        level: 5,
        x: 91.5,
        projectType: "operation",
        description: "Vice President of Planning",
        skills: [
            "경영 전략",
            "조직 리더십",
            "글로벌 운영",
            "투자자 관계"
        ],
        parents: [
            "head_of_planning",
            "pmo_director"
        ],
        children: [
            "ceo"
        ],
        color: "#33db74"
    },
    cmo: {
        id: "cmo",
        title: "CMO",
        year: "25년차+",
        salary: "1.3억-1.8억원",
        icon: "📢",
        level: 5,
        x: 61.5,
        projectType: "hybrid",
        description: "Chief Marketing Officer",
        skills: [
            "마케팅 전략",
            "브랜드 전략",
            "고객 획득",
            "데이터 마케팅"
        ],
        parents: [
            "growth_director",
            "cx_director"
        ],
        children: [
            "ceo"
        ],
        color: "#9B59B6"
    },
    ceo: {
        id: "ceo",
        title: "CEO",
        year: "25년차+",
        salary: "1.5억-2.5억원+",
        icon: "👑",
        level: 6,
        x: 50,
        projectType: "hybrid",
        description: "Chief Executive Officer",
        skills: [
            "경영 전반",
            "비전 수립",
            "조직 문화",
            "대외 관계"
        ],
        parents: [
            "cpo",
            "cso",
            "cbo",
            "coo",
            "vp_planning",
            "cmo"
        ],
        children: [],
        color: "#FFD700"
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
        <div className="hidden sm:block px-4 sm:px-6 pt-4 sm:pt-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
    <span className="metallic-text">웹 기획자 커리어패스</span>
  </h1>
  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
    서비스 기획부터 프로덕트 매니지먼트, 그리고 비즈니스 리더십까지
  </p>
</div>
        
        <CareerPathViewer 
          initialNodes={plannerNodes}
          careerType="planner"
          renderBottomPanel={renderBottomPanel}
        />
      </div>
    </AnimatedBackground>
  );
};

export default PlannerPath;