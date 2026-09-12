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
          <li><a href="/#about">병원소개</a></li>
          <li><a href="/#values">의료진소개</a></li>
          <li><a href="/departments/orthodontics">교정과</a></li>
          <li><a href="/departments/prosthodontics">보철·임플란트</a></li>
          <li><a href="/departments/periodontics">치주과</a></li>
          <li><a href="/#location">오시는길</a></li>
        </ul>
      </nav>
    </>
  );
}
