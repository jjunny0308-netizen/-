import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = { title: "진료안내 | 강임강정서울치과" };

const hours = [
  { day: "월요일 · 화요일 · 금요일", time: "10:00–19:00", rest: "13:00–14:00" },
  { day: "수요일", time: "정기휴진", rest: "—" },
  { day: "목요일", time: "13:30–21:00", rest: "18:30–19:00" },
  { day: "토요일", time: "09:30–15:00", rest: "13:00–13:30" },
  { day: "일요일", time: "정기휴진", rest: "—" },
];

const reserveInfo = [
  "처음 방문하시는지, 기존에 진료받으셨는지",
  "불편한 부위와 증상이 시작된 시점",
  "검진 · 스케일링 · 교정 · 임플란트 등 상담하고 싶은 내용",
  "현재 붓기 · 출혈 · 심한 통증이 있는지",
  "원하시는 방문 날짜와 시간",
];

const visitSteps = [
  { title: "접수와 문진", body: "방문 목적과 현재 불편한 점, 치료 중인 질환과 복용약 등을 확인합니다. 건강보험 진료를 위한 본인확인이 필요한 경우 신분증 등을 제시해주세요." },
  { title: "필요한 검사와 예진", body: "구강 상태를 직접 확인하고, 진료에 필요한 X-ray 등 검사자료를 준비합니다. 검사의 종류와 순서는 증상과 상담 내용에 따라 달라집니다." },
  { title: "검사 결과와 치료 방향 설명", body: "치아와 잇몸의 상태를 자료와 함께 설명합니다. 어떤 치료가 필요한지, 여러 방법이 있다면 무엇을 고려해 선택하는지 상담합니다." },
  { title: "필요한 진료 또는 다음 일정 안내", body: "현재 상태와 당일 진료 상황에 따라 필요한 처치를 진행하거나 추가 검사 · 치료 일정을 정합니다." },
];

const prepItems = [
  { title: "본인확인 수단", body: "건강보험으로 진료받으실 때는 주민등록증 · 운전면허증 등 인정되는 신분증이나 모바일 건강보험증을 준비해주세요. 사진이나 사본은 전자신분증을 대신할 수 없습니다." },
  { title: "복용약과 건강 상태를 알려주세요", body: "현재 복용하는 약의 처방전이나 약 목록이 있으면 가져와주세요. 혈액 응고에 영향을 주는 약을 복용 중이라면 반드시 말씀해주시고, 치과 진료 때문에 임의로 중단하지 마세요. 당뇨 · 고혈압 등 치료 중인 질환, 알레르기, 임신 또는 임신 가능성도 함께 알려주세요." },
  { title: "이전 검사자료가 있다면 가져오세요", body: "다른 치과의 X-ray나 진료자료가 있다면 진료 시 참고할 수 있습니다. 자료가 없어도 방문하실 수 있습니다." },
  { title: "궁금한 점을 정리해오세요", body: "증상이 언제부터 생겼는지, 어떤 때 불편한지, 치료에서 가장 걱정되는 점을 메모해오시면 상담에 도움이 됩니다." },
];

