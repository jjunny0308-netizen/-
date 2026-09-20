import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "협진 진료 | 강임강정서울치과" };

const situations = [
  {
    title: "교정과 임플란트가 함께 필요한 경우",
    body: [
      "임플란트와 보철이 놓일 위치를 고려하려면 먼저 치아의 배열이나 공간을 조정해야 하는 경우가 있습니다. 이런 경우 교정과 보철 담당 원장이 필요한 치아 이동과 치료 순서를 검토합니다.",
      "상태에 따라 교정치료를 먼저 진행한 뒤 임플란트와 보철치료를 이어가는 계획을 세울 수 있습니다.",
    ],
  },
  {
    title: "잇몸치료와 보철치료가 함께 필요한 경우",
    body: [
      "치아를 지지하는 잇몸과 뼈의 상태를 확인하고, 염증에 대한 치료가 필요한지 살핍니다. 자연치아의 보존 가능성과 보철치료의 방향을 함께 검토합니다.",
      "치아의 배열이나 맞물림도 조정해야 한다면 교정 담당 원장과 의견을 나눕니다.",
    ],
  },
  {
    title: "구강 전체의 맞물림을 다시 살펴야 하는 경우",
    body: [
      "여러 치아에 치료가 필요하거나 기존의 맞물림이 무너진 경우에는 전체적인 계획이 중요합니다. 잇몸 상태, 치아의 위치, 보철치료가 필요한 부위를 함께 살펴 각 분야의 역할을 정합니다.",
    ],
  },
];

const steps = [
  { title: "현재 상태 확인", body: "불편한 점과 현재 상태를 확인합니다." },
  { title: "치료 방향 결정", body: "필요한 검사와 각 분야의 의견을 바탕으로 치료 방향을 정합니다." },
  { title: "치료 순서 설명", body: "우선 해결할 문제와 치료 순서를 설명합니다." },
  { title: "치료 진행과 관리 안내", body: "필요한 분야의 치료를 진행하고 치료 후 관리 계획을 안내합니다." },
];

const faq = [
  { q: "모든 환자가 세 원장님께 진료받나요?", a: "환자에게 필요한 진료에 따라 담당 분야가 정해집니다. 여러 분야의 판단이 필요한 경우 원장들이 의견을 나누고 진료를 연결합니다." },
  { q: "협진을 받으면 치료가 더 빨리 끝나나요?", a: "협진은 필요한 치료와 순서를 함께 검토하기 위한 과정입니다. 치료기간은 환자의 상태와 계획에 따라 달라집니다." },
];

export default function CollaborationPage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="page-hero">
        <div className="wrap">
          <div className="dept-tag">협진 진료</div>
          <h1>여러 치료가 필요할 때 함께 계획합니다</h1>
          <p>
            한 사람에게 잇몸치료, 교정치료, 보철치료가 함께 필요한 경우가 있습니다. 강임강정서울치과는
            필요한 분야의 원장들이 의견을 나누고, 입안 전체의 상태를 고려해 치료 순서를 정합니다.
          </p>
          <p>협진에 참여하는 분야는 환자의 상태에 따라 달라집니다. 진단 후 어떤 치료가 필요한지, 어떤 순서로 진행하는지 설명해드립니다.</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap dept-main" style={{ maxWidth: 780, margin: "0 auto" }}>
          {situations.map((s, i) => (
            <div className="dept-block" key={i}>
              <h2>{s.title}</h2>
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}

          <div className="dept-block">
            <h2>치료계획을 연결하는 과정</h2>
            <ol className="process-list">
              {steps.map((step, i) => (
                <li key={i}>
                  <span className="process-num">{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={{ marginTop: 8 }}>구체적인 치료 순서와 참여 분야는 검사 결과에 따라 달라집니다.</p>
          </div>

          <div className="dept-block">
            <h2>자주 묻는 질문</h2>
            <div className="faq-list">
              {faq.map((item, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-q">{item.q}</div>
                  <div className="faq-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-cta-row">
            <Link href="/doctors" className="btn btn-outline-dark">의료진 소개</Link>
            <Link href="/guide" className="btn btn-dark">전화 문의</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
