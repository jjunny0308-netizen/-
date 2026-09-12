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
          <div className="quad quad-info">
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.4 6.8L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.6-.2Z" />
              </svg>
              <p>25년간 이어온<br />세 원장의 협진 시스템</p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
              <p>분야별 전문의의<br />독립적인 전문성</p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <p>기능·건강·심미의<br />조화를 고려한 진단</p>
            </div>
            <div className="quad-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16" />
              </svg>
              <p>교합·턱관절까지 보는<br />전체적인 진료 철학</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
