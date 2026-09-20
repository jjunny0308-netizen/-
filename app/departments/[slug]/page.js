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
  return { title: `${dept.name} | 강임강정서울치과` };
}

export default function DepartmentPage({ params }) {
  const dept = getDepartment(params.slug);
  if (!dept) return notFound();
  const doctor = getDoctor(dept.doctorSlug);

  return (
    <>
      <Header />
      <QuickRail />

      <section className="dept-hero">
        <div className="wrap">
          <Link href="/" className="back-link">← 홈으로 돌아가기</Link>
          <div className="dept-tag">진료과목 · {dept.name}</div>
          <h1>{dept.hero.title}</h1>
          {dept.hero.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="dept-body">
        <div className="wrap dept-layout">
          <div className="dept-main">
            <div className="dept-block">
              <h2>{dept.checklistTitle}</h2>
              <ul className="checklist">
                {dept.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            {dept.table && (
              <div className="dept-block">
                <h2>{dept.table.title}</h2>
                <div className="dept-table-wrap">
                  <table className="dept-table">
                    <thead>
                      <tr>
                        {dept.table.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dept.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="dept-block">
              <h2>치료는 이렇게 진행됩니다</h2>
              <ol className="process-list">
                {dept.process.map((step, i) => (
                  <li key={i}>
                    <span className="process-num">{i + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {dept.extra?.map((block, i) => (
              <div className="dept-block" key={i}>
                <h2>{block.heading}</h2>
                {block.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}

            {dept.faq && (
              <div className="dept-block">
                <h2>자주 묻는 질문</h2>
                <div className="faq-list">
                  {dept.faq.map((item, i) => (
                    <div className="faq-item" key={i}>
                      <div className="faq-q">{item.q}</div>
                      <div className="faq-a">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="dept-side">
            {doctor && (
              <Link href={`/doctors/${doctor.slug}`} className="dept-doctor-card">
                <div className="dept-doctor-photo">
                  <img src={doctor.photo} alt={doctor.name} />
                </div>
                <div className="role">담당 의료진</div>
                <h3>{doctor.name} · {doctor.role}</h3>
                <span className="text-link">상세 프로필 보기 →</span>
              </Link>
            )}

            <div className="dept-treatments-card">
              <h3>주요 진료</h3>
              <ul>
                {dept.treatments.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <a href="/guide" className="btn btn-dark dept-cta">상담 예약 문의</a>
            <Link href="/collaboration" className="text-link dept-cta-link">여러 치료가 함께 필요하다면 — 협진 진료 보기</Link>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}
