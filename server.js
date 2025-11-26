const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = process.env.PORT || 8000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Headers de seguridad
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🦈 Sharky AI - Servidor Local Iniciado');
    console.log('='.repeat(50));
    console.log(`\n✅ Servidor corriendo en: http://localhost:${PORT}`);
    console.log('✅ Presiona Ctrl+C para detener el servidor\n');
    console.log('='.repeat(50));

    // Abrir navegador automáticamente
    open(`http://localhost:${PORT}`);
});
