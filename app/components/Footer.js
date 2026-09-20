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
          강임강정서울치과
        </div>
        <div className="footer-detail">
          대표원장 : 강태현, 임웅택, 정현희 &nbsp;대표전화 : 02-413-7527
          <br />
          주소 : 서울 송파구 올림픽로 119 파인애플상가 5층 523호, 524호 &nbsp;사업자등록번호 : [000-00-00000]
        </div>
      </div>
    </footer>
  );
}
