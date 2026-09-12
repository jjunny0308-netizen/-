export default function Location() {
  return (
    <section id="location" className="location">
      <div className="wrap">
        <div className="location-info">
          <h2>오시는 길</h2>
          <ul className="loc-list">
            <li><span className="k">상호</span><span>[OO치과의원]</span></li>
            <li><span className="k">주소</span><span>[OO시 OO구 OO로 00, 0층]</span></li>
            <li><span className="k">지하철</span><span>[0호선 OO역 0번출구, 00m이내]</span></li>
            <li><span className="k">대표번호</span><span>[000-0000-0000]</span></li>
            <li><span className="k">휴진</span><span>[휴진 요일 안내]</span></li>
          </ul>
        </div>
        <div className="map-box">지도 영역 (네이버/카카오 지도 API 연동 예정)</div>
      </div>
    </section>
  );
}
