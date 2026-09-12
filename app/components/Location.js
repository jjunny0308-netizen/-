export default function Location() {
  return (
    <section id="location" className="location">
      <div className="wrap">
        <div className="location-info">
          <h2>오시는 길</h2>
          <ul className="loc-list">
            <li><span className="k">상호</span><span>강임강정서울치과</span></li>
            <li><span className="k">주소</span><span>서울 송파구 올림픽로 119 파인애플상가 5층 523호, 524호</span></li>
            <li><span className="k">지하철</span><span>2호선 잠실새내역 6번출구에서 199m</span></li>
          </ul>
          <p className="naver-note">
            잠실새내역 5번 출구로 나오시면 보이는 파인애플상가 5층입니다.
            <br />
            주차를 원하시는 고객님들께서는 상가 주차장을 무료로 이용하시기 바랍니다.
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
                <tr>
                  <td>월 · 화 · 금</td>
                  <td>am 10:00 - pm 07:00<span className="break">(pm 01:00 - 02:00 휴게시간)</span></td>
                </tr>
                <tr>
                  <td>수요일</td>
                  <td>정기휴무</td>
                </tr>
                <tr>
                  <td>목요일</td>
                  <td>pm 01:30 - pm 09:00<span className="break">(pm 06:30 - 07:00 휴게시간)</span></td>
                </tr>
                <tr>
                  <td>토요일</td>
                  <td>am 09:30 - pm 03:00<span className="break">(pm 01:00 - 01:30 휴게시간)</span></td>
                </tr>
                <tr>
                  <td>일요일</td>
                  <td>정기휴무</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="hours-footer">수요일 · 일요일 정기휴진</div>
        </div>
      </div>
    </section>
  );
}
