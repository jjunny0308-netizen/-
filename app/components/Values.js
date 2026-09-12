import Link from "next/link";
import { doctors } from "../data/doctors";

export default function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <div className="section-heading">
          <h2>세 명의 전문의가 함께 진료합니다</h2>
          <p>각자의 전문 분야에서 쌓아온 경험을 협진으로 연결합니다</p>
        </div>
        <div className="values">
          {doctors.map((d) => (
            <Link key={d.slug} href={`/doctors/${d.slug}`} className="value-item">
              <div className="value-photo">
                <img src={d.photo} alt={d.name} className="doctor-photo-circle" />
              </div>
              <div className="role">{d.role}</div>
              <h3>{d.name}</h3>
              <ul className="credentials">
                {d.credentials.slice(0, 4).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <span className="text-link">상세 프로필 보기 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
