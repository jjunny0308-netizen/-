export default function Location() {
  return (
    <section id="location" className="location">
      <div className="wrap">
        <div className="location-info">
          <h2>오시는 길</h2>
          <ul className="loc-list">
            <li><span className="k">상호</span><span>강임강정치과의원</span></li>
            <li><span className="k">주소</span><span>[OO시 OO구 OO로 00, 0층]</span></li>
            <li><span className="k">지하철</span><span>[0호선 OO역 0번출구, 00m이내]</span></li>
            <li><span className="k">대표번호</span><span>02-413-7527</span></li>
            <li><span className="k">정기휴무</span><span>매주 수요일 · 매주 일요일</span></li>
          </ul>

          <table className="hours-table">
            <tbody>
              <tr>
                <td>월</td>
                <td>10:00 - 19:00<span className="break">13:00 - 14:00 휴게시간</span></td>
              </tr>
              <tr>
                <td>화</td>
                <td>10:00 - 19:00<span className="break">13:00 - 14:00 휴게시간</span></td>
              </tr>
              <tr>
                <td>수</td>
                <td>정기휴무</td>
              </tr>
              <tr>
                <td>목</td>
                <td>13:30 - 21:00<span className="break">18:30 - 19:00 휴게시간</span></td>
              </tr>
              <tr>
                <td>금</td>
                <td>10:00 - 19:00<span className="break">13:00 - 14:00 휴게시간</span></td>
              </tr>
              <tr>
                <td>토</td>
                <td>09:30 - 15:00<span className="break">13:00 - 13:30 휴게시간</span></td>
              </tr>
              <tr>
                <td>일</td>
                <td>정기휴무</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="map-box">지도 영역 (네이버/카카오 지도 API 연동 예정)</div>
      </div>
    </section>
  );
}
