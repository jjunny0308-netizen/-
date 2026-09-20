import { doctors, getDoctor } from "../../data/doctors";
import { departments } from "../../data/departments";
import Header from "../../components/Header";
import QuickRail from "../../components/QuickRail";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const doctor = getDoctor(params.slug);
  if (!doctor) return {};
  return { title: `${doctor.name} | 강임강정서울치과` };
}

export default function DoctorDetailPage({ params }) {
  const doctor = getDoctor(params.slug);
  if (!doctor) return notFound();
  const related = (doctor.relatedDepartments || [])
    .map((slug) => departments.find((d) => d.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Header />
      <QuickRail />
      <section className="doctor-detail">
        <div className="wrap">
          <Link href="/doctors" className="back-link">← 의료진 소개로 돌아가기</Link>
          <div className="doctor-detail-grid">
            <div className="doctor-detail-photo">
              <img src={doctor.photo} alt={doctor.name} />
            </div>
            <div className="doctor-detail-info">
              <div className="role">담당 분야: {doctor.role}</div>
              <h1>{doctor.name}</h1>
              {doctor.tagline && <p className="doctor-tagline-lg">{doctor.tagline}</p>}

              {doctor.bio?.map((p, i) => (
                <p key={i} className="doctor-bio-p">{p}</p>
              ))}

              {doctor.treatments && (
                <div className="doctor-treatments">
                  <h3>주요 진료</h3>
                  <ul>
                    {doctor.treatments.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              <h3 style={{ marginTop: 28, marginBottom: 12, fontSize: 17 }}>학력 · 경력</h3>
              <ul className="credentials-full">
                {doctor.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              <div className="page-cta-row" style={{ justifyContent: "flex-start" }}>
                {related.map((dept) => (
                  <Link key={dept.slug} href={`/departments/${dept.slug}`} className="btn btn-outline-dark">
                    {dept.name} 진료 보기
                  </Link>
                ))}
                <a href="/guide" className="btn btn-dark">상담 예약 문의</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
