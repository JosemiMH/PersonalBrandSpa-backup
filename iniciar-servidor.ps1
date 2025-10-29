# Script para iniciar el servidor de Personal Brand Spa
# Archivo: iniciar-servidor.ps1

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   Personal Brand Spa - Servidor" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si existe node
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Node.js no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host "Por favor instala Node.js desde https://nodejs.org" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "✓ Node.js encontrado" -ForegroundColor Green

# Verificar si existe npm
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: npm no está instalado" -ForegroundColor Red
    pause
    exit 1
}

Write-Host "✓ npm encontrado" -ForegroundColor Green
Write-Host ""

# Verificar si existe node_modules
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Fallo al instalar dependencias" -ForegroundColor Red
        pause
        exit 1
    }
    Write-Host "✓ Dependencias instaladas" -ForegroundColor Green
}

Write-Host ""
Write-Host "Iniciando servidor..." -ForegroundColor Yellow
Write-Host ""
Write-Host "La aplicación estará disponible en:" -ForegroundColor Cyan
Write-Host "  http://localhost:5000" -ForegroundColor White -BackgroundColor DarkGreen
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

# Iniciar el servidor
npm run dev:win

