import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "병원소개 | 강임강정서울치과" };

const history = [
  { year: "2002년", desc: "개원" },
  { year: "2008년", desc: "현재 위치로 이전" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="page-hero">
        <div className="wrap">
          <div className="dept-tag">병원소개</div>
          <h1>성심을 다하는 진료</h1>
          <p>
            강임강정서울치과는 환자를 가족처럼 아끼는 마음으로 진료하고자 합니다. 자연치아를 지킬
            가능성을 먼저 살피고, 정교한 치료와 입안 전체의 건강을 중요하게 생각합니다.
          </p>
          <p>
            치료 방법이 여러 가지라면 현재 상태와 선택할 수 있는 방법을 충분히 설명합니다. 환자가
            치료 내용을 이해하고 납득한 뒤 진료를 진행하는 것을 원칙으로 삼습니다.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap dept-main" style={{ maxWidth: 780, margin: "0 auto" }}>
          <div className="dept-block">
            <h2>구강 전체의 균형을 살피는 이유</h2>
            <p>
              교합은 위아래 치아가 맞물리는 관계를 뜻합니다. 본원은 치아의 모양과 배열, 잇몸 상태와
              함께 이러한 맞물림을 살펴 치료계획을 세웁니다.
            </p>
            <p>
              여러 분야의 치료가 필요한 경우에는 교정·보철·치주 담당 원장이 의견을 나눕니다. 각
              분야의 치료가 전체 계획 안에서 이어질 수 있도록 합니다.
            </p>
            <Link href="/collaboration" className="text-link">협진 진료 보기 →</Link>
          </div>

          <div className="dept-block">
            <h2>우리가 이어가는 가르침</h2>
            <p>
              혼다 마사아키 선생님의 가르침에서 중요하게 생각하는 것은 성심을 다하는 자세와 구강
              전체를 살피는 관점입니다. 이러한 생각을 환자에 대한 충분한 설명, 정교한 치료, 전체적인
              균형을 고려하는 진료로 이어가고자 합니다.
            </p>
          </div>

          <div className="dept-block">
            <h2>병원 연혁</h2>
            <table className="dept-table">
              <tbody>
                {history.map((h) => (
                  <tr key={h.year}>
                    <td style={{ width: 110, fontWeight: 700, color: "var(--gold)" }}>{h.year}</td>
                    <td>{h.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dept-block">
            <h2>검사와 진료를 위한 장비</h2>
            <p>
              본원에서는 파노라마, CT, 세팔로 촬영 장비와 구강스캐너를 사용하고 있습니다. 현미경을
              활용한 진료도 시행합니다. 필요한 검사와 장비는 진료 목적에 따라 선택합니다.
            </p>
          </div>

          <div className="dept-block">
            <h2>공간과 위생관리</h2>
            <p>
              본원은 진료기구를 관리하는 멸균 공간을 갖추고 있으며, 진료실 수관관리 시스템을 사용하고
              있습니다.
            </p>
          </div>

          <div className="page-cta-row">
            <Link href="/doctors" className="btn btn-outline-dark">의료진 소개</Link>
            <Link href="/guide" className="btn btn-dark">진료안내</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
