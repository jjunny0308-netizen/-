import Header from "../components/Header";
import QuickRail from "../components/QuickRail";
import Footer from "../components/Footer";

export const metadata = { title: "오시는 길 | 강임강정서울치과" };

const hours = [
  { day: "월 · 화 · 금", time: "10:00–19:00", rest: "13:00–14:00 휴게시간" },
  { day: "수", time: "정기휴진", rest: "" },
  { day: "목", time: "13:30–21:00", rest: "18:30–19:00 휴게시간" },
  { day: "토", time: "09:30–15:00", rest: "13:00–13:30 휴게시간" },
  { day: "일", time: "정기휴진", rest: "" },
];

export default function LocationPage() {
  return (
    <>
      <Header />
      <QuickRail />

      <section className="location">
        <div className="wrap">
          <div className="location-info">
            <h2>오시는 길</h2>
            <ul className="loc-list">
              <li><span className="k">상호</span><span>강임강정서울치과</span></li>
              <li><span className="k">주소</span><span>서울 송파구 올림픽로 119 파인애플상가 5층 523호 · 524호</span></li>
              <li><span className="k">지하철</span><span>2호선 잠실새내역 인근</span></li>
              <li><span className="k">대표전화</span><span>02-413-7527</span></li>
            </ul>
            <p className="naver-note">
              차량으로 방문하시는 경우 상가 주차장을 이용하실 수 있습니다. 주차 이용 안내는 방문 전
              전화로 문의해주세요.
            </p>
          </div>
          <div className="map-box">지도 영역 (네이버/카카오 지도 API 연동 예정)</div>
        </div>

        <div className="hours-card wrap">
          <div className="hours-card-inner">
            <div className="hours-call">
              <span>전화문의 및 상담</span>
              <strong>02-413-7527</strong>
            </div>
            <div className="hours-body">
              <div className="hours-title">진료시간</div>
              <table className="hours-table-v2">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <td>{h.day}</td>
                      <td>
                        {h.time}
                        {h.rest && <span className="break">{h.rest}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="hours-footer">수요일 · 일요일 정기휴진 — 진료 일정은 전화로 문의하실 수 있습니다</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
