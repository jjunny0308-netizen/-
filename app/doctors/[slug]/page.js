import { doctors, getDoctor } from "../../data/doctors";
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
  return { title: `${doctor.name} | 강임강정치과의원` };
}

export default function DoctorDetailPage({ params }) {
  const doctor = getDoctor(params.slug);
  if (!doctor) return notFound();

  return (
    <>
      <Header />
      <QuickRail />
      <section className="doctor-detail">
        <div className="wrap">
          <Link href="/#values" className="back-link">← 의료진 소개로 돌아가기</Link>
          <div className="doctor-detail-grid">
            <div className="doctor-detail-photo">
              <img src={doctor.photo} alt={doctor.name} />
            </div>
            <div className="doctor-detail-info">
              <div className="role">{doctor.role}</div>
              <h1>{doctor.name}</h1>
              <ul className="credentials-full">
                {doctor.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a href="#location" className="btn btn-dark">상담 예약 문의</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
