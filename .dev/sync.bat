@echo off
setlocal
set "a=%cd%"
set "w=%~dp0"
set "w=%w:~0,-1%"
if "%*"=="" (
  set "mes=update: something news ✒"   
) else (
  set "mes=%*"   
)

@rem call yarn ci

cd %w%\..
git pull
node clean.js
git add .
git commit -m "%mes%"
git push

endlocal