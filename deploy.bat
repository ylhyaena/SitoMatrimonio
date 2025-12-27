@echo off
echo Installando Git...
winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements

echo.
echo Configurando Git...
git config --global user.name "Manuel"
git config --global user.email "manuel@example.com"

echo.
echo Inizializzando repository...
cd c:\Users\manuel\.codex\sito
git init
git add .
git commit -m "Initial commit: wedding website"

echo.
echo Aggiungendo remote per ylhyaena/SitoMatrimonio...
git remote add origin https://github.com/ylhyaena/SitoMatrimonio.git
git branch -M main
git push -u origin main

echo.
echo Fatto! Ora vai su https://ylhyaena.github.io/SitoMatrimonio per vedere il sito.
echo Se hai problemi, assicurati che il repo sia pubblico e vuoto.
pause