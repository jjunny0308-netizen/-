export default function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <div className="section-heading">
          <h2>[핵심 진료 메시지를 큰 제목으로]</h2>
          <p>[부제 — 방문을 유도하는 한 문장]</p>
        </div>
        <div className="values">
          <div className="value-item">
            <div className="value-photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <h3>[강점 키워드 1]</h3>
            <p>[강점 1에 대한 한두 줄 설명]</p>
          </div>
          <div className="value-item">
            <div className="value-photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>[강점 키워드 2]</h3>
            <p>[강점 2에 대한 한두 줄 설명]</p>
          </div>
          <div className="value-item">
            <div className="value-photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 4v16M4 8h16" />
              </svg>
            </div>
            <h3>[강점 키워드 3]</h3>
            <p>[강점 3에 대한 한두 줄 설명]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
