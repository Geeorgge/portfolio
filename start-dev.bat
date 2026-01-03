@echo off
setlocal enabledelayedexpansion
set "NODE_PATH=C:\Users\User\node"
set "PATH=!NODE_PATH!;!PATH!"
set "PROJECT_PATH=C:\Users\User\Documents\Sells\My Portfolio"

cd /d "!PROJECT_PATH!"

npm run dev
