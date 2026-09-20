import Link from "next/link";
import { doctors } from "../data/doctors";

export default function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <div className="section-heading">
          <h2>각자의 분야에서 진료합니다</h2>
          <p>교정 · 보철 · 치주 각 분야의 원장이 필요한 진료를 연결합니다</p>
        </div>
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
  );
}
