# 팔도 축제길 (Festival)

전국 지역·계절·월별 축제를 지도에서 한눈에 보는 개인용 지도 서비스입니다.

**바로 열기 · 앱 설치:** https://sadness500-boop.github.io/Festival/

## 주요 기능
- 전국 축제 50곳을 OpenStreetMap 배경지도 위에 표시 (타일이 막힌 환경에서는 내장 행정경계 지도로 자동 전환)
- 계절·월·17개 시도(영남권)·진행 상태·축제 종류·문화관광축제 필터와 검색
- 축제 클릭 시 상세 팝업: 일정·요일·D-day, 장소, 입장료·비용, 예매처, 공식 홈페이지, 문의처, 주요 프로그램, 교통·팁
- 현재 내 위치: PC는 IP 주소 기반, 휴대폰은 GPS 기반 실시간 추적(이동 시 지도·거리·경로 자동 갱신)
- 내 위치 → 축제장 길찾기: 지도 위 자동차 경로선과 예상 시간(OSRM), 카카오맵 길안내·구글 대중교통 연결
- 주간/야간 모드, 앱 다운로드 QR, 친구 초대(공유·링크 복사)
- 홈 화면에 추가하면 앱처럼 실행(PWA)

## 휴대폰 앱
- **안드로이드**: [APK 내려받기](https://github.com/sadness500-boop/Festival/releases/latest/download/PaldoFestival.apk) → 열기 → '이 출처 허용' → 설치
- **아이폰**: 사파리에서 웹 주소 열기 → 공유 → 홈 화면에 추가 (서명 전 IPA는 Releases에 함께 올라갑니다)
- 설치 안내 페이지(QR 연결): https://sadness500-boop.github.io/Festival/app.html
- `mobile/` 폴더가 앱 프로젝트(Capacitor 6)입니다. `main`에 올리면 GitHub Actions가 APK·IPA를 자동으로 빌드해 Releases에 올립니다.
- `mobile/signing/`의 서명키는 개인 직접 설치용입니다. Play 스토어에 올릴 때는 새 키를 만들어 비공개로 보관하세요.

## 파일
| 파일 | 설명 |
|---|---|
| `index.html` | 앱 전체(지도 엔진·행정경계·축제 데이터 포함 단일 파일) |
| `manifest.webmanifest`, `sw.js`, `icons/` | 홈 화면 설치(PWA)용 |
| `app.html` | 앱 다운로드 안내(안드로이드 APK · 아이폰) |
| `mobile/` | 안드로이드·아이폰 앱 프로젝트 |
| `.github/workflows/mobile.yml` | 앱 자동 빌드·배포 |

## 자료 출처
2026.10.14 조사 「2026 가을 ~ 2027 여름 전국 지역별·계절별 주요 축제 가이드」.
2027년 봄·여름 일정은 대부분 미발표라 2026년 개최 기준으로 예상 표시합니다. 방문 전 각 축제 공식 홈페이지를 확인하세요.

축제 엠블럼은 공식 로고가 아닌 자체 디자인입니다. 배경지도 © OpenStreetMap 기여자 · 경계 © 통계청 · 경로 © OSRM.

*Produced on October 14, 2026 by Rat Rae Choi*
