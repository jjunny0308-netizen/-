import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="hero">
      <HeroSlider />
      <div className="wrap hero-content">
        <div className="hero-eyebrow">강임강정서울치과 · 교정 · 임플란트 · 보철 · 치주치료</div>
        <h1>
          입안 전체의 건강을 생각하며<br />
          성심을 다해 진료합니다
        </h1>
        <div className="hero-divider"></div>
        <p className="sub">
          자연치아를 지킬 수 있는지, 치아가 편안하게 맞물리는지, 잇몸은 건강한지 함께 살핍니다.
          교정 · 보철 · 치주 각 분야의 원장이 필요한 진료를 연결하고, 환자가 이해할 수 있도록
          설명합니다.
        </p>
        <div className="hero-actions">
          <a href="/departments" className="btn btn-outline-light">진료과목 보기</a>
          <a href="tel:02-413-7527" className="btn btn-gold-outline">전화 문의</a>
        </div>
      </div>
    </section>
  );
}
