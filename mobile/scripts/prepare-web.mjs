// 저장소 루트의 index.html(웹 앱)과 아이콘을 앱 안에 복사합니다. 웹과 앱이 항상 같은 화면을 씁니다.
import { cpSync, mkdirSync } from "node:fs";
mkdirSync("www/icons", { recursive: true });
cpSync("../index.html", "www/index.html");
cpSync("../icons", "www/icons", { recursive: true });
console.log("www 준비 완료");
