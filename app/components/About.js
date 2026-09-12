export default function About() {
  return (
    <section id="about" className="intro-split">
      <div className="wrap">
        <div className="section-heading">
          <h2>[병원 소개 섹션 제목]</h2>
          <p>[소개 부제 한 문장]</p>
        </div>
        <div className="split-grid">
          <div className="split-photo">
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--ink-soft)" strokeWidth="1">
              <rect x="10" y="10" width="80" height="80" />
              <path d="M10 60 L35 40 L55 55 L90 25" />
            </svg>
          </div>
          <div className="quad">
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16v12H8l-4 4Z" />
              </svg>
              <p>
                [병원 소식/블로그
                <br />
                안내 문구]
              </p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M3 9h18M8 3v4M16 3v4" />
              </svg>
              <p>
                [온라인 예약
                <br />
                안내 문구]
              </p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <p>
                [실시간 채팅상담
                <br />
                안내 문구]
              </p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.4 6.8L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.6-.2Z" />
              </svg>
              <p>
                [진료 후기/평점
                <br />
                안내 문구]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
