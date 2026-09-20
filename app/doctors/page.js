import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";
import Link from "next/link";
import { doctors } from "../data/doctors";

export const metadata = { title: "의료진 | 강임강정서울치과" };

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="page-hero">
        <div className="wrap">
          <div className="dept-tag">의료진</div>
          <h1>각자의 분야에서 한 사람의 구강 건강을 살핍니다</h1>
          <p>
            교정·보철·치주 각 분야의 원장이 진료합니다. 복합적인 치료가 필요한 경우에는 서로의
            의견을 나누고, 환자에게 필요한 치료를 연결합니다.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <div className="values">
            {doctors.map((d) => (
              <Link key={d.slug} href={`/doctors/${d.slug}`} className="value-item">
                <div className="value-photo">
                  <img src={d.photo} alt={d.name} className="doctor-photo-circle" />
                </div>
                <div className="role">{d.role}</div>
                <h3>{d.name}</h3>
                <p className="doctor-tagline">{d.tagline}</p>
                <span className="text-link">상세 프로필 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
