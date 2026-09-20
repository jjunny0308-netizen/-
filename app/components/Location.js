import Link from "next/link";

export default function Location() {
  return (
    <section id="location" className="visit-teaser">
      <div className="wrap">
        <h2>방문 전 안내</h2>
        <p>
          진료시간과 오시는 길을 확인하시고, 궁금한 점은 전화로 편하게 문의해주세요.
        </p>
        <div className="page-cta-row">
          <Link href="/guide" className="btn btn-outline-light">첫 방문 안내</Link>
          <Link href="/guide" className="btn btn-outline-light">진료시간 확인</Link>
          <Link href="/location" className="btn btn-gold-outline">오시는 길</Link>
        </div>
      </div>
    </section>
  );
}
