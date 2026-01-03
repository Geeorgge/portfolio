@echo off
REM Script optimizado para levantar el servidor de desarrollo
REM Este script es más rápido y no requiere reinicio del proceso node

setlocal enabledelayedexpansion
set "NODE_PATH=C:\Users\User\node"
set "PATH=!NODE_PATH!;!PATH!"
set "PROJECT_PATH=C:\Users\User\Documents\Sells\My Portfolio"

cd /d "!PROJECT_PATH!"

REM Mostrar mensaje de inicio
cls
color 0A
echo.
echo ========================================
echo   Portfolio - Servidor de Desarrollo
echo ========================================
echo.
echo   URL: http://localhost:3000
echo   Carpeta: !PROJECT_PATH!
echo.
echo   Presiona CTRL+C para detener el servidor
echo ========================================
echo.

REM Iniciar servidor
REM Intentar liberar el puerto 3000 si está en uso
powershell -NoProfile -Command "try { $p = (Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue).OwningProcess; if ($p) { Stop-Process -Id $p -Force -ErrorAction SilentlyContinue; Write-Output \"Killed process on port 3000 (PID: $p)\" } } catch { Write-Output 'No process to kill or insufficient permissions.' }"

REM Iniciar servidor
npm run dev

pause
