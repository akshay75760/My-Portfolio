# PowerShell deployment preparation script for Portfolio

Write-Host "🚀 Preparing portfolio for deployment..." -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm ci

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Run linting
Write-Host "🔍 Running linter..." -ForegroundColor Yellow
npm run lint

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Linting issues found, but continuing..." -ForegroundColor Yellow
}

# Build the project
Write-Host "🏗️  Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful! Ready for deployment." -ForegroundColor Green
Write-Host "📁 Build files are in the 'dist' directory" -ForegroundColor Cyan

# Ask if user wants to preview
$preview = Read-Host "Do you want to preview the build locally? (y/N)"
if ($preview -eq "y" -or $preview -eq "Y") {
    Write-Host "👀 Starting preview server..." -ForegroundColor Yellow
    Write-Host "Visit http://localhost:4173 to preview your build" -ForegroundColor Cyan
    npm run preview
}
