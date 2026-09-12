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
          </ul>
          <p className="naver-note">
            네이버 지도에서 <strong>&apos;강임강정치과&apos;</strong>를 검색하시면 정확한 위치를
            확인하실 수 있습니다.
          </p>
        </div>
        <div className="map-schematic">
          <div className="map-grid">
            <span className="landmark" style={{ gridArea: "a" }}>[인근 아파트 A]</span>
            <span className="landmark" style={{ gridArea: "b" }}>[인근 지하철역]</span>
            <span className="landmark" style={{ gridArea: "c" }}>[인근 아파트 B]</span>
            <span className="landmark" style={{ gridArea: "d" }}>[인근 상가]</span>
            <div className="map-pin" style={{ gridArea: "pin" }}>
              <span className="pin-dot"></span>
              강임강정치과의원
            </div>
            <span className="landmark" style={{ gridArea: "e" }}>[인근 편의점]</span>
            <span className="landmark" style={{ gridArea: "f" }}>[인근 학교/공원]</span>
          </div>
        </div>
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
