import "./globals.css";

export const metadata = {
  title: "OO치과의원",
  description: "[병원 소개 문구를 여기에 작성하세요]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
