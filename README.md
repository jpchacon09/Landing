# 🧠 SINAPSIO - Landing Page

Landing page profesional para SINAPSIO, sistema de automatización con IA para barberías y spas en Colombia.

## 🚀 Inicio Rápido

### Opción 1: Python (Recomendado - Más Fácil)

1. Abre la terminal y navega a la carpeta del proyecto:
```bash
cd /Users/jpchacon/LandingPage
```

2. Ejecuta el servidor:
```bash
python3 server.py
```

3. ¡Listo! Tu navegador se abrirá automáticamente en `http://localhost:8000`

### Opción 2: Node.js

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor:
```bash
npm start
```

3. Abre tu navegador en `http://localhost:8000`

### Opción 3: Abrir directamente (Sin servidor)

Simplemente abre el archivo `index.html` en tu navegador, pero algunas funcionalidades pueden no funcionar correctamente.

## 📂 Estructura del Proyecto

```
LandingPage/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── server.py           # Servidor Python
├── server.js           # Servidor Node.js
├── package.json        # Configuración Node.js
└── README.md           # Este archivo
```

## ✨ Características

- ✅ Diseño responsive (funciona en móvil, tablet y desktop)
- ✅ Animaciones suaves y modernas
- ✅ Notificaciones FOMO en tiempo real
- ✅ Contador de tiempo regresivo
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp
- ✅ SEO optimizado
- ✅ Carga rápida y optimizada
- ✅ Tema oscuro con gradientes neón

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `styles.css` (líneas 1-22):

```css
:root {
    --primary-color: #00f2ff;      /* Color principal */
    --secondary-color: #7000ff;    /* Color secundario */
    --accent-color: #ff006e;       /* Color de acento */
}
```

### Modificar contenido

Todo el contenido se encuentra en `index.html`. Las secciones principales son:

- **Hero Section** (línea ~119): Banner principal
- **Problema/Solución** (línea ~235): Comparación antes/después
- **Cómo Funciona** (línea ~290): Proceso en 3 pasos
- **Testimonios** (línea ~347): Casos de éxito
- **Planes** (línea ~516): Precios y características
- **FAQ** (línea ~638): Preguntas frecuentes
- **Contacto** (línea ~762): Formulario

### Cambiar números de WhatsApp

Busca y reemplaza `573222317169` por tu número en:
- `index.html` (todos los enlaces de WhatsApp)
- Formato: código de país + número (ej: 573222317169 para Colombia)

### Modificar email del formulario

En `index.html` línea ~809, cambia:
```html
<form action="https://formsubmit.co/sinapsio.ia@gmail.com" method="POST">
```

## 🔧 Comandos Útiles

### Detener el servidor
- Presiona `Ctrl + C` en la terminal

### Limpiar caché del navegador
- Chrome/Edge: `Cmd + Shift + R` (Mac) o `Ctrl + Shift + R` (Windows)
- Safari: `Cmd + Option + R`

### Ver en otros dispositivos
1. Encuentra tu IP local:
   ```bash
   # Mac/Linux:
   ifconfig | grep "inet "

   # Windows:
   ipconfig
   ```

2. Accede desde otro dispositivo en la misma red:
   ```
   http://TU_IP:8000
   Ejemplo: http://192.168.1.100:8000
   ```

## 📱 Testing Responsive

La landing está optimizada para:
- 📱 Móvil: 320px - 768px
- 📱 Tablet: 768px - 968px
- 💻 Desktop: 968px+

Prueba en Chrome DevTools:
1. Abre la página
2. Presiona `F12`
3. Click en el ícono de dispositivo móvil
4. Selecciona diferentes dispositivos

## 🚀 Optimizaciones Implementadas

- ✅ Meta tags SEO completos
- ✅ Open Graph para redes sociales
- ✅ Structured Data (Schema.org)
- ✅ Preconnect para recursos externos
- ✅ Lazy loading de imágenes
- ✅ Minificación de CSS
- ✅ Compresión de assets
- ✅ Favicon dinámico
- ✅ PWA-ready

## 🎯 Métricas Objetivo

- ⚡ Tiempo de carga: < 2 segundos
- 📊 PageSpeed Score: > 90
- 🎨 Lighthouse Score: > 90
- 📱 Mobile-friendly: 100%

## 📞 Soporte

¿Necesitas ayuda? Contacta:
- 📧 Email: sinapsio.ia@gmail.com
- 📱 WhatsApp: +57 322 231 7169

## 📄 Licencia

Este proyecto es propiedad de SINAPSIO © 2024

---

**Hecho con 💙 para emprendedores colombianos**

🧠 SINAPSIO - Automatización inteligente para tu negocio
