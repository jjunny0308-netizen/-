export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-heading">
          <h2>[진료과목 미리보기 제목]</h2>
          <p>[진료과목 부제 한 문장]</p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="tag">[분류 A]</div>
            <h3>[진료과목 A 이름]</h3>
            <p>[진료과목 A 소개 문장]</p>
            <a href="#" className="link">자세히 보기</a>
          </div>
          <div className="service-card">
            <div className="tag">[분류 B]</div>
            <h3>[진료과목 B 이름]</h3>
            <p>[진료과목 B 소개 문장]</p>
            <a href="#" className="link">자세히 보기</a>
          </div>
          <div className="service-card">
            <div className="tag">[분류 C]</div>
            <h3>[진료과목 C 이름]</h3>
            <p>[진료과목 C 소개 문장]</p>
            <a href="#" className="link">자세히 보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
