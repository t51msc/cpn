// PublisherPath.js
// 개선된 버전 - 2025-08-17
import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import CareerPathViewer from '../common/CareerPathViewer';

const PublisherPath = () => {
  const publisherNodes = {
    web_publisher_junior: {
        id: "web_publisher_junior",
        title: "웹 퍼블리셔",
        year: "1-3년차",
        salary: "2,800-3,500만원",
        icon: "💻",
        level: 0,
        x: 50,
        projectType: "hybrid",
        description: "HTML/CSS/JavaScript 기본 역량 습득",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript 기초",
            "반응형 웹",
            "웹 표준"
        ],
        parents: [],
        children: [
            "web_publisher",
            "ui_developer",
            "markup_developer",
            "html_coder",
            "web_standard_specialist",
            "ai_assistant",
            "cx_coordinator",
            "web_maintenance"
        ],
        color: "#6B7280"
    },
    web_publisher: {
        id: "web_publisher",
        title: "웹 퍼블리셔",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "🖥️",
        level: 1,
        x: 9.5,
        projectType: "construction",
        description: "웹 표준 기반 퍼블리싱 전문",
        skills: [
            "시맨틱 마크업",
            "SASS/LESS",
            "웹 접근성",
            "크로스브라우징",
            "Git"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "senior_publisher",
            "web_accessibility_specialist"
        ],
        color: "#3B82F6"
    },
    ui_developer: {
        id: "ui_developer",
        title: "UI 개발자",
        year: "4-7년차",
        salary: "3,800-4,800만원",
        icon: "🎨",
        level: 1,
        x: 20.5,
        projectType: "construction",
        description: "UI 컴포넌트 개발 전문",
        skills: [
            "UI 컴포넌트",
            "JavaScript ES6+",
            "jQuery",
            "Bootstrap",
            "반응형 디자인"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "senior_markup_developer",
            "ui_engineer"
        ],
        color: "#3B82F6"
    },
    markup_developer: {
        id: "markup_developer",
        title: "마크업 개발자",
        year: "4-7년차",
        salary: "3,600-4,600만원",
        icon: "📝",
        level: 1,
        x: 30.5,
        projectType: "hybrid",
        description: "시맨틱 마크업 및 구조 설계",
        skills: [
            "시맨틱 HTML",
            "BEM 방법론",
            "모듈화",
            "Webpack",
            "npm"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "senior_markup_developer",
            "interaction_developer"
        ],
        color: "#9333EA"
    },
    html_coder: {
        id: "html_coder",
        title: "HTML 코더",
        year: "4-7년차",
        salary: "3,200-4,200만원",
        icon: "📄",
        level: 1,
        x: 40,
        projectType: "hybrid",
        description: "HTML/CSS 코딩 전문",
        skills: [
            "HTML5",
            "CSS3",
            "Flexbox/Grid",
            "템플릿 작업",
            "PSD to HTML"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "web_accessibility_specialist"
        ],
        color: "#9333EA"
    },
    web_standard_specialist: {
        id: "web_standard_specialist",
        title: "웹 표준 코더",
        year: "4-7년차",
        salary: "3,400-4,400만원",
        icon: "✅",
        level: 1,
        x: 50,
        projectType: "hybrid",
        description: "W3C 웹 표준 준수 코딩",
        skills: [
            "W3C 표준",
            "웹 접근성",
            "SEO",
            "성능 최적화",
            "검증 도구"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "web_accessibility_specialist",
            "qa_lead"
        ],
        color: "#9333EA"
    },
    ai_assistant: {
        id: "ai_assistant",
        title: "AI 활용 퍼블리셔",
        year: "4-7년차",
        salary: "3,800-4,800만원",
        icon: "🤖",
        level: 1,
        x: 59.5,
        projectType: "hybrid",
        description: "AI 도구 활용 및 자동화",
        skills: [
            "ChatGPT/Copilot/Cursor",
            "자동화 스크립트",
            "AI 프롬프팅",
            "데이터 처리",
            "워크플로우 최적화"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "ai_specialist",
            "technical_trainer"
        ],
        color: "#9333EA"
    },
    cx_coordinator: {
        id: "cx_coordinator",
        title: "UX 리서처",
        year: "4-7년차",
        salary: "3,500-4,500만원",
        icon: "😊",
        level: 1,
        x: 69,
        projectType: "hybrid",
        description: "고객 경험 지원 및 분석",
        skills: [
            "사용자 피드백",
            "데이터 수집",
            "리포트 작성",
            "A/B 테스트 지원",
            "VOC 관리"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "ux_consultant"
        ],
        color: "#9333EA"
    },
    web_maintenance: {
        id: "web_maintenance",
        title: "웹 유지보수 담당자",
        year: "4-7년차",
        salary: "3,600-4,600만원",
        level: 1,
        x: 85,
        projectType: "operation",
        description: "웹사이트 운영 및 유지보수",
        skills: [
            "이슈 트래킹",
            "버전 관리",
            "크로스브라우징 대응",
            "긴급 패치",
            "운영 문서화"
        ],
        parents: [
            "web_publisher_junior"
        ],
        children: [
            "publishing_lead"
        ],
        color: "#78849b",
        icon: "🔧"
    },
    senior_publisher: {
        id: "senior_publisher",
        title: "시니어 퍼블리셔",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "🏆",
        level: 2,
        x: 9.5,
        projectType: "construction",
        description: "복잡한 프로젝트 퍼블리싱 주도",
        skills: [
            "프로젝트 리딩",
            "아키텍처 설계",
            "코드 리뷰",
            "멘토링",
            "프로세스 개선"
        ],
        parents: [
            "web_publisher",
            "ui_developer"
        ],
        children: [
            "lead_publisher",
            "ui_architect",
            "publishing_team_leader"
        ],
        color: "#3B82F6"
    },
    senior_markup_developer: {
        id: "senior_markup_developer",
        title: "시니어 마크업 개발자",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "⭐",
        level: 2,
        x: 20.5,
        projectType: "construction",
        description: "마크업 아키텍처 설계 전문",
        skills: [
            "마크업 아키텍처",
            "디자인 시스템",
            "컴포넌트 설계",
            "자동화",
            "최적화"
        ],
        parents: [
            "ui_developer",
            "markup_developer"
        ],
        children: [
            "expert_markup_developer",
            "technical_pm"
        ],
        color: "#3B82F6"
    },
    ui_engineer: {
        id: "ui_engineer",
        title: "UI Engineer",
        year: "8-12년차",
        salary: "5,000-6,500만원",
        icon: "🔧",
        level: 2,
        x: 30.5,
        projectType: "hybrid",
        description: "UI 시스템 설계 및 최적화 (UI 엔지니어)",
        skills: [
            "UI 프레임워크",
            "Storybook",
            "디자인 토큰",
            "성능 최적화",
            "테스팅"
        ],
        parents: [
            "markup_developer"
        ],
        children: [
            "ui_architect",
            "frontend_developer",
            "ui_team_leader"
        ],
        color: "#9333EA"
    },
    web_accessibility_specialist: {
        id: "web_accessibility_specialist",
        title: "웹 접근성 전문가",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "♿",
        level: 2,
        x: 40,
        projectType: "hybrid",
        description: "웹 접근성 컨설팅 및 인증",
        skills: [
            "WCAG 2.1",
            "접근성 진단",
            "스크린리더",
            "법규 대응",
            "컨설팅"
        ],
        parents: [
            "html_coder",
            "web_standard_specialist"
        ],
        children: [
            "qa_lead",
            "technical_pm"
        ],
        color: "#9333EA"
    },
    interaction_developer: {
        id: "interaction_developer",
        title: "인터랙션 개발자",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "✨",
        level: 2,
        x: 50,
        projectType: "hybrid",
        description: "인터랙티브 UI 구현 전문",
        skills: [
            "CSS Animation",
            "GSAP",
            "Canvas",
            "WebGL 기초",
            "모션 디자인"
        ],
        parents: [
            "markup_developer"
        ],
        children: [
            "ui_architect",
            "frontend_developer"
        ],
        color: "#9333EA"
    },
    publishing_lead: {
        id: "publishing_lead",
        title: "퍼블리싱 리드",
        year: "8-12년차",
        salary: "5,000-6,000만원",
        icon: "👥",
        level: 2,
        x: 79.5,
        projectType: "operation",
        description: "퍼블리싱 팀 리딩 및 프로세스 관리",
        skills: [
            "팀 리딩",
            "프로세스 관리",
            "품질 관리",
            "교육",
            "커뮤니케이션"
        ],
        parents: [
            "web_standard_specialist",
            "web_maintenance"
        ],
        children: [
            "publishing_team_leader",
            "ui_team_leader"
        ],
        color: "#10B981"
    },
    ai_specialist: {
        id: "ai_specialist",
        title: "AI/ML 솔루션 엔지니어",
        year: "8-12년차",
        salary: "5,500-6,800만원",
        icon: "🧠",
        level: 2,
        x: 60,
        projectType: "hybrid",
        description: "AI/ML 기술 웹 서비스 적용",
        skills: [
            "Machine Learning",
            "AI 모델 활용",
            "API 연동",
            "데이터 처리",
            "성능 최적화"
        ],
        parents: [
            "ai_assistant"
        ],
        children: [
            "qa_lead",
            "publishing_team_leader"
        ],
        color: "#9333EA"
    },
    technical_trainer: {
        id: "technical_trainer",
        title: "기술 교육 담당자",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "📚",
        level: 2,
        x: 90.5,
        projectType: "operation",
        description: "기술 교육 및 강의",
        skills: [
            "교육 설계",
            "커리큘럼 개발",
            "강의 스킬",
            "교재 개발",
            "평가 설계"
        ],
        parents: [
            "ai_assistant"
        ],
        children: [
            "qa_lead",
            "publishing_team_leader",
            "ui_team_leader"
        ],
        color: "#10B981"
    },
    ux_consultant: {
        id: "ux_consultant",
        title: "UX 컨설턴트",
        year: "8-12년차",
        salary: "4,800-5,800만원",
        icon: "📈",
        level: 2,
        x: 70,
        projectType: "hybrid",
        description: "고객 경험 설계 및 사용자 리서치",
        skills: [
            "서비스 디자인",
            "사용자 리서치",
            "여정 매핑",
            "데이터 분석",
            "프로토타이핑"
        ],
        parents: [
            "cx_coordinator"
        ],
        children: [
            "solution_consultant"
        ],
        color: "#9333EA"
    },
    lead_publisher: {
        id: "lead_publisher",
        title: "수석 퍼블리셔",
        year: "13-18년차",
        salary: "5,500-7,000만원",
        icon: "🎯",
        level: 3,
        x: 9.5,
        projectType: "construction",
        description: "대규모 프로젝트 퍼블리싱 총괄",
        skills: [
            "프로젝트 총괄",
            "기술 표준 수립",
            "R&D",
            "전략 수립",
            "파트너십"
        ],
        parents: [
            "senior_publisher"
        ],
        children: [
            "principal_ui_developer",
            "frontend_manager"
        ],
        color: "#3B82F6"
    },
    expert_markup_developer: {
        id: "expert_markup_developer",
        title: "수석 마크업 개발자",
        year: "13-18년차",
        salary: "5,800-7,200만원",
        icon: "📋",
        level: 3,
        x: 20.5,
        projectType: "construction",
        description: "마크업 개발 책임 및 혁신",
        skills: [
            "기술 리더십",
            "혁신",
            "표준화",
            "거버넌스",
            "멘토링"
        ],
        parents: [
            "senior_markup_developer"
        ],
        children: [
            "ui_chief_architect",
            "engineering_manager"
        ],
        color: "#3B82F6"
    },
    ui_architect: {
        id: "ui_architect",
        title: "UI 아키텍트",
        year: "13-18년차",
        salary: "6,000-7,500만원",
        icon: "🏛️",
        level: 3,
        x: 30.5,
        projectType: "hybrid",
        description: "UI 아키텍처 설계 총괄",
        skills: [
            "시스템 설계",
            "디자인 시스템",
            "기술 표준",
            "혁신",
            "거버넌스"
        ],
        parents: [
            "senior_publisher",
            "ui_engineer",
            "interaction_developer"
        ],
        children: [
            "principal_ui_developer",
            "tech_lead"
        ],
        color: "#9333EA"
    },
    technical_pm: {
        id: "technical_pm",
        title: "Technical PM",
        year: "13-18년차",
        salary: "6,200-7,800만원",
        icon: "📊",
        level: 3,
        x: 79.5,
        projectType: "operation",
        description: "기술 프로젝트 관리 전문 (기술 PM)",
        skills: [
            "프로젝트 관리",
            "기술 이해",
            "리스크 관리",
            "스테이크홀더 관리",
            "애자일"
        ],
        parents: [
            "senior_markup_developer",
            "web_accessibility_specialist"
        ],
        children: [
            "engineering_manager",
            "head_of_ui"
        ],
        color: "#9333EA"
    },
    qa_lead: {
        id: "qa_lead",
        title: "QA Lead",
        year: "13-18년차",
        salary: "5,500-6,800만원",
        icon: "🔍",
        level: 3,
        x: 90.5,
        projectType: "operation",
        description: "품질 보증 프로세스 주도 (QA 리드)",
        skills: [
            "품질 관리",
            "테스트 자동화",
            "프로세스 개선",
            "표준 수립",
            "팀 관리"
        ],
        parents: [
            "web_accessibility_specialist",
            "ai_specialist",
            "technical_trainer"
        ],
        children: [
            "tech_lead",
            "head_of_ui"
        ],
        color: "#9333EA"
    },
    frontend_developer: {
        id: "frontend_developer",
        title: "프론트엔드 개발자",
        year: "13-18년차",
        salary: "6,500-8,000만원",
        icon: "⚛️",
        level: 3,
        x: 40,
        projectType: "hybrid",
        description: "퍼블리셔에서 프론트엔드 전환 (예외적)",
        skills: [
            "React/Vue",
            "TypeScript",
            "상태관리",
            "API 연동",
            "테스팅"
        ],
        parents: [
            "ui_engineer",
            "interaction_developer"
        ],
        children: [
            "frontend_manager",
            "tech_lead"
        ],
        color: "#9333EA"
    },
    publishing_team_leader: {
        id: "publishing_team_leader",
        title: "퍼블리싱 팀장",
        year: "13-18년차",
        salary: "6,000-7,500만원",
        icon: "👔",
        level: 3,
        x: 50,
        projectType: "hybrid",
        description: "퍼블리싱 팀 운영 및 관리",
        skills: [
            "팀 운영",
            "인사 관리",
            "예산 관리",
            "전략 수립",
            "성과 관리"
        ],
        parents: [
            "publishing_lead",
            "technical_trainer",
            "ai_specialist",
            "senior_publisher"
        ],
        children: [
            "head_of_ui",
            "engineering_manager"
        ],
        color: "#10B981"
    },
    ui_team_leader: {
        id: "ui_team_leader",
        title: "UI개발 팀장",
        year: "13-18년차",
        salary: "6,200-7,800만원",
        icon: "🦾",
        level: 3,
        x: 59.5,
        projectType: "hybrid",
        description: "UI 개발팀 운영 총괄",
        skills: [
            "조직 관리",
            "비즈니스 연계",
            "혁신 주도",
            "인재 육성",
            "프로세스"
        ],
        parents: [
            "publishing_lead",
            "technical_trainer",
            "ui_engineer"
        ],
        children: [
            "head_of_ui",
            "engineering_manager"
        ],
        color: "#10B981"
    },
    solution_consultant: {
        id: "solution_consultant",
        title: "솔루션 컨설턴트",
        year: "13-18년차",
        salary: "6,800-8,200만원",
        icon: "💼",
        level: 3,
        x: 68.5,
        projectType: "hybrid",
        description: "기술 솔루션 컨설팅 및 프리세일즈",
        skills: [
            "기술 제안서",
            "프레젠테이션",
            "요구분석",
            "POC",
            "견적 작성"
        ],
        parents: [
            "ux_consultant"
        ],
        children: [
            "business_developer"
        ],
        color: "#9333EA"
    },
    principal_ui_developer: {
        id: "principal_ui_developer",
        title: "수석 UI 개발자",
        year: "20년차+",
        salary: "7,000-9,000만원",
        icon: "🌟",
        level: 4,
        x: 9.5,
        projectType: "construction",
        description: "최고 수준 UI 개발 전문가",
        skills: [
            "기술 비전",
            "아키텍처 혁신",
            "업계 리더십",
            "특허/논문",
            "컨퍼런스 발표"
        ],
        parents: [
            "lead_publisher",
            "ui_architect"
        ],
        children: [
            "technical_advisor",
            "cto"
        ],
        color: "#3B82F6"
    },
    ui_chief_architect: {
        id: "ui_chief_architect",
        title: "UI 수석 아키텍트",
        year: "20년차+",
        salary: "7,500-9,500만원",
        icon: "🗿",
        level: 4,
        x: 20.5,
        projectType: "construction",
        description: "엔터프라이즈 UI 아키텍처 설계",
        skills: [
            "엔터프라이즈 설계",
            "글로벌 표준",
            "기술 거버넌스",
            "M&A 지원",
            "혁신 전략"
        ],
        parents: [
            "expert_markup_developer"
        ],
        children: [
            "dev_division_head",
            "tech_director"
        ],
        color: "#3B82F6"
    },
    frontend_manager: {
        id: "frontend_manager",
        title: "Frontend Manager",
        year: "20년차+",
        salary: "7,800-9,800만원",
        icon: "🎖️",
        level: 4,
        x: 43.5,
        projectType: "hybrid",
        description: "프론트엔드 부문 관리자",
        skills: [
            "부문 경영",
            "전략 기획",
            "조직 설계",
            "성과 관리",
            "혁신 문화"
        ],
        parents: [
            "lead_publisher",
            "frontend_developer"
        ],
        children: [
            "dev_division_head",
            "cto"
        ],
        color: "#9333EA"
    },
    engineering_manager: {
        id: "engineering_manager",
        title: "Engineering Manager",
        year: "20년차+",
        salary: "8,000-1억원",
        icon: "⚙️",
        level: 4,
        x: 56,
        projectType: "hybrid",
        description: "엔지니어링 조직 관리",
        skills: [
            "엔지니어링 문화",
            "프로세스 혁신",
            "인재 관리",
            "기술 전략",
            "파트너십"
        ],
        parents: [
            "expert_markup_developer",
            "technical_pm",
            "publishing_team_leader",
            "ui_team_leader"
        ],
        children: [
            "dev_division_head",
            "tech_director"
        ],
        color: "#9333EA"
    },
    tech_lead: {
        id: "tech_lead",
        title: "Tech Lead",
        year: "20년차+",
        salary: "8,200-1억원",
        icon: "🚀",
        level: 4,
        x: 66.5,
        projectType: "hybrid",
        description: "기술 리더십 및 혁신 주도",
        skills: [
            "기술 리더십",
            "혁신 주도",
            "R&D",
            "기술 멘토링",
            "전략적 의사결정"
        ],
        parents: [
            "ui_architect",
            "qa_lead",
            "frontend_developer"
        ],
        children: [
            "tech_director",
            "cto"
        ],
        color: "#9333EA"
    },
    head_of_ui: {
        id: "head_of_ui",
        title: "Head of UI Development",
        year: "20년차+",
        salary: "8,500-1.1억원",
        icon: "👑",
        level: 4,
        x: 85,
        projectType: "operation",
        description: "UI 개발 부문 총괄 (개발부문장)",
        skills: [
            "부문 총괄",
            "비즈니스 전략",
            "조직 운영",
            "대외 협력",
            "이사회 보고"
        ],
        parents: [
            "technical_pm",
            "qa_lead",
            "publishing_team_leader",
            "ui_team_leader"
        ],
        children: [
            "dev_division_head",
            "tech_consultant"
        ],
        color: "#10B981"
    },
    business_developer: {
        id: "business_developer",
        title: "사업개발 매니저 (BD)",
        year: "20년차+",
        salary: "8,000-1억원",
        icon: "🔄",
        level: 4,
        x: 32,
        projectType: "hybrid",
        description: "기술과 비즈니스 융합 전문가",
        skills: [
            "비즈니스 전략",
            "디지털 전환",
            "프리세일즈",
            "CX 설계",
            "컨설팅"
        ],
        parents: [
            "solution_consultant"
        ],
        children: [
            "dev_division_head",
            "tech_consultant",
            "technical_advisor"
        ],
        color: "#9333EA"
    },
    technical_advisor: {
        id: "technical_advisor",
        title: "기술 고문",
        year: "25년차+",
        salary: "9,000만-1.2억원",
        icon: "🧙",
        level: 5,
        x: 15,
        projectType: "construction",
        description: "UI 기술 전략 자문",
        skills: [
            "기술 자문",
            "전략 컨설팅",
            "업계 영향력",
            "이사회 자문",
            "벤처 투자"
        ],
        parents: [
            "principal_ui_developer",
            "business_developer"
        ],
        children: [
            "ceo"
        ],
        color: "#3B82F6"
    },
    cto: {
        id: "cto",
        title: "CTO",
        year: "25년차+",
        salary: "1억-1.5억원",
        icon: "💻",
        level: 5,
        x: 39,
        projectType: "hybrid",
        description: "최고 기술 책임자 (Chief Technology Officer)",
        skills: [
            "기술 비전",
            "혁신 전략",
            "조직 구축",
            "투자자 관계",
            "M&A"
        ],
        parents: [
            "principal_ui_developer",
            "frontend_manager",
            "tech_lead"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    dev_division_head: {
        id: "dev_division_head",
        title: "개발 본부장",
        year: "25년차+",
        salary: "1.1억-1.6억원",
        icon: "🏆",
        level: 5,
        x: 50,
        projectType: "hybrid",
        description: "개발 부문 본부장",
        skills: [
            "개발 경영",
            "조직 확장",
            "글로벌 운영",
            "전략적 파트너십",
            "문화 구축"
        ],
        parents: [
            "ui_chief_architect",
            "frontend_manager",
            "engineering_manager",
            "head_of_ui",
            "business_developer"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    tech_director: {
        id: "tech_director",
        title: "기술이사",
        year: "25년차+",
        salary: "1억-1.4억원",
        icon: "⚡",
        level: 5,
        x: 61,
        projectType: "hybrid",
        description: "기술 이사",
        skills: [
            "기술 경영",
            "R&D 총괄",
            "혁신 프로그램",
            "대외 협력",
            "이사회"
        ],
        parents: [
            "ui_chief_architect",
            "engineering_manager",
            "tech_lead"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    tech_consultant: {
        id: "tech_consultant",
        title: "기술 컨설턴트",
        year: "25년차+",
        salary: "8,000만-1.2억원",
        icon: "📚",
        level: 5,
        x: 85,
        projectType: "operation",
        description: "엔지니어링 컨설팅 전문가",
        skills: [
            "컨설팅",
            "프로세스 진단",
            "조직 진단",
            "교육/강연",
            "저술 활동"
        ],
        parents: [
            "head_of_ui",
            "business_developer"
        ],
        children: [
            "ceo"
        ],
        color: "#10B981"
    },
    ceo: {
        id: "ceo",
        title: "CEO",
        year: "30년차+",
        salary: "1.5억-3억원+",
        icon: "👑",
        level: 6,
        x: 50,
        projectType: "hybrid",
        description: "최고 경영자 (Chief Executive Officer)",
        skills: [
            "경영 전반",
            "비전 수립",
            "조직 문화",
            "대외 관계",
            "이사회 관리"
        ],
        parents: [
            "technical_advisor",
            "cto",
            "dev_division_head",
            "tech_director",
            "tech_consultant"
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
        <div className="px-6 pt-6">
          <h1 className="text-4xl font-bold mb-2">
            <span className="metallic-text">웹 퍼블리셔 커리어패스</span>
          </h1>
          <p className="text-gray-400 mb-6">
            HTML/CSS부터 프론트엔드 개발, 그리고 기술 리더십까지
          </p>
        </div>
        
        <CareerPathViewer 
          initialNodes={publisherNodes}
          careerType="publisher"
          renderBottomPanel={renderBottomPanel}
        />
      </div>
    </AnimatedBackground>
  );
};

export default PublisherPath;