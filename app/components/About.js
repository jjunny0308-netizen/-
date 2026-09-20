import Link from "next/link";

const principles = [
  {
    title: "자연치아를 지킬 가능성부터 살핍니다",
    body: "치아를 뽑기 전에 보존할 수 있는지 먼저 검토합니다. 치아와 잇몸의 상태, 치료 후 유지 가능성을 살펴 치료 방향을 정합니다.",
  },
  {
    title: "치아가 함께 기능하는 모습을 봅니다",
    body: "치아의 모양과 배열에 더해 위아래 치아가 어떻게 맞물리는지 확인합니다. 입안 전체의 균형을 고려해 치료를 계획합니다.",
  },
  {
    title: "이해할 수 있도록 충분히 설명합니다",
    body: "현재 상태와 가능한 치료 방법을 알기 쉽게 설명합니다. 환자가 치료 내용을 이해하고 납득할 수 있도록 대화합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="intro-split">
      <div className="wrap">
        <div className="section-heading">
          <h2>우리가 중요하게 생각하는 진료</h2>
          <p>자연치아를 지킬 가능성부터 살피는 강임강정서울치과의 진료 원칙입니다</p>
        </div>

        <div className="principle-grid">
          {principles.map((p) => (
            <div className="principle-item" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="about-more">
          <Link href="/about" className="text-link">병원의 진료철학 보기 →</Link>
        </div>
      </div>
    </section>
  );
}
