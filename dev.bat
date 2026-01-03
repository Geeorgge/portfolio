@echo off
setlocal enabledelayedexpansion

REM Set Node.js path
set "NODE_PATH=C:\Users\User\node"
set "PATH=!NODE_PATH!;!PATH!"

REM Navigate to project directory
cd /d "C:\Users\User\Documents\Sells\My Portfolio"

REM Run development server
npm run dev

pause
