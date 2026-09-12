import { departments } from "../data/departments";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-heading">
          <h2>전문 분야별 진료과목</h2>
          <p>각 분야 전문의가 담당하는 진료과목을 확인해보세요</p>
        </div>
        <div className="service-cards">
          {departments.map((d, i) => (
            <div className="service-card" key={d.slug}>
              <div className="tag">{String(i + 1).padStart(2, "0")}</div>
              <h3>{d.name}</h3>
              <p>{d.intro}</p>
              <a href={`/departments/${d.slug}`} className="link">자세히 보기</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
