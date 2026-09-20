import Link from "next/link";

export default function CollabTeaser() {
  return (
    <section id="collaboration" className="collab-teaser">
      <div className="wrap">
        <h2>여러 치료가 필요할 때 함께 계획합니다</h2>
        <p>
          잇몸치료, 교정치료, 보철치료가 함께 필요한 경우 필요한 분야의 원장들이 의견을 나누고,
          입안 전체의 상태를 고려해 치료 순서를 정합니다.
        </p>
        <Link href="/collaboration" className="btn btn-outline-dark">협진 진료 알아보기</Link>
      </div>
    </section>
  );
}
