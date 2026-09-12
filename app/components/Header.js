export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="tel">
            대표전화
            <strong>02-413-7527</strong>
          </div>
          <div className="logo-mark">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="24" height="24" stroke="var(--ink)" strokeWidth="1.6" />
              <path d="M20 14v12M14 20h12" stroke="var(--ink)" strokeWidth="1.6" />
            </svg>
            <span>강임강정치과의원</span>
          </div>
          <div className="top-actions">
            <span className="login">로그인</span>
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5A8.5 8.5 0 1 1 21 11.5Z" />
              </svg>
            </span>
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" rx="3" />
              </svg>
            </span>
            <span className="icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>

      <nav className="main">
        <ul>
          <li><a href="#about">병원소개</a></li>
          <li><a href="#values">의료진소개</a></li>
          <li><a href="#services">교정과</a></li>
          <li><a href="#services">보철·임플란트</a></li>
          <li><a href="#services">치주과</a></li>
          <li><a href="#location">오시는길</a></li>
        </ul>
      </nav>
    </>
  );
}
