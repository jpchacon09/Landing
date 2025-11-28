# 📦 Guía de Instalación - SINAPSIO Landing Page

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js**: Versión 14 o superior
- **npm**: Versión 6 o superior

### Verificar Versiones

```bash
node --version   # Debe ser >= v14.0.0
npm --version    # Debe ser >= 6.0.0
```

## 📥 Instalación de Dependencias

### Paso 1: Navega al directorio del proyecto

```bash
cd /Users/jpchacon/LandingPage
```

### Paso 2: Instala las dependencias

```bash
npm install
```

Esto instalará:
- ✅ `express` (v4.18.2) - Servidor web
- ✅ `open` (v8.4.2) - Abrir navegador automáticamente

## 🎯 Ejecutar el Servidor

Una vez instaladas las dependencias, ejecuta:

```bash
npm start
```

Esto hará:
1. ✅ Iniciará el servidor en el puerto 8000
2. ✅ Abrirá automáticamente tu navegador
3. ✅ Mostrará la landing page en `http://localhost:8000`

## 🔄 Comandos Disponibles

```bash
# Iniciar servidor (producción)
npm start

# Iniciar servidor (desarrollo)
npm run dev

# Usar servidor Python alternativo
npm run python
```

## ⚡ Inicio Rápido (Todo en Uno)

```bash
npm install && npm start
```

## 📱 Acceso desde Otros Dispositivos

### 1. Inicia el servidor
```bash
npm start
```

### 2. Encuentra tu IP local
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### 3. Accede desde móvil/tablet
En tu dispositivo móvil (misma red WiFi):
```
http://TU_IP:8000
```

Ejemplo: `http://192.168.1.100:8000`

## 🛠️ Solución de Problemas

### Problema: "npm: command not found"

**Solución**: Instala Node.js desde https://nodejs.org/

### Problema: "Error: Cannot find module 'open'"

**Solución**: 
```bash
npm install
```

### Problema: "Port 8000 already in use"

**Solución 1**: Cambia el puerto en `server.js`:
```javascript
const PORT = process.env.PORT || 3000; // Usa puerto 3000
```

**Solución 2**: Mata el proceso que usa el puerto 8000:
```bash
lsof -ti:8000 | xargs kill
```

### Problema: El navegador no se abre automáticamente

**Solución**: Abre manualmente `http://localhost:8000` en tu navegador

## 📋 Estructura de Dependencias

```json
{
  "dependencies": {
    "express": "^4.18.2",  // Servidor web rápido y minimalista
    "open": "^8.4.2"       // Abrir URLs/archivos multiplataforma
  }
}
```

## 🔍 Verificar Instalación

```bash
# Ver dependencias instaladas
npm list --depth=0

# Verificar que express esté instalado
npm list express

# Verificar que open esté instalado
npm list open
```

Deberías ver:
```
sinapsio-landing@1.0.0
├── express@4.18.2
└── open@8.4.2
```

## 🌐 Despliegue en Producción

### Opción 1: Vercel (Recomendado - Gratis)

```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Opción 3: Render

1. Sube tu código a GitHub
2. Conecta el repo en render.com
3. Build command: `npm install`
4. Start command: `npm start`

## 📚 Documentación Adicional

- [README.md](README.md) - Guía completa
- [INICIO-RAPIDO.txt](INICIO-RAPIDO.txt) - Guía visual rápida
- [MEJORAS.md](MEJORAS.md) - Lista de mejoras implementadas

## 📞 Soporte

¿Necesitas ayuda?
- 📧 Email: sinapsio.ia@gmail.com
- 📱 WhatsApp: +57 322 231 7169

---

🧠 **SINAPSIO** - AI Appointment Agents en WhatsApp
