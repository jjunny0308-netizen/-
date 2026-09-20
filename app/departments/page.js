import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";
import { departments } from "../data/departments";

export const metadata = { title: "진료과목 | 강임강정서울치과" };

export default function DepartmentsPage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="page-hero">
        <div className="wrap">
          <div className="dept-tag">진료과목</div>
          <h1>전문 분야별 진료과목</h1>
          <p>교정, 임플란트, 보철과 자연치아 보존, 치주치료 — 각 분야 원장이 담당 진료를 살핍니다.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="service-cards">
            {departments.map((d, i) => (
              <div className="service-card" key={d.slug}>
                <div className="tag">{String(i + 1).padStart(2, "0")}</div>
                <h3>{d.name}</h3>
                <p>{d.shortIntro}</p>
                <a href={`/departments/${d.slug}`} className="link">자세히 보기</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
