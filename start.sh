#!/bin/bash

# Script de inicio para SINAPSIO Landing Page

echo "=================================================="
echo "🧠  SINAPSIO - Landing Page"
echo "=================================================="
echo ""

# Detectar sistema operativo
if [[ "$OSTYPE" == "darwin"* ]]; then
    BROWSER="open"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    BROWSER="xdg-open"
else
    BROWSER="start"
fi

echo "✅ Iniciando servidor..."
echo ""

# Verificar si Python está instalado
if command -v python3 &> /dev/null; then
    echo "✅ Python detectado - Usando servidor Python"
    python3 server.py
elif command -v node &> /dev/null; then
    echo "✅ Node.js detectado - Usando servidor Node"
    if [ ! -d "node_modules" ]; then
        echo "📦 Instalando dependencias..."
        npm install
    fi
    npm start
else
    echo "⚠️  No se encontró Python ni Node.js"
    echo "📱 Abriendo index.html directamente..."
    $BROWSER index.html
fi
