export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-eyebrow">[병원 진료 철학을 한 줄로]</div>
        <h1>
          [병원 이름 /<br />
          핵심 슬로건]
        </h1>
        <div className="hero-divider"></div>
        <p className="sub">[지역명] [진료 전문분야] 전문의 진료 · [병원 이름]</p>
        <a href="#about" className="btn btn-outline-light">
          자세히보기 +
        </a>
      </div>
    </section>
  );
}
