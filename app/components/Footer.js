export default function Footer() {
  return (
    <footer className="site">
      <div className="footer-links">
        <a href="#">회사소개</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">이용약관</a>
      </div>
      <div className="wrap footer-bottom">
        <div className="footer-logo">
          <svg viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="24" height="24" stroke="var(--white)" strokeWidth="1.4" />
            <path d="M20 14v12M14 20h12" stroke="var(--white)" strokeWidth="1.4" />
          </svg>
          OO치과의원
        </div>
        <div className="footer-detail">
          대표자 : [원장명] &nbsp;주소 : [OO시 OO구 OO로 00]
          <br />
          사업자등록번호 : [000-00-00000]
        </div>
      </div>
    </footer>
  );
}
