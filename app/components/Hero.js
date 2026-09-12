import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="hero">
      <HeroSlider />
      <div className="wrap hero-content">
        <div className="hero-eyebrow">강임강정 서울치과 · 교정과 · 치주과 · 보철/임플란트</div>
        <h1>
          전문화된 의료진에 의한<br />
          전문분야별 진료
        </h1>
        <div className="hero-divider"></div>
        <p className="sub">강임강정 서울치과는 전문화된 의료진에 의한 전문분야별 진료를 실시합니다.</p>
        <a href="#about" className="btn btn-outline-light">
          자세히보기 +
        </a>
      </div>
    </section>
  );
}
