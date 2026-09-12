# OO치과의원 홈페이지 (디자인 초안 → Next.js)

디자인 초안을 Next.js 14(App Router) 프로젝트로 옮긴 버전입니다.
텍스트는 전부 `[ ]` 자리표시자로 채워져 있으니, 실제 정보로 교체한 뒤 배포하세요.

## 1. 로컬에서 실행해보기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 2. 내용 채우기

- `app/components/Header.js` — 전화번호, 병원명, 메뉴명
- `app/components/Hero.js` — 슬로건, 소개 문구
- `app/components/Values.js` — 핵심 강점 3가지
- `app/components/About.js` — 병원 소개, 퀵링크 문구
- `app/components/Services.js` — 진료과목 3가지
- `app/components/Location.js` — 주소, 전화번호, 진료시간 (실제 지도 API는 별도 연동 필요)
- `app/components/Footer.js` — 사업자 정보
- `app/layout.js` — 페이지 제목(title), 설명(description)

## 3. GitHub에 올리기

```bash
git init
git add .
git commit -m "초기 커밋: 홈페이지 초안"
git branch -M main
git remote add origin [본인 GitHub 저장소 주소]
git push -u origin main
```

## 4. Vercel로 배포하기

1. https://vercel.com 에서 GitHub 계정으로 로그인
2. "Add New Project" → 방금 만든 저장소 선택
3. 별도 설정 없이 "Deploy" 클릭 (Next.js는 자동 인식됨)
4. 배포 완료 후 발급되는 `*.vercel.app` 주소로 확인
5. 커스텀 도메인이 있다면 프로젝트 설정 → Domains에서 연결

## 5. 다음 단계로 추가하면 좋은 것들

- 온라인 상담/예약 폼 제출 처리 (Vercel Functions, Formspree, 또는 Google Sheets 연동)
- 카카오맵/네이버지도 API 키 발급 후 `Location.js`의 지도 영역에 임베드
- 실제 병원 사진으로 교체 (`public/` 폴더에 이미지 추가 후 `next/image` 사용 권장)
- 의료광고 관련 문구(비급여 진료비 고지 등) 검토
