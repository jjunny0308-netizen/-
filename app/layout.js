import "./globals.css";

export const metadata = {
  title: "강임강정서울치과",
  description: "강임강정서울치과 — 교정 · 임플란트 · 보철 · 치주치료, 전문화된 의료진의 진료",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
