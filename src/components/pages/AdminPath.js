// AdminPath.js
// 자동 생성된 파일 - 2025-11-04T12:53:18.192Z
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
        description: "조직의 원활한 경영 활동을 위해 인사, 총무, 재무, 회계 등 전반적인 행정 업무를 지원하는 역할. 회사의 자산 관리, 문서 관리, 경비 처리, 복지후생 지원 등 기업의 내부 운영을 담당.",
        skills: [
            "MS Office",
            "문서 작성 및 관리",
            "기초 회계 처리",
            "자산 관리",
            "경비 처리",
            "일반 행정 업무",
            "커뮤니케이션 및 협업",
            "꼼꼼함과 책임감"
        ],
        parents: [],
        children: [
            "hr_associate",
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
        x: 14.5,
        projectType: "construction",
        description: "채용부터 퇴직까지 전체 인사 프로세스를 관리, HR 시스템 구축 및 운영, 인사 제도 수립, 급여·복리후생 관리 등을 담당",
        skills: [
            "채용 프로세스 설계 및 운영",
            "HR 시스템(HRIS) 구축 및 활용",
            "인사 제도 및 정책 수립",
            "급여·복리후생 관리",
            "근태 관리",
            "노무 관리 및 법규 준수",
            "인사평가 운영",
            "교육·조직문화 기획"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "hr_specialist",
            "talent_acquisition_specialist",
            "facilities_manager"
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
        x: 29.5,
        projectType: "hybrid",
        description: "기업의 재무 건전성을 책임지는 핵심 직무로, 자금 조달·운용, 재무제표 작성·결산, 세무 신고 및 관리를 수행하며 경영진의 의사결정을 위한 재무 분석과 보고를 담당",
        skills: [
            "재무·회계 지식(K-IFRS)",
            "자금 관리",
            "세무 실무",
            "재무 분석",
            "예산 편성·관리",
            "ERP·엑셀 활용",
            "재무 보고",
            "윤리의식",
            "커뮤니케이션",
            "리더십"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "financial_analyst",
            "contract_manager",
            "node_1755408802519",
            "facilities_manager"
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
        x: 43,
        projectType: "hybrid",
        description: "기업의 재무정보를 K-IFRS 기준으로 관리하고, 결산·세무신고·외부감사 등 회계 업무 전반을 수행하며, 정확한 재무제표 작성을 통해 경영 의사결정을 지원합니다.",
        skills: [
            "K-IFRS(국제회계기준)",
            "결산 업무",
            "세무 신고(법인세·부가세·원천세)",
            "전산회계(더존 ERP)",
            "재무제표 작성",
            "외부감사 대응",
            "엑셀·OA",
            "회계 자격증(재경관리사·전산세무회계)"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "financial_analyst",
            "node_1755408802519",
            "contract_manager",
            "facilities_manager"
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
        x: 56.7,
        projectType: "hybrid",
        description: "조직의 경영활동을 지원하는 행정 전문가로, 자산·시설 관리, 복리후생 운영, 사무환경 조성 등 전사 지원업무를 총괄하며 임직원의 업무 효율성을 극대화합니다.",
        skills: [
            "자산 관리",
            "구매 업무",
            "시설 관리",
            "계약 관리",
            "행사 운영",
            "커뮤니케이션",
            "대인관계",
            "MS오피스 활용",
            "자산관리",
            "복리후생 운영",
            "법률·회계 기초지식",
            "멀티태스킹",
            "문서작성",
            "일정관리",
            "문제해결"
        ],
        parents: [
            "admin_junior"
        ],
        children: [
            "facilities_manager",
            "contract_manager",
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
        description: "인사 제도 및 정책 기획·운영, 채용·급여·교육·평가 등 HR 전반 관리, 노무·복리후생 운영 및 조직문화 개선",
        skills: [
            "HR 정책 수립",
            "조직 설계",
            "노무 관리",
            "인사제도 기획",
            "근로기준법",
            "채용·온보딩",
            "급여·복리후생 관리",
            "교육·육성 체계",
            "평가·보상 운영",
            "HRIS·데이터 분석",
            "커뮤니케이션",
            "문제해결"
        ],
        parents: [
            "hr_associate",
            "general_affairs_staff",
            "node_1755411155908"
        ],
        children: [
            "hrbp",
            "ld_manager",
            "operations_manager",
            "business_planning_manager"
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
        x: 21.5,
        projectType: "construction",
        description: "재무 분석 체계 구축 전문가, 재무 데이터 분석·모델링, 예산·예측 수립, 투자·리스크 평가, 경영진 의사결정 지원",
        skills: [
            "투자 분석 체계",
            "FP&A 프로세스",
            "재무 모델링",
            "데이터 분석",
            "Excel·SQL",
            "회계 지식",
            "가치평가",
            "예산·예측",
            "재무보고",
            "리스크 관리",
            "커뮤니케이션",
            "문제해결"
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
    talent_acquisition_specialist: {
        id: "talent_acquisition_specialist",
        title: "TA Specialist",
        year: "8-12년차",
        salary: "5,000-6,500만원",
        icon: "🎯",
        level: 2,
        x: 35,
        projectType: "hybrid",
        description: "인재 영입 전문가 (Talent Acquisition Specialist), 인재 소싱·스크리닝·면접·채용 전 과정 관리, 채용 브랜딩·전략 수립, 인재 파이프라인 구축 및 온보딩 지원",
        skills: [
            "채용 전략 수립",
            "테크 리크루팅",
            "채용 데이터 분석",
            "파이프라인 구축",
            "풀사이클 채용",
            "소싱·헤드헌팅",
            "ATS 운영",
            "채용 브랜딩",
            "면접 스킬",
            "인재풀 관리",
            "데이터 분석",
            "LinkedIn 활용"
        ],
        parents: [
            "hr_associate"
        ],
        children: [
            "operations_manager",
            "ld_manager",
            "hrbp"
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
            "node_1755411155908",
            "hr_associate",
            "finance_staff",
            "accounting_staff"
        ],
        children: [
            "operations_manager",
            "node_1755412096552",
            "business_planning_manager",
            "hrbp",
            "legal_affairs_manager",
            "ld_manager"
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
        x: 50,
        projectType: "hybrid",
        description: "계약 관리 및 협상 전문가, 계약 전 생애주기 관리, 계약서 작성·검토·협상, 법률 준수·리스크 관리, 공급업체·벤더 관리",
        skills: [
            "계약서 작성·검토",
            "협상",
            "법률·규정 지식",
            "리스크 관리",
            "벤더 관리",
            "분쟁 해결",
            "커뮤니케이션",
            "계약관리시스템",
            "세부사항 주의력"
        ],
        parents: [
            "finance_staff",
            "general_affairs_staff",
            "node_1755411155908",
            "accounting_staff"
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
        description: "HR Business Partner, 비즈니스 전략 연계 HR 수립, 조직 진단·분석, 인재 관리·리더 코칭, 변화 관리 주도, 전략적 파트너십 구축",
        skills: [
            "변화 관리 설계",
            "역량 개발 프로그램",
            "전략적 HR 구축",
            "비즈니스 이해력",
            "전략적 사고",
            "인재 관리",
            "조직 진단·분석",
            "변화 관리",
            "리더십 코칭",
            "데이터 분석",
            "관계 구축",
            "커뮤니케이션",
            "문제해결"
        ],
        parents: [
            "hr_specialist",
            "facilities_manager",
            "talent_acquisition_specialist"
        ],
        children: [
            "head_of_hr",
            "operations_director",
            "head_of_ld",
            "node_1755410447951"
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
        description: "기업 재무 전략 수립 및 실행, M&A·투자 체계 구축, 자금 조달 및 IR 운영을 통한 재무 건전성 관리 및 기업가치 제고",
        skills: [
            "재무 전략 기획",
            "M&A 실사·가치평가",
            "IR 운영",
            "자금 조달",
            "재무 모델링",
            "예산 관리",
            "이사회 보고",
            "리스크 관리",
            "이해관계자 커뮤니케이션",
            "리더십"
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
        x: 78.43856180900714,
        projectType: "operation",
        description: "운영 매니저, 조직의 전략적 운영 관리 총괄, 일상 운영 프로세스 최적화 및 효율성 제고. 부서 간 협업 조율, 예산·리소스 관리를 통한 비즈니스 목표 달성. 데이터 기반 의사결정으로 성과 향상 및 지속적 개선 주도.",
        skills: [
            "전략 기획",
            "프로세스 최적화",
            "예산·리소스 관리",
            "데이터 분석·KPI 관리",
            "프로젝트 관리",
            "팀 리더십",
            "부서 간 조율",
            "리스크 관리",
            "ERP·운영 시스템",
            "문제 해결"
        ],
        parents: [
            "talent_acquisition_specialist",
            "facilities_manager",
            "hr_specialist",
            "contract_manager",
            "node_1755411968186",
            "node_1755408802519"
        ],
        children: [
            "operations_director",
            "node_1755410447951",
            "head_of_hr"
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
            "node_1755408802519",
            "contract_manager",
            "node_1755411968186",
            "facilities_manager",
            "hr_specialist"
        ],
        children: [
            "operations_director",
            "cx_manager",
            "node_1755410447951",
            "head_of_ld"
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
        x: 43.62064309017932,
        projectType: "hybrid",
        description: "기업 법무 전반 총괄 및 법률 리스크 관리. 계약서 검토·작성, 법규 모니터링 및 컴플라이언스 관리, 소송·분쟁 대응 전략 수립. 사내 법률 자문 제공 및 법무 정책·규정 수립으로 기업의 법적 안정성 확보.",
        skills: [
            "계약 관리·검토",
            "컴플라이언스 관리",
            "법률 리스크 평가",
            "소송·분쟁 관리",
            "법규 모니터링",
            "사내 규정 수립",
            "법무팀 운영",
            "외부 법률자문 관리",
            "영문 계약서 검토",
            "법무 예산 관리"
        ],
        parents: [
            "contract_manager",
            "facilities_manager"
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
        description: "재무/회계 팀 매니저, 재무 및 회계 팀 총괄 관리, 월/년 결산·재무제표 작성 및 보고 책임. 예산 수립·집행 관리, 세무 신고 및 감사 대응. 내부통제 시스템 구축 및 재무 분석을 통한 경영 의사결정 지원.",
        skills: [
            "회계·세무·결산",
            "재무 분석·예산 관리",
            "GAAP/IFRS 회계기준",
            "ERP·회계시스템(SAP 등)",
            "내부통제·감사 대응",
            "팀 리더십",
            "데이터 분석·보고",
            "전략적 사고",
            "규정 준수"
        ],
        parents: [
            "financial_analyst",
            "node_1755408802519"
        ],
        children: [
            "finance_director",
            "node_1755409895982",
            "node_1755409832425",
            "operations_director",
            "head_of_ld"
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
        x: 54.938431567631255,
        projectType: "hybrid",
        description: "학습개발 매니저, 조직의 학습 전략 수립 및 교육 프로그램 설계·운영. 스킬 기반 교육체계 구축, 직원 역량 개발을 통한 비즈니스 성과 창출, 직원 경험(EX) 최적화를 통한 몰입도 향상,  AI·디지털 학습 도구 활용한 맞춤형 학습 경험 제공 및 교육 효과 측정·분석, 데이터 기반 조직 진단 및 개선 전략 수립, DEI·웰빙 프로그램 운영으로 건강한 조직 문화 조성.",
        skills: [
            "L&D 전략",
            "교수설계(Instructional Design)",
            "LMS·e-learning 운영",
            "교육 니즈 분석",
            "스킬 기반 HRD",
            "데이터 분석·성과 측정",
            "AI 학습 도구 활용",
            "비즈니스 전략 이해",
            "리더십 개발",
            "프로젝트 관리",
            "커뮤니케이션",
            "Employee Experience",
            "DEI 전략",
            "조직 진단·분석"
        ],
        parents: [
            "hr_specialist",
            "talent_acquisition_specialist",
            "facilities_manager"
        ],
        children: [
            "head_of_ld",
            "head_of_hr"
        ],
        color: "#9333EA"
    },
    finance_director: {
        id: "finance_director",
        title: "Finance Director",
        year: "20년차+",
        salary: "9,000-12,000만원",
        icon: "💎",
        level: 4,
        x: 10.5,
        projectType: "construction",
        description: "기업 재무 전략 총괄 책임자로 재무기획·예산·자금관리·회계·세무·투자자관계(IR)를 통합 관리하며, 경영진에게 재무적 의사결정을 지원하고 기업가치 제고를 주도합니다.",
        skills: [
            "재무전략 수립",
            "FP&A(재무기획분석)",
            "자금·예산관리",
            "내부통제·컴플라이언스",
            "투자자관계(IR)",
            "IPO·자금조달",
            "세무·회계관리",
            "이사회 보고",
            "리스크관리",
            "재무팀 리더십"
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
        x: 78.7,
        projectType: "operation",
        description: "전사 운영 총괄 책임자로 일상 업무 관리, 운영 전략 수립·실행, 프로세스 최적화를 통해 조직 효율성을 극대화하고 CEO의 비전을 실행으로 구현합니다",
        skills: [
            "운영전략 수립·실행",
            "프로세스 최적화·혁신",
            "부서간 협업 조율",
            "예산·자원관리",
            "KPI·성과관리",
            "디지털 전환",
            "변화관리",
            "글로벌 운영",
            "파트너십 관리",
            "리더십"
        ],
        parents: [
            "operations_manager",
            "business_planning_manager",
            "legal_affairs_manager",
            "node_1755412096552",
            "hrbp",
            "finance_team_manager"
        ],
        children: [
            "coo",
            "cao",
            "chief_learning_officer"
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
        x: 21.959026888604352,
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
            "hrbp",
            "ld_manager",
            "operations_manager"
        ],
        children: [
            "chro",
            "hr_director",
            "coo",
            "chief_learning_officer",
            "cao"
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
        x: 55.633802816901415,
        projectType: "hybrid",
        description: "Learning & Development 부문 총괄 책임자로 전사 인재개발 전략을 수립하고, 교육 프로그램 설계·운영·평가를 통해 구성원 역량 강화와 조직 성장을 주도하며 학습 문화를 구축합니다.",
        skills: [
            "전사 교육 전략 수립",
            "교육 프로그램 설계·운영",
            "리더십 개발",
            "역량 모델링",
            "학습 효과성 측정",
            "외부 파트너십 관리",
            "조직문화 변화관리",
            "학습 시스템(LMS) 관리",
            "예산 관리",
            "팀 리더십"
        ],
        parents: [
            "ld_manager",
            "hrbp",
            "finance_team_manager",
            "business_planning_manager"
        ],
        children: [
            "chief_learning_officer",
            "hr_director",
            "chro"
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
        x: 17.6,
        projectType: "construction",
        description: "HR 이사, 인사 전략 수립 및 비즈니스 목표 정렬, 조직 변화 관리 및 미래 조직 설계 주도, 경영진 파트너로서 핵심 인사 의사결정 리딩",
        skills: [
            "조직 변혁 주도",
            "경영진 파트너",
            "미래 조직 설계",
            "HR 전략 기획 및 실행",
            "인재 육성 및 개발",
            "경영진 협업 및 의사소통",
            "ESG 경영 및 인적자본 관리",
            "데이터 기반 의사결정",
            "노사관계 관리",
            "리더십"
        ],
        parents: [
            "head_of_hr",
            "head_of_ld"
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
        x: 28.5,
        projectType: "hybrid",
        description: "최고인사책임자, 전사 인재 전략 수립 및 비즈니스 목표 연계, 조직 혁신과 문화 변화 주도, 이사회 및 경영진 파트너로서 승계 계획 수립",
        skills: [
            "전략적 인재 관리",
            "비즈니스 통찰력",
            "조직 변화 관리",
            "경영진 승계 계획",
            "이사회 보고 및 커뮤니케이션",
            "ESG·DEI 경영",
            "데이터 기반 의사결정",
            "C레벨 리더십"
        ],
        parents: [
            "head_of_hr",
            "head_of_ld"
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
        x: 39.7,
        projectType: "hybrid",
        description: "최고재무책임자, 전사 재무·회계·자금 총괄 및 재무 전략 수립, 자본 구조 설계 및 자금 조달 실행, 경영 의사결정 지원 및 이사회·투자자 관계 관리, M&A·IPO 등 전략적 거래 주도",
        skills: [
            "재무 전략 기획 및 FP&A",
            "관리회계·재무회계·세무",
            "자금 조달 및 자본 관리",
            "투자자 관계(IR) 및 이사회 보고",
            "M&A·IPO 실행",
            "재무 리스크 및 규제 관리",
            "경영 분석 및 의사결정",
            "데이터 기반 경영",
            "ESG 재무 공시"
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
        x: 50.9,
        projectType: "hybrid",
        description: "최고운영책임자, 기업 일상 운영 총괄 및 전략 실행, CEO 비전을 실행 가능한 운영 계획으로 전환하고 조직 효율성 최적화, 내부 부서 간 조율 및 성과 관리 주도",
        skills: [
            "전략 기획 및 실행",
            "운영 효율화",
            "조직 관리",
            "재무/예산 관리",
            "성과·KPI 관리",
            "변화 관리",
            "리스크·컴플라이언스 관리",
            "부서 간 커뮤니케이션",
            "의사결정",
            "리더십"
        ],
        parents: [
            "operations_director",
            "node_1755409895982",
            "finance_director",
            "node_1755410447951",
            "node_1755409832425",
            "node_1755412169456",
            "head_of_hr"
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
        x: 62.3,
        projectType: "hybrid",
        description: "최고학습책임자 (Chief Learning Officer), 조직 학습·개발 전략 총괄, 비즈니스 목표와 인재 육성 전략 연계, 리더십 개발 및 학습 문화 구축으로 조직 역량 강화 주도",
        skills: [
            "학습 전략 기획",
            "조직 개발",
            "인재 육성",
            "리더십 개발",
            "변화 관리",
            "학습 성과 측정",
            "데이터 분석",
            "비즈니스 통찰력",
            "학습 기술(LMS)",
            "커뮤니케이션"
        ],
        parents: [
            "head_of_ld",
            "head_of_hr",
            "operations_director"
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
        x: 84.5,
        projectType: "operation",
        description: "최고행정책임자, 조직 행정·운영 기능 총괄, 재무·인사·IT·법무 등 내부 부서 통합 관리, 정책·절차 수립 및 컴플라이언스 감독으로 운영 효율성 확보",
        skills: [
            "행정 운영 관리",
            "정책 수립",
            "조직 관리",
            "컴플라이언스·리스크 관리",
            "예산·재무 관리",
            "전략 기획",
            "부서 간 협업 조율",
            "의사결정",
            "리더십",
            "변화 관리",
            "리스크 관리"
        ],
        parents: [
            "operations_director",
            "node_1755409895982",
            "finance_director",
            "node_1755410447951",
            "node_1755409832425",
            "node_1755412169456",
            "head_of_hr"
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
        description: "최고경영자 (경영 전공), 기업 최고 의사결정자로서 비전·전략 수립 및 실행 총괄, 이사회·주주 대상 경영 성과 보고, 조직 문화 구축 및 대외 관계 관리로 지속 성장 견인",
        skills: [
            "전략 수립",
            "비전 제시",
            "의사결정",
            "재무·경영 관리",
            "이사회 운영",
            "조직 문화 구축",
            "대외 관계 관리",
            "리더십",
            "커뮤니케이션",
            "변화 관리"
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
        x: 77,
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
            "business_planning_manager",
            "operations_manager"
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
        x: 44.43021766965429,
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
        x: 33.162612035851474,
        projectType: "hybrid",
        description: "General Affairs Director, 전사 행정·총무 부문 총괄 책임자로 시설·자산관리, 복리후생 기획, 임원 지원, 안전·보안 관리를 통해 임직원의 업무환경을 최적화하고 경영 활동을 지원합니다.",
        skills: [
            "운영 전략",
            "디지털 전환",
            "프로세스 혁신",
            "글로벌 운영",
            "파트너십",
            "시설·자산관리",
            "복리후생 기획·운영",
            "법무·컴플라이언스",
            "벤더·계약관리",
            "안전·보안관리",
            "예산 관리",
            "사내행사 기획",
            "임원 지원",
            "조직 커뮤니케이션",
            "리더십"
        ],
        parents: [
            "operations_manager",
            "business_planning_manager",
            "legal_affairs_manager",
            "node_1755412096552",
            "hrbp"
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
        x: 81.97537070821087,
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
            "facilities_manager",
            "hr_specialist"
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
        x: 64.5,
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
        x: 67.19936908487084,
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
        x: 66.8,
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
        x: 73.2,
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

  const renderBottomPanel = ({ viewMode, targetNode, nodes }) => {
    const getNodeInfo = (nodeId) => {
      const node = nodes[nodeId];
      return node ? `${node.title} (${node.year})` : '';
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