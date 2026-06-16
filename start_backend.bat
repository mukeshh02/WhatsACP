@echo off
title WhatsACP Backend (WhatsApp Engine)
color 0A
echo =======================================================
echo          WhatsACP - WhatsApp Group Sync Engine
echo =======================================================
echo.
echo Starting Node.js Server... Please wait for the QR Code...
echo.
del /F /Q "%~dp0backend\.wwebjs_auth\session\SingletonLock" 2>nul
cd backend
node server.js
pause
