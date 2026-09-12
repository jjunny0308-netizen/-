export const departments = [
  {
    slug: "orthodontics",
    name: "교정과",
    doctorSlug: "lim-woongtaek",
    intro:
      "치아뿐 아니라 얼굴 전체의 균형과 저작 기능을 함께 고려한 교정 진료를 진행합니다.",
    treatments: [
      "메탈 · 세라믹 브라켓 교정",
      "투명교정",
      "설측(치아 안쪽) 교정",
      "부분교정",
      "턱관절 · 교합을 고려한 교정 설계",
    ],
  },
  {
    slug: "prosthodontics",
    name: "보철 · 임플란트과",
    doctorSlug: "kang-taehyun",
    intro:
      "기능과 심미, 오래 사용할 수 있는 내구성을 함께 고려한 보철 · 임플란트 치료를 진행합니다.",
    treatments: [
      "임플란트",
      "크라운 · 브릿지",
      "심미보철 · 라미네이트",
      "부분 · 완전틀니",
      "구강악안면 임플란트 협진",
    ],
  },
  {
    slug: "periodontics",
    name: "치주과",
    doctorSlug: "jung-hyunhee",
    intro:
      "잇몸과 뼈 등 치아를 둘러싼 조직 전체를 관리해 치아를 오래 건강하게 유지하도록 돕습니다.",
    treatments: [
      "스케일링 · 정기 검진",
      "치주소파술(잇몸치료)",
      "잇몸 이식술",
      "임플란트 주위염 관리",
      "치아미백",
    ],
  },
];

export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug);
}
