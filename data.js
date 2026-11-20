/* ============================================================
   ✏️ 여기만 수정하면 됩니다!  (GitHub에서 연필 아이콘 → 수정 → Commit)
   - 항목을 지우고 싶으면 해당 줄(또는 블록)을 삭제하세요.
   - 섹션 전체가 비어 있으면([]) 화면에서 자동으로 숨겨집니다.
   - 이미지는 assets/ 폴더에 올린 뒤 "assets/파일명.png" 로 적으면 됩니다.
   ============================================================ */
window.PORTFOLIO = {
  site: {
    title: "이름's portfolio",      // 브라우저 탭 제목 & 상단 로고 옆 텍스트
    emoji: "👋",                    // 탭 아이콘 & 로고 옆 이모지
    footer: "Copyright © 2026 이름"
  },

  profile: {
    name: "홍길동 (Gildong Hong)",
    role: "직무 / 한 줄 직함",
    tagline: "나를 한 문장으로 소개해 주세요.",
    location: "Seoul, Korea",
    email: "email@example.com",
    // url을 비우면("") 해당 버튼은 숨겨집니다. 버튼을 더 추가해도 됩니다.
    links: [
      { label: "GitHub",   url: "https://github.com/your-id" },
      { label: "LinkedIn", url: "" },
      { label: "Blog",     url: "" }
    ]
  },

  // 문단은 배열 항목 하나가 한 단락입니다.
  about: [
    "첫 번째 단락: 어떤 일에 관심이 있고, 어떤 문제를 풀어왔는지 적어보세요.",
    "두 번째 단락: 앞으로 하고 싶은 일, 지향하는 방향을 적어보세요."
  ],

  // 그룹을 자유롭게 추가/삭제하세요.
  skills: [
    { group: "Language",  items: ["Python", "JavaScript"] },
    { group: "Data",      items: ["SQL", "Pandas"] },
    { group: "Tooling",   items: ["Git", "Docker"] }
  ],

  // Education / Certifications / Experience / Awards 카드 (2열 배치)
  // title: 카드 제목, entries: 항목들. period·sub·note 는 없으면 지워도 됩니다.
  cards: [
    {
      title: "Education",
      entries: [
        { name: "OO대학교", period: "2020–2024", sub: "OO학과 / 학사" }
      ]
    },
    {
      title: "Certifications",
      entries: [
        { name: "자격증 이름", org: "발급기관", period: "2024.01.01", note: "자격번호 등 메모" }
      ]
    },
    {
      title: "Experience",
      entries: [
        { name: "직책", org: "회사/기관명", period: "2023–2024", sub: "한 줄 설명" }
      ]
    },
    {
      title: "Awards",
      entries: [
        { name: "수상 이름", org: "주최기관", period: "2024", note: "부문 / 등급" }
      ]
    }
  ],

  // 논문·글. 없으면 papers: [] 로 두세요.
  papers: [
    {
      title: "논문 제목",
      year: "2025",
      meta: "저자 역할 · 학술지명 권(호), 페이지 · DOI",
      summary: "연구 내용을 2~3문장으로 요약해 주세요.",
      url: ""   // 링크가 있으면 제목에 걸립니다.
    }
  ],

  // 프로젝트는 그룹으로 나뉩니다. (예: 팀/연구실 프로젝트, 개인 프로젝트)
  projects: [
    {
      group: "팀 프로젝트",
      items: [
        {
          name: "프로젝트 이름",
          period: "2024",
          role: "내가 맡은 역할",
          summary: "프로젝트가 무엇이고, 내가 무엇을 했는지 2~4문장으로 적어보세요.",
          tags: ["Python", "FastAPI"],
          images: [],          // 예: ["assets/proj1-1.png", "assets/proj1-2.png"]  → 슬라이드로 표시
          caption: "",         // 이미지 아래 설명(선택)
          url: ""              // 링크(선택) → 프로젝트 이름에 걸립니다.
        }
      ]
    },
    {
      group: "개인 프로젝트",
      items: [
        {
          name: "개인 프로젝트 이름",
          period: "2025",
          role: "기획·설계·구현",
          summary: "무엇을 만들었는지 적어보세요.",
          tags: ["React"],
          images: [],
          caption: "",
          url: ""
        }
      ]
    }
  ]
};
