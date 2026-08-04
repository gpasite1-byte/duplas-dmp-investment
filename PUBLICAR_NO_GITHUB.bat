@echo off
title Duplas DMP - Publicar no GitHub
color 0A
echo.
echo  ============================================
echo   Duplas DMP Investment - Publicar no GitHub
echo  ============================================
echo.

cd /d "C:\Users\GPA (PC)\Documents\DUpla 2\SITE NOVO"

echo [1/7] Configurando Git...
git config --global user.name "gpasite1-byte"
git config --global user.email "geral@duplasdmp.co.ao"
echo       OK: git config definido.

echo.
echo [2/7] Iniciando repositorio...
git init
echo       OK: repositorio iniciado.

echo.
echo [3/7] Criando .gitignore...
(
  echo node_modules/
  echo .DS_Store
  echo *.log
  echo .env
  echo dist/
  echo build/
  echo copy_logo.ps1
) > .gitignore
echo       OK: .gitignore criado.

echo.
echo [4/7] Adicionando todos os ficheiros...
git add .
echo       OK: ficheiros adicionados.

echo.
echo [5/7] Criando commit de atualizacao...
git commit -m "feat: Site Duplas DMP Investment - Logomarca ampliada, design robusto e responsivo" 2>nul
echo       OK: commit preparado.

echo.
echo [6/7] Configurando branch e remote...
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/gpasite1-byte/duplas-dmp-investment.git
echo       OK: remote configurado.

echo.
echo [7/7] Enviando para GitHub...
git push -u origin main --force

echo.
echo  ============================================
echo   PUBLICADO COM SUCESSO!
echo  ============================================
echo.
echo   Repositorio: github.com/gpasite1-byte/duplas-dmp-investment
echo.
echo   Para ativar GitHub Pages (site online GRATIS):
echo   1. Va em: github.com/gpasite1-byte/duplas-dmp-investment
echo   2. Settings ^> Pages
echo   3. Source: Deploy from branch
echo   4. Branch: main  ^|  Folder: / (root)
echo   5. Clique Save e aguarde 2-3 minutos
echo.
echo   URL do site online:
echo   https://gpasite1-byte.github.io/duplas-dmp-investment
echo.
pause
