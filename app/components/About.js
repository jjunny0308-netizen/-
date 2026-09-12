export default function About() {
  return (
    <section id="about" className="intro-split">
      <div className="wrap">
        <div className="section-heading">
          <h2>25년, 세 원장이 함께 지켜온 진료</h2>
          <p>강임강정 서울치과 소개</p>
        </div>
        <div className="about-intro">
          <p>25년 동안, 세 명의 원장이 한자리에서 함께 진료해 왔습니다.</p>
          <p>
            세 원장 모두 치과 교합학의 대가 마사키 혼다 선생님의 제자로, 치아 하나만이 아닌
            교합과 턱관절, 구강 전체의 조화를 생각하는 진료 철학을 공유하고 있습니다. 동시에
            교정, 보철, 치주 등 각자의 분야에서 전문성과 경험을 쌓아왔습니다.
          </p>
          <p>
            서로 다른 전문 분야를 하나로 연결하는 협진은 지난 25년간 저희가 지켜온 진료의
            중심입니다. 필요한 경우 세 원장이 한 환자를 함께 고민하고 의견을 나누며, 기능과
            건강, 심미가 조화를 이루는 치료 방향을 찾아갑니다.
          </p>
          <p>
            치과 의료의 기술은 끊임없이 변해왔지만, 환자를 중심에 두고 오래도록 건강하게
            자신의 치아를 사용할 수 있도록 돕겠다는 마음은 변하지 않았습니다.
          </p>
          <p className="emphasis">
            25년의 경험, 세 원장의 전문성, 그리고 하나의 진료 철학.<br />
            앞으로도 처음의 마음으로 환자와 함께하겠습니다.
          </p>
        </div>
        <div className="split-grid">
          <div className="split-photo">
            <svg viewBox="0 0 100 100" fill="none" stroke="var(--ink-soft)" strokeWidth="1">
              <rect x="10" y="10" width="80" height="80" />
              <path d="M10 60 L35 40 L55 55 L90 25" />
            </svg>
            <span>[병원 내부/외관 사진 삽입 예정]</span>
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
