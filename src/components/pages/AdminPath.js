// AdminPath.js
// 자동 생성된 파일 - 2025-08-18T18:17:31.421Z
import React from 'react';
import AnimatedBackground from '../common/AnimatedBackground';
import CareerPathViewer from '../common/CareerPathViewer';

const AdminPath = () => {
  const adminNodes = {
    admin_junior: {
        id: "admin_junior",
        title: "경영지원 사원",
        year: "1-3년차",
        salary: "2,600-3,200만원",
        icon: "📋",
        level: 0,
        x: 50,
        projectType: "hybrid",
        description: "경영지원 기초 업무 수행",
        skills: [
            "문서 작성",
            "엑셀/파워포인트",
            "기본 회계",
            "행정 업무",
            "커뮤니케이션"
        ],
        parents: [],
        children: [
            "hr_associate",
            "recruiter",
            "finance_staff",
            "accounting_staff",
            "general_affairs_staff",
            "node_1755411895730",
            "node_1755411155908"
        ],
        color: "#6B7280"
    },
    hr_associate: {
        id: "hr_associate",
        title: "인사 담당자",
        year: "4-7년차",
        salary: "3,200-4,000만원",
        icon: "👥",
        level: 1,
        x: 9.5,
        projectType: "construction",
        description: "HR 시스템 구축 및 기초 업무",
        skills: [
            "HR 시스템 구축",
            "채용 프로세스 설계",
            "인사 정책 수립",
            "급여 시스템",
            "근태 관리"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "hr_specialist",
            "talent_acquisition_specialist",
            "cb_specialist"
        ],
        color: "#3B82F6"
    },
    recruiter: {
        id: "recruiter",
        title: "채용 담당자",
        year: "4-7년차",
        salary: "3,300-4,100만원",
        icon: "🎯",
        level: 1,
        x: 20.5,
        projectType: "construction",
        description: "채용 시스템 구축 및 전문 업무",
        skills: [
            "채용 채널 개발",
            "면접 프로세스 구축",
            "채용 브랜딩",
            "ATS 시스템 구축",
            "후보자 데이터베이스"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "talent_acquisition_specialist",
            "hr_specialist",
            "cb_specialist"
        ],
        color: "#3B82F6"
    },
    finance_staff: {
        id: "finance_staff",
        title: "재무 담당자",
        year: "4-7년차",
        salary: "3,400-4,300만원",
        icon: "💲",
        level: 1,
        x: 33.5,
        projectType: "hybrid",
        description: "재무 관리 및 시스템 운영",
        skills: [
            "자금 관리",
            "현금흐름 분석",
            "예산 편성",
            "재무 시스템",
            "투자 검토"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "financial_analyst",
            "business_analyst",
            "contract_manager",
            "node_1755408802519"
        ],
        color: "#9333EA"
    },
    accounting_staff: {
        id: "accounting_staff",
        title: "회계 담당자",
        year: "4-7년차",
        salary: "3,200-4,000만원",
        icon: "🧮",
        level: 1,
        x: 46,
        projectType: "hybrid",
        description: "회계 시스템 및 업무 처리",
        skills: [
            "전표 처리",
            "결산 업무",
            "세무 신고",
            "전산회계",
            "ERP 운영"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "financial_analyst",
            "business_analyst",
            "node_1755408802519"
        ],
        color: "#9333EA"
    },
    general_affairs_staff: {
        id: "general_affairs_staff",
        title: "총무 담당자",
        year: "4-7년차",
        salary: "3,000-3,800만원",
        icon: "🏢",
        level: 1,
        x: 57.5,
        projectType: "hybrid",
        description: "총무 및 시설 관리 업무",
        skills: [
            "자산 관리",
            "구매 업무",
            "시설 관리",
            "계약 관리",
            "행사 운영"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "facilities_manager",
            "contract_manager",
            "business_analyst",
            "hr_specialist",
            "node_1755411968186"
        ],
        color: "#9333EA"
    },
    hr_specialist: {
        id: "hr_specialist",
        title: "HR Specialist",
        year: "8-12년차",
        salary: "4,500-5,500만원",
        icon: "💼",
        level: 2,
        x: 9.5,
        projectType: "construction",
        description: "HR 전문 정책 및 제도 구축",
        skills: [
            "HR 정책 수립",
            "조직 설계",
            "성과 관리 체계",
            "교육 체계 구축",
            "노무 관리"
        ],
        parents: [
            "hr_associate",
            "recruiter",
            "general_affairs_staff"
        ],
        children: [
            "hrbp",
            "ld_manager",
            "operations_manager",
            "people_culture_manager"
        ],
        color: "#3B82F6"
    },
    financial_analyst: {
        id: "financial_analyst",
        title: "Financial Analyst",
        year: "8-12년차",
        salary: "5,000-6,500만원",
        icon: "📊",
        level: 2,
        x: 20.5,
        projectType: "construction",
        description: "재무 분석 체계 구축 전문가",
        skills: [
            "재무 모델링",
            "투자 분석 체계",
            "리스크 관리 시스템",
            "FP&A 프로세스",
            "재무 보고 체계"
        ],
        parents: [
            "finance_staff",
            "accounting_staff"
        ],
        children: [
            "finance_manager",
            "business_planning_manager",
            "finance_team_manager"
        ],
        color: "#3B82F6"
    },
    cb_specialist: {
        id: "cb_specialist",
        title: "C&B Specialist",
        year: "8-12년차",
        salary: "4,800-6,000만원",
        icon: "💎",
        level: 2,
        x: 30.5,
        projectType: "hybrid",
        description: "보상 및 복리후생 전문가 (Compensation & Benefits Specialist)",
        skills: [
            "급여 체계 설계",
            "복리후생 제도",
            "인센티브 제도",
            "시장 조사",
            "정책 수립"
        ],
        parents: [
            "general_affairs_staff",
            "hr_associate",
            "recruiter"
        ],
        children: [
            "people_culture_manager",
            "ld_manager",
            "hrbp"
        ],
        color: "#9333EA"
    },
    talent_acquisition_specialist: {
        id: "talent_acquisition_specialist",
        title: "TA Specialist",
        year: "8-12년차",
        salary: "5,000-6,500만원",
        icon: "🎯",
        level: 2,
        x: 41,
        projectType: "hybrid",
        description: "인재 영입 전문가 (Talent Acquisition Specialist)",
        skills: [
            "채용 전략 수립",
            "테크 리크루팅",
            "채용 브랜딩",
            "채용 데이터 분석",
            "파이프라인 구축"
        ],
        parents: [
            "hr_associate",
            "recruiter"
        ],
        children: [
            "people_culture_manager",
            "operations_manager",
            "ld_manager"
        ],
        color: "#9333EA"
    },
    business_analyst: {
        id: "business_analyst",
        title: "Business Analyst",
        year: "8-12년차",
        salary: "5,000-6,500만원",
        icon: "📈",
        level: 2,
        x: 51,
        projectType: "hybrid",
        description: "비즈니스 분석 및 개선",
        skills: [
            "데이터 분석",
            "프로세스 개선",
            "요구사항 분석",
            "KPI 관리",
            "리포팅"
        ],
        parents: [
            "finance_staff",
            "accounting_staff",
            "general_affairs_staff"
        ],
        children: [
            "business_planning_manager",
            "operations_manager"
        ],
        color: "#9333EA"
    },
    facilities_manager: {
        id: "facilities_manager",
        title: "GA Manager",
        year: "8-12년차",
        salary: "4,500-5,800만원",
        icon: "🏗️",
        level: 2,
        x: 90.5,
        projectType: "operation",
        description: "General Affairs Manager, 총무 운영 및 관리 책임로 시설 관리, 자산 운영, 안전 관리, 구매 지원 등 근무 환경 등 총괄 책임.",
        skills: [
            "자산 관리",
            "시설 운영 관리",
            "안전 관리",
            "구매 및 계약 지원",
            "행정 업무",
            "비용 및 예산 관리",
            "행사 및 조직 지원",
            "공간 최적화"
        ],
        parents: [
            "general_affairs_staff",
            "node_1755411155908"
        ],
        children: [
            "operations_manager",
            "people_culture_manager",
            "node_1755412096552",
            "business_planning_manager"
        ],
        color: "#10b981"
    },
    contract_manager: {
        id: "contract_manager",
        title: "Contract Manager",
        year: "8-12년차",
        salary: "4,800-6,200만원",
        icon: "📝",
        level: 2,
        x: 61,
        projectType: "hybrid",
        description: "계약 관리 및 협상 전문가",
        skills: [
            "계약서 작성",
            "계약 협상",
            "리스크 관리",
            "벤더 관리",
            "법무 지원"
        ],
        parents: [
            "finance_staff",
            "general_affairs_staff",
            "node_1755411155908"
        ],
        children: [
            "legal_affairs_manager",
            "operations_manager",
            "business_planning_manager"
        ],
        color: "#9333EA"
    },
    hrbp: {
        id: "hrbp",
        title: "HRBP",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "🤝",
        level: 3,
        x: 9.5,
        projectType: "construction",
        description: "HR Business Partner",
        skills: [
            "비즈니스 연계 HR",
            "조직 진단 체계",
            "변화 관리 설계",
            "리더 개발 프로그램",
            "전략적 HR 구축"
        ],
        parents: [
            "hr_specialist",
            "cb_specialist"
        ],
        children: [
            "senior_hrbp",
            "head_of_hr"
        ],
        color: "#3B82F6"
    },
    finance_manager: {
        id: "finance_manager",
        title: "Finance Manager",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "💵",
        level: 3,
        x: 20.5,
        projectType: "construction",
        description: "재무 전략 구축 매니저",
        skills: [
            "재무 전략 수립",
            "M&A 체계 구축",
            "자금 조달 전략",
            "IR 체계 구축",
            "이사회 보고 체계"
        ],
        parents: [
            "financial_analyst",
            "node_1755408802519"
        ],
        children: [
            "finance_director",
            "node_1755409832425",
            "node_1755409895982"
        ],
        color: "#3B82F6"
    },
    operations_manager: {
        id: "operations_manager",
        title: "Operations Manager",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "⚙️",
        level: 3,
        x: 79.5,
        projectType: "operation",
        description: "운영 매니저",
        skills: [
            "운영 전략 수립",
            "프로세스 최적화",
            "비용 관리",
            "품질 관리",
            "벤더 관리"
        ],
        parents: [
            "talent_acquisition_specialist",
            "business_analyst",
            "facilities_manager",
            "hr_specialist",
            "contract_manager",
            "node_1755411968186"
        ],
        children: [
            "operations_director",
            "node_1755410447951"
        ],
        color: "#10b981"
    },
    business_planning_manager: {
        id: "business_planning_manager",
        title: "BPM",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "📋",
        level: 3,
        x: 31.5,
        projectType: "hybrid",
        description: "Business Process Management, 기업의 업무 프로세스(설계, 개선, 혁신, 관리) 전반 총괄. 업무 흐름 최적화, IT 시스템 연계, 프로세스 자동화, 운영 효율성 증대 등 조직 전체 운영 혁신 담당",
        skills: [
            "프로세스 설계 및 개선",
            "업무 자동화",
            "IT 시스템 연계",
            "운영 효율 분석",
            "프로젝트 관리",
            "변화 관리",
            "내부 커뮤니케이션"
        ],
        parents: [
            "financial_analyst",
            "business_analyst",
            "node_1755408802519",
            "contract_manager",
            "node_1755411968186",
            "facilities_manager"
        ],
        children: [
            "operations_director",
            "cx_manager",
            "node_1755410447951"
        ],
        color: "#9333EA"
    },
    people_culture_manager: {
        id: "people_culture_manager",
        title: "P&C Manager",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "🌟",
        level: 3,
        x: 41,
        projectType: "hybrid",
        description: "피플 & 컬처 매니저",
        skills: [
            "조직 문화 구축",
            "Employee Experience",
            "D&I 프로그램",
            "웰빙 프로그램",
            "문화 혁신"
        ],
        parents: [
            "cb_specialist",
            "talent_acquisition_specialist",
            "node_1755408802519",
            "hr_specialist",
            "facilities_manager"
        ],
        children: [
            "head_of_hr",
            "node_1755410447951"
        ],
        color: "#9333EA"
    },
    legal_affairs_manager: {
        id: "legal_affairs_manager",
        title: "Legal Manager",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "⚖️",
        level: 3,
        x: 50.5,
        projectType: "hybrid",
        description: "법무 관리 매니저",
        skills: [
            "법무 정책 수립",
            "계약 관리",
            "컴플라이언스",
            "리스크 관리",
            "분쟁 해결"
        ],
        parents: [
            "contract_manager"
        ],
        children: [
            "operations_director",
            "node_1755410447951"
        ],
        color: "#9333EA"
    },
    finance_team_manager: {
        id: "finance_team_manager",
        title: "F&A Team Manager",
        year: "13-18년차",
        salary: "7,000-9,000만원",
        icon: "💳",
        level: 3,
        x: 90.5,
        projectType: "operation",
        description: "재무/회계 팀 매니저",
        skills: [
            "팀 운영 관리",
            "재무 전략 실행",
            "결산 관리",
            "감사 대응",
            "시스템 운영"
        ],
        parents: [
            "financial_analyst",
            "node_1755408802519"
        ],
        children: [
            "finance_director",
            "node_1755409895982",
            "node_1755409832425"
        ],
        color: "#10B981"
    },
    ld_manager: {
        id: "ld_manager",
        title: "L&D Manager",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "📚",
        level: 3,
        x: 60.5,
        projectType: "hybrid",
        description: "학습개발 매니저",
        skills: [
            "L&D 전략",
            "교육 체계 구축",
            "벤더 관리",
            "예산 관리",
            "팀 운영"
        ],
        parents: [
            "hr_specialist",
            "cb_specialist",
            "talent_acquisition_specialist"
        ],
        children: [
            "head_of_ld",
            "head_of_hr"
        ],
        color: "#9333EA"
    },
    senior_hrbp: {
        id: "senior_hrbp",
        title: "Senior HRBP",
        year: "20년차+",
        salary: "8,000-10,000만원",
        icon: "🏆",
        level: 4,
        x: 9.5,
        projectType: "construction",
        description: "시니어 HR 비즈니스 파트너",
        skills: [
            "전략적 파트너십",
            "경영진 자문",
            "조직 변혁",
            "M&A HR",
            "글로벌 HR"
        ],
        parents: [
            "hrbp"
        ],
        children: [
            "hr_director"
        ],
        color: "#3B82F6"
    },
    finance_director: {
        id: "finance_director",
        title: "Finance Director",
        year: "20년차+",
        salary: "9,000-12,000만원",
        icon: "💎",
        level: 4,
        x: 20.5,
        projectType: "construction",
        description: "재무 디렉터",
        skills: [
            "재무 리더십",
            "전략적 의사결정",
            "IPO 준비",
            "기업 가치 평가",
            "이사회 보고"
        ],
        parents: [
            "finance_manager",
            "finance_team_manager"
        ],
        children: [
            "cfo",
            "coo",
            "cao"
        ],
        color: "#3B82F6"
    },
    operations_director: {
        id: "operations_director",
        title: "Operations Director",
        year: "20년차+",
        salary: "8,500-11,000만원",
        icon: "🎯",
        level: 4,
        x: 79.5,
        projectType: "operation",
        description: "운영 디렉터",
        skills: [
            "운영 전략",
            "디지털 전환",
            "프로세스 혁신",
            "글로벌 운영",
            "파트너십"
        ],
        parents: [
            "operations_manager",
            "business_planning_manager",
            "legal_affairs_manager",
            "node_1755412096552"
        ],
        children: [
            "coo",
            "cao"
        ],
        color: "#10b981"
    },
    head_of_hr: {
        id: "head_of_hr",
        title: "Head of HR",
        year: "20년차+",
        salary: "8,500-11,000만원",
        icon: "🌍",
        level: 4,
        x: 31.5,
        projectType: "hybrid",
        description: "HR 부문장, 인사 부문 총괄 리더, 조직 전반 인재 전략 수립, 조직문화 창출, HR 프로세스 최적화 및 운영, 경영진 협력, 이사회 보고 등 담당. 조직의 성과와 혁신을 이끄는 핵심 역할 수행.",
        skills: [
            "HR 리더십",
            "전사 HR 전략",
            "이사회 보고",
            "글로벌 HR",
            "조직 혁신",
            "직원 경험 혁신",
            "리더십 개발 및 승계 계획"
        ],
        parents: [
            "people_culture_manager",
            "hrbp",
            "ld_manager"
        ],
        children: [
            "chro",
            "hr_director"
        ],
        color: "#9333ea"
    },
    head_of_ld: {
        id: "head_of_ld",
        title: "Head of L&D",
        year: "20년차+",
        salary: "8,500-11,000만원",
        icon: "🎓",
        level: 4,
        x: 60.5,
        projectType: "hybrid",
        description: "L&D 부문장",
        skills: [
            "L&D 이괄",
            "전사 교육 전략",
            "대학 파트너십",
            "경영진 교육",
            "문화 변혁"
        ],
        parents: [
            "ld_manager"
        ],
        children: [
            "chief_learning_officer"
        ],
        color: "#9333EA"
    },
    hr_director: {
        id: "hr_director",
        title: "HR Director",
        year: "25년차+",
        salary: "10,000-13,000만원",
        icon: "🔷",
        level: 5,
        x: 15,
        projectType: "construction",
        description: "HR 이사",
        skills: [
            "HR 전략 이괄",
            "조직 변혁 주도",
            "경영진 파트너",
            "미래 조직 설계",
            "ESG 경영"
        ],
        parents: [
            "senior_hrbp",
            "head_of_hr"
        ],
        children: [
            "ceo"
        ],
        color: "#3B82F6"
    },
    chro: {
        id: "chro",
        title: "CHRO",
        year: "25년차+",
        salary: "12,000-16,000만원",
        icon: "👥",
        level: 5,
        x: 31.5,
        projectType: "hybrid",
        description: "최고인사책임자",
        skills: [
            "인재 전략",
            "조직 혁신",
            "경영진 승계",
            "문화 구축",
            "이사회 보고"
        ],
        parents: [
            "head_of_hr"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    cfo: {
        id: "cfo",
        title: "CFO",
        year: "25년차+",
        salary: "13,000-18,000만원",
        icon: "💰",
        level: 5,
        x: 41.5,
        projectType: "hybrid",
        description: "최고재무책임자",
        skills: [
            "재무 리더십",
            "자본 전략",
            "M&A",
            "이사회 관계",
            "IPO"
        ],
        parents: [
            "finance_director",
            "node_1755409895982",
            "node_1755409832425"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    coo: {
        id: "coo",
        title: "COO",
        year: "25년차+",
        salary: "13,000-18,000만원",
        icon: "⚡",
        level: 5,
        x: 51,
        projectType: "hybrid",
        description: "최고운영책임자",
        skills: [
            "운영 전략",
            "비즈니스 실행",
            "효율화",
            "변화 관리",
            "성과 관리"
        ],
        parents: [
            "operations_director",
            "node_1755409895982",
            "finance_director",
            "node_1755410447951",
            "node_1755409832425",
            "node_1755412169456"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    chief_learning_officer: {
        id: "chief_learning_officer",
        title: "CLO",
        year: "25년차+",
        salary: "12,000-16,000만원",
        icon: "🏫",
        level: 5,
        x: 60.5,
        projectType: "hybrid",
        description: "최고학습책임자 (Chief Learning Officer)",
        skills: [
            "학습 전략 이괄",
            "조직 역량 개발",
            "미래 인재 육성",
            "학습 문화 구축",
            "이사회 보고"
        ],
        parents: [
            "head_of_ld"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
    },
    cao: {
        id: "cao",
        title: "CAO",
        year: "25년차+",
        salary: "11,000-15,000만원",
        icon: "🏛️",
        level: 5,
        x: 85,
        projectType: "operation",
        description: "최고행정책임자",
        skills: [
            "행정 전략",
            "조직 관리",
            "정책 수립",
            "거버넌스",
            "리스크 관리"
        ],
        parents: [
            "operations_director",
            "node_1755409895982",
            "finance_director",
            "node_1755410447951",
            "node_1755409832425",
            "node_1755412169456"
        ],
        children: [
            "ceo"
        ],
        color: "#10B981"
    },
    ceo: {
        id: "ceo",
        title: "CEO",
        year: "25년차+",
        salary: "15,000-20,000만원+",
        icon: "👑",
        level: 6,
        x: 50,
        projectType: "hybrid",
        description: "최고경영자 (경영지원 출신)",
        skills: [
            "경영 전반",
            "비전 수립",
            "조직 문화",
            "대외 관계",
            "이사회 운영"
        ],
        parents: [
            "hr_director",
            "chro",
            "cfo",
            "coo",
            "cao",
            "chief_learning_officer",
            "node_1755412306334"
        ],
        children: [],
        color: "#FFD700"
    },
    node_1755408802519: {
        id: "node_1755408802519",
        title: "F&A Manager",
        year: "8-12년차",
        salary: "5,000-7,000만원",
        icon: "🪙",
        level: 2,
        x: 80,
        projectType: "operation",
        description: "Finance & Accounting Manager, 재무회계 운영 및 관리 책임자, 재무제표 작성, 자금 관리, 회계 감사, 비용 분석, 세무 신고 등 회사의 재무 건전성 유지 및 경영진 재무 정보 보고 및 지원/관 담당",
        skills: [
            "재무제표 분석 및 작성",
            "자금 관리 및 계획",
            "회계 감사 대응",
            "비용 및 예산 관리",
            "세무 신고 및 준법 관리",
            "내부 통제 및 리스크 관리",
            "ERP 시스템 운영"
        ],
        parents: [
            "accounting_staff",
            "finance_staff"
        ],
        children: [
            "finance_team_manager",
            "finance_manager",
            "people_culture_manager",
            "business_planning_manager"
        ],
        color: "#10b981"
    },
    node_1755409832425: {
        id: "node_1755409832425",
        title: "Accounting Director",
        year: "20년차+",
        salary: "9,500-12,500만원",
        icon: "🧾",
        level: 4,
        x: 50,
        projectType: "hybrid",
        description: "회계 부문 책임자, 재무제표 작성, 결산 관리, 세무 전략 수립, 내부통제, 회계 감사 대응 및 회계 정책 전반 총괄.",
        skills: [
            "회계 정책 및 표준 수립",
            "재무제표 작성 및 분석",
            "결산 보고 및 공시",
            "세무 신고 및 절세 전략",
            "회계 감사 대응 및 커뮤니케이션",
            "내부통제 및 리스크 관리",
            "회계 시스템 및 ERP 운영"
        ],
        parents: [
            "finance_manager",
            "finance_team_manager"
        ],
        children: [
            "cfo",
            "coo",
            "cao"
        ],
        color: "#9333EA"
    },
    node_1755409895982: {
        id: "node_1755409895982",
        title: "F&A Director",
        year: "20년차+",
        salary: "8,500-11,000만원",
        icon: "🌠",
        level: 4,
        x: 90.5,
        projectType: "operation",
        description: "Finance & Accounting Director, 재무 및 회계 부문을 통합 총괄 임원급 리더, 재무 전략 수립, 회계 정책, 자금 운영, 세무, 내부통제, 조직 재무 건전성 유지 및 강화.",
        skills: [
            "재무 전략 및 자금 관리",
            "회계 정책 및 결산 총괄",
            "세무 전략 및 절세 방안 수립",
            "내부통제 및 컴플라이언스",
            "재무 리스크 관리",
            "ERP 및 재무회계 시스템 운영",
            "조직 리더십 및 경영진 보고"
        ],
        parents: [
            "finance_team_manager",
            "finance_manager"
        ],
        children: [
            "coo",
            "cfo",
            "cao"
        ],
        color: "#10b981"
    },
    node_1755410447951: {
        id: "node_1755410447951",
        title: "GA Director",
        year: "20년차+",
        salary: "8,500-11,000만원",
        icon: "🏢",
        level: 4,
        x: 40.5,
        projectType: "hybrid",
        description: "General Affairs Director, 총무 부문 최고 책임, 자산 관리, 시설 운영, 구매 및 계약, 안전 및 컴플라이언스, 조직 지원 인프라 전반 총괄, 회사 운영 효율성 및 안정성 진단/점검/자문/관",
        skills: [
            "운영 전략",
            "디지털 전환",
            "프로세스 혁신",
            "글로벌 운영",
            "파트너십"
        ],
        parents: [
            "operations_manager",
            "business_planning_manager",
            "people_culture_manager",
            "legal_affairs_manager",
            "node_1755412096552"
        ],
        children: [
            "cao",
            "coo"
        ],
        color: "#9333EA"
    },
    node_1755411155908: {
        id: "node_1755411155908",
        title: "법무/계약 담당자",
        year: "4-7년차",
        salary: "3,000-3,800만원",
        icon: "🗂️",
        level: 1,
        x: 80,
        projectType: "operation",
        description: "Legal/Contract Assistant, 법무 지원 및 계약 관리 실무 담당, 계약서 작성 및 검토 보조, 법률 문서 관리, 계약 이행 모니터링, 내부/외부 커뮤니케이션을 수행.",
        skills: [
            "계약서 작성 및 검토 보조",
            "계약 이행 모니터링",
            "법률 문서 관리",
            "법률 리서치 지원",
            "내부외부 커뮤니케이션",
            "계약 데이터베이스 관리",
            "계약 관련 리스크 식별"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "contract_manager",
            "facilities_manager"
        ],
        color: "#10b981"
    },
    node_1755411895730: {
        id: "node_1755411895730",
        title: "네트워크/보안 담당자",
        year: "4-7년차",
        salary: "3,000-3,800만원",
        icon: "🛠️",
        level: 1,
        x: 68.5,
        projectType: "hybrid",
        description: "네트워크 장비 설치, 기본 구성 및 보안 모니터링 지원, 장애 대응 일상 운영 업무 수행",
        skills: [
            "네트워크 장비 설치 및 구성",
            "기본 보안 설정",
            "네트워크 모니터링 지원",
            "장애 분석 및 초기 대응",
            "패치 및 업데이트 관리",
            "문서화 및 보고",
            "사용자 지원"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "node_1755411968186"
        ],
        color: "#9333EA"
    },
    node_1755411968186: {
        id: "node_1755411968186",
        title: "NSE",
        year: "8-12년차",
        salary: "4,800-6,200만원",
        icon: "🖧",
        level: 2,
        x: 70.5,
        projectType: "hybrid",
        description: "Network & Security Engineer, 네트워크 설계·구성·운영, 네트워크 보안 실무 담당, 시스템 안정성, 보안 방어·운영 책임",
        skills: [
            "네트워크 구축 및 구성",
            "라우팅 스위칭 관리",
            "방화벽 및 침입방지 운영",
            "네트워크 장애 대응",
            "VPN/WAN/LAN 운영",
            "보안 정책 및 접근제어",
            "네트워크 성능 모니터링",
            "취약점 분석 및 대응"
        ],
        parents: [
            "node_1755411895730",
            "general_affairs_staff"
        ],
        children: [
            "node_1755412096552",
            "operations_manager",
            "business_planning_manager"
        ],
        color: "#9333EA"
    },
    node_1755412096552: {
        id: "node_1755412096552",
        title: "NSM",
        year: "13-18년차",
        salary: "6,500-8,500만원",
        icon: "🛡️",
        level: 3,
        x: 70,
        projectType: "hybrid",
        description: "Network & Security Manager, 네트워크 인프라 운영, 보안 통합 관리, 팀 리딩, 보안 사고대응, 네트워크 인프라 강화 총괄",
        skills: [
            "네트워크 인프라 운영 총괄",
            "보안 시스템 관리",
            "팀 관리 및 프로젝트 리딩",
            "운영 효율화 및 비용관리",
            "사고 대응 및 복구",
            "네트워크 확장 전략 수립",
            "보안 인증 및 규정 준수",
            "클라우드 네트워크 보안"
        ],
        parents: [
            "node_1755411968186",
            "facilities_manager"
        ],
        children: [
            "node_1755412169456",
            "operations_director",
            "node_1755410447951"
        ],
        color: "#9333EA"
    },
    node_1755412169456: {
        id: "node_1755412169456",
        title: "NSD",
        year: "20년차+",
        salary: "9,000만-1.3억원",
        icon: "💻",
        level: 4,
        x: 70,
        projectType: "hybrid",
        description: "Network & Security Director, 기업 전반의 네트워크 및 보안 전략 총괄, 인프라 설계·운영및 보안 거버넌스, 정책, 예산 운영/수립 등.",
        skills: [
            "네트워크·보안 전략 수립",
            "인프라 아키텍처 설계 및 혁신",
            "보안 정책 및 규정 관리",
            "예산 및 조직 관리",
            "내외부 감사 대응 및 리포팅",
            "신기술 도입 평가",
            "경영진 커뮤니케이션",
            "팀 리더십 및 변화관리"
        ],
        parents: [
            "node_1755412096552"
        ],
        children: [
            "node_1755412306334",
            "cao",
            "coo"
        ],
        color: "#9333EA"
    },
    node_1755412306334: {
        id: "node_1755412306334",
        title: "CNSO",
        year: "25년차+",
        salary: "12,000-16,000만원",
        icon: "🧬",
        level: 5,
        x: 70,
        projectType: "hybrid",
        description: "Chief Network & Security Officer, 조직의 네트워크, 정보 보안 전략, 리스크 관리, 규정 준수 및 경영진 협력 등 모든 네트워크·보안 실무의 최상위 실행 책임자",
        skills: [
            "전사 네트워크·보안 전략 수립",
            "리스크 관리 및 규정 준수",
            "이사회 및 경영진 보고",
            "보안·네트워크 인시던트 대응 총괄",
            "정보보호 정책 리딩",
            "팀·예산·프로젝트 총괄",
            "신기술 및 산업 동향 분석",
            "사이버 보안 문화 조성"
        ],
        parents: [
            "node_1755412169456"
        ],
        children: [
            "ceo"
        ],
        color: "#9333EA"
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
    <span className="metallic-text">경영지원 커리어패스</span>
  </h1>
  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
    회계/인사/총무부터 전략 기획, 그리고 경영 리더십까지
  </p>
</div>
        
        <CareerPathViewer 
          initialNodes={adminNodes}
          careerType="admin"
          renderBottomPanel={renderBottomPanel}
        />
      </div>
    </AnimatedBackground>
  );
};

export default AdminPath;