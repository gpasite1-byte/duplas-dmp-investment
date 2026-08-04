# ============================================================
# SCRIPT DE PUBLICAÇÃO NO GITHUB - Duplas DMP Investment Site
# ============================================================
# 
# INSTRUÇÕES:
# 1. Antes de executar, crie o repositório no GitHub:
#    - Acesse: https://github.com/new
#    - Nome sugerido: duplas-dmp-investment
#    - Deixe como Público
#    - NÃO inicialize com README
#    - Copie a URL do repositório
#
# 2. Edite a variável GITHUB_URL abaixo com a sua URL do repositório
# 3. Clique com o botão direito neste ficheiro e selecione:
#    "Executar com PowerShell" 
#    OU abra o PowerShell e execute: .\publicar_github.ps1
# ============================================================

$PASTA_SITE = "C:\Users\GPA (PC)\Documents\DUpla 2\SITE NOVO"
$GITHUB_URL = "https://github.com/gpasite1-byte/duplas-dmp-investment.git"

# Configure o seu username e email do GitHub
$GIT_NAME   = "gpasite1-byte"
$GIT_EMAIL  = "geral@duplasdmp.co.ao"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Duplas DMP Investment - Publicar no GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Ir para a pasta do site
Set-Location $PASTA_SITE
Write-Host "[1/6] Pasta do site: $PASTA_SITE" -ForegroundColor Green

# Configurar identidade git
git config --global user.name $GIT_NAME
git config --global user.email $GIT_EMAIL
Write-Host "[2/6] Configuracao git definida: $GIT_NAME <$GIT_EMAIL>" -ForegroundColor Green

# Inicializar repositório git (se ainda não existir)
if (!(Test-Path ".git")) {
    git init
    Write-Host "[3/6] Repositorio git inicializado" -ForegroundColor Green
} else {
    Write-Host "[3/6] Repositorio git ja existe" -ForegroundColor Yellow
}

# Criar .gitignore
@"
node_modules/
.DS_Store
*.log
.env
dist/
build/
"@ | Out-File -Encoding utf8 ".gitignore"
Write-Host "[4/6] .gitignore criado" -ForegroundColor Green

# Adicionar todos os ficheiros
git add .
Write-Host "[5/6] Todos os ficheiros adicionados" -ForegroundColor Green

# Criar commit inicial
git commit -m "feat: Site profissional Duplas DMP Investment - versao inicial

- Paginas dedicadas: Internet, Telecomunicacoes, Tecnologia, Loja, Sobre Nos, Contactos
- Tipografia profissional: Oswald + Barlow + Bebas Neue
- Logo Duplas DMP em SVG
- Imagens contextuais por seccao
- Loja online com carrinho de compras
- Formulario de cotacao
- Design dark mode + glassmorphism
- Navegacao multipagina com sub-menus
- WhatsApp FAB
- Responsivo para mobile e desktop"

Write-Host "[5/6] Commit criado" -ForegroundColor Green

# Definir branch principal como 'main'
git branch -M main

# Adicionar remote origin (apaga se ja existia)
git remote remove origin 2>$null
git remote add origin $GITHUB_URL
Write-Host "[6/6] Remote origin configurado: $GITHUB_URL" -ForegroundColor Green

# Push para o GitHub
Write-Host ""
Write-Host "Enviando para GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " Site publicado com sucesso!" -ForegroundColor Green
Write-Host " URL: $GITHUB_URL" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "PROXIMOS PASSOS:" -ForegroundColor White
Write-Host "  - Para ativar GitHub Pages (site online gratuito):" -ForegroundColor Gray
Write-Host "  - Va em: Repositorio > Settings > Pages" -ForegroundColor Gray
Write-Host "  - Selecione Source: 'Deploy from branch'" -ForegroundColor Gray
Write-Host "  - Branch: main / Folder: / (root)" -ForegroundColor Gray
Write-Host "  - Clique Save e aguarde 2-3 minutos" -ForegroundColor Gray
Write-Host "  - O seu site ficara disponivel em:" -ForegroundColor Gray
Write-Host "  - https://gpasite1-byte.github.io/duplas-dmp-investment" -ForegroundColor Cyan
Write-Host ""

Read-Host "Pressione Enter para sair"
