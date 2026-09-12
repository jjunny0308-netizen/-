import { departments, getDepartment } from "../../data/departments";
import { getDoctor } from "../../data/doctors";
import Header from "../../components/Header";
import QuickRail from "../../components/QuickRail";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const dept = getDepartment(params.slug);
  if (!dept) return {};
  return { title: `${dept.name} | 강임강정치과의원` };
}

export default function DepartmentPage({ params }) {
  const dept = getDepartment(params.slug);
  if (!dept) return notFound();
  const doctor = getDoctor(dept.doctorSlug);

  return (
    <>
      <Header />
      <QuickRail />
      <section className="dept-detail">
        <div className="wrap">
          <Link href="/" className="back-link">← 홈으로 돌아가기</Link>
          <div className="section-heading" style={{ textAlign: "left", marginBottom: 40 }}>
            <h2>{dept.name}</h2>
            <p>{dept.intro}</p>
          </div>

          <div className="dept-grid">
            <div className="dept-doctor">
              {doctor && (
                <Link href={`/doctors/${doctor.slug}`} className="dept-doctor-card">
                  <div className="dept-doctor-photo">
                    <img src={doctor.photo} alt={doctor.name} />
                  </div>
                  <div className="role">{doctor.role}</div>
                  <h3>{doctor.name}</h3>
                  <span className="text-link">상세 프로필 보기 →</span>
                </Link>
              )}
            </div>

            <div className="dept-treatments">
              <h3>주요 진료 항목</h3>
              <p className="dept-note">※ 실제 제공하는 진료 항목에 맞게 수정해주세요</p>
              <ul>
                {dept.treatments.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href="/#location" className="btn btn-dark">상담 예약 문의</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