const faq = [
  { q: "어떤 진료과로 예약해야 할지 모르겠어요.", a: "불편한 부위와 상담하고 싶은 내용을 전화로 말씀해주세요. 먼저 필요한 진료를 안내하고, 여러 분야의 판단이 필요한 경우 해당 원장들과 치료계획을 연결합니다." },
  { q: "처음 방문한 날 바로 치료할 수 있나요?", a: "상태와 당일 일정에 따라 가능한 진료가 달라집니다. 방문 전에 원하시는 진료를 알려주세요." },
  { q: "다른 병원에서 찍은 X-ray가 있으면 다시 촬영하지 않아도 되나요?", a: "기존 자료는 참고할 수 있습니다. 다만 촬영 시점과 범위가 현재 진료에 필요한 정보와 다를 수 있어, 추가 검사 여부는 진찰 후 판단합니다." },
  { q: "통증이 없으면 검진을 미뤄도 되나요?", a: "잇몸질환은 불편함이 적어도 진행될 수 있습니다. 본원은 정기적인 검진을 통해 상태를 살피며, 잇몸치료 후에는 통상 3개월 또는 6개월 간격으로 경과를 확인합니다." },
  { q: "약을 먹고 있는데 치과에 가기 전에 끊어야 하나요?", a: "임의로 끊지 말고 약 이름과 복용 이유를 먼저 알려주세요. 특히 항응고제 · 항혈소판제의 조정은 치과와 처방한 의사가 상의해야 합니다." },
  { q: "보험이 적용되면 비용이 모두 무료인가요?", a: "건강보험이 적용되는 치료도 본인부담금이 발생할 수 있습니다. 비급여 항목과 추가 치료는 별도로 확인해야 합니다." },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="page-hero">
        <div className="wrap">
          <div className="dept-tag">진료안내</div>
          <h1>예약과 첫 방문을 안내합니다</h1>
          <p>
            예약 · 진료 문의: <strong className="phone-inline">02-413-7527</strong>
          </p>
          <p>
            처음 방문하시는 분도 현재 불편한 점과 상담하고 싶은 내용을 편하게 말씀해주세요. 필요한
            검사로 구강 상태를 확인하고, 자료를 함께 보며 치료 방향을 설명합니다.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap dept-main" style={{ maxWidth: 780, margin: "0 auto" }}>
          <div className="dept-block">
            <h2>진료시간</h2>
            <table className="dept-table">
              <thead>
                <tr>
                  <th>요일</th>
                  <th>진료시간</th>
                  <th>휴게시간</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                    <td>{h.rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 12 }}>공휴일이나 진료 일정이 궁금하신 경우 방문 전 전화로 문의해주세요.</p>
          </div>

          <div className="dept-block">
            <h2>예약은 어떻게 하나요?</h2>
            <p>
              전화로 방문 목적과 원하시는 일정을 말씀해주세요. 본원은 예약 진료를 운영하며, 예약
              없이 방문하실 수도 있습니다. 예약 없이 오시는 경우 당일 진료 상황에 따라 대기하거나
              가능한 진료 범위를 먼저 안내받을 수 있습니다.
            </p>
            <p>전화하실 때 다음 내용을 알려주시면 진료 일정을 상담하는 데 도움이 됩니다.</p>
            <ul className="checklist">
              {reserveInfo.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p>예약을 변경해야 하는 경우에도 대표전화로 연락해주세요.</p>
          </div>

          <div className="dept-block">
            <h2>처음 오시면 이렇게 진행합니다</h2>
            <ol className="process-list">
              {visitSteps.map((step, i) => (
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

          <div className="dept-block">
            <h2>방문 전에 준비해주세요</h2>
            {prepItems.map((item) => (
              <div key={item.title} style={{ marginBottom: 18 }}>
                <strong style={{ display: "block", marginBottom: 6 }}>{item.title}</strong>
                <p style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="dept-block">
            <h2>건강보험과 비용 안내</h2>
            <p>
              치료비는 치료 종류와 범위, 사용하는 재료, 건강보험 적용 여부에 따라 달라집니다. 진료
              시 필요한 치료와 비용 범위를 함께 확인해주세요.
            </p>
            <p>
              <strong>스케일링 건강보험</strong> — 만 19세 이상에서 후속 처치 없이 전악 스케일링만으로
              치료가 끝나는 경우 연 1회 건강보험 적용 대상입니다(1월 1일~12월 31일).
            </p>
            <p>
              <strong>임플란트 건강보험</strong> — 일부 치아가 없는 만 65세 이상 환자는 적용 요건을
              충족하는 경우 평생 2개까지 건강보험 임플란트 대상이 될 수 있습니다. 구강 상태와 재료,
              기존 급여 이력 등을 함께 확인해야 합니다.
            </p>
            <p>구체적인 비급여 항목과 금액은 병원으로 문의해주세요.</p>
          </div>

          <div className="dept-block">
            <h2>갑자기 아프거나 보철물이 불편할 때</h2>
            <p>
              갑작스러운 치통이나 붓기, 보철물의 파손 · 탈락 등으로 내원하시는 분도 진료합니다. 전화로
              증상과 발생 시점을 알려주시면 방문 가능 시간을 상담할 수 있습니다.
            </p>
            <p>
              호흡이 어렵게 느껴질 정도로 입 · 목이 심하게 붓거나, 입안의 심한 출혈이 멈추지 않는
              경우에는 응급실 또는 119의 도움을 받으세요.
            </p>
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
            <a href="tel:02-413-7527" className="btn btn-dark">전화로 예약 문의</a>
            <Link href="/location" className="btn btn-outline-dark">오시는 길</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
