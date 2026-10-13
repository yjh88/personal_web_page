@echo off
rem 더블클릭하면 경제 지표(data\indicators.js)를 최신 값으로 갱신합니다.
chcp 65001 > nul
cd /d "%~dp0"
node scripts\update-indicators.mjs
echo.
pause
