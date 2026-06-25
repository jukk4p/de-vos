# 💈 Barbería De-Vos — Precisión Industrial

[![Astro](https://img.shields.io/badge/Astro-7.0.2-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

Sitio web oficial de la **Barbería De-Vos** (Coria del Río, Sevilla), un espacio de estética masculina y línea junior diseñado bajo un concepto estético industrial-premium. La plataforma destaca por sus micro-animaciones fluidas, un diseño visual imponente y una experiencia de usuario optimizada para agendamiento de turnos directo.

---

## ✨ Características Principales

*   **Estética Industrial & Premium:** Paleta de colores oscuros con acentos de acero y plateado pulido, tipografía moderna (`Inter` y `Manrope`) y un diseño de grilla estructurado.
*   **Animaciones Ultra-fluidas:** Implementación de GSAP (GreenSock) con `ScrollTrigger` y animaciones de parallax para una experiencia interactiva sofisticada.
*   **Optimizado para Dispositivos Móviles:** Interfaz totalmente responsiva con menú lateral adaptado y botones flotantes táctiles de contacto rápido.
*   **Integración con WhatsApp Business:** Enlaces directos preconfigurados para facilitar la solicitud de turnos sin fricción.
*   **Rendimiento Extremo:** Generación de sitio estático con Astro e hidratación parcial (islas React). Las imágenes de la galería están optimizadas en WebP.

---

## 🛠️ Stack Tecnológico

*   **Framework:** Astro 7 (SSG) + React 19 (islas)
*   **Build:** Astro (Vite under the hood)
*   **Estilos:** Tailwind CSS 3 + PostCSS + CSS Variables (diseño a medida)
*   **Animaciones:** GSAP + `@gsap/react`
*   **Iconografía:** Lucide React
*   **Despliegue:** Docker (nginx:alpine)

---

## 📂 Estructura del Proyecto

```bash
De-Vos/
├── public/                # Recursos estáticos (imágenes galería, favicon SVG)
│   ├── galeria/           # Fotografías del local y cortes (WebP optimizado)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/        # Componentes React (islas con hidratación parcial)
│   │   └── pages/         # Vistas principales (Home, Services, etc.)
│   ├── layouts/           # Layout base de Astro (navbar, footer, SEO)
│   ├── pages/             # Rutas Astro (9 páginas estáticas)
│   ├── App.css            # Estilos globales y tipografías personalizadas
│   └── index.css          # Inicialización de Tailwind y variables de diseño
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.js     # Configuración de diseño Tailwind CSS
├── Dockerfile             # Multi-stage build para producción
└── nginx.conf             # Configuración de nginx con caching agresivo
```

---

## 🚀 Empezar a Desarrollar

### Requisitos Previos

Node.js 22+.

### 1. Clonar e instalar
```bash
git clone https://github.com/jukk4p/de-vos.git
cd de-vos
npm install
```

### 2. Servidor de desarrollo
```bash
npm run dev
```
Disponible en `http://localhost:4321`.

### 3. Build producción
```bash
npm run build
npm run preview
```
Los archivos estáticos se generan en `/dist`.

---

## 🐳 Despliegue con Docker

```bash
docker build -t de-vos .
docker run -d -p 4321:4321 de-vos
```

El contenedor sirve el sitio estático con nginx (gzip activo, caching de assets inmutable para `/_astro/` y `/galeria/`).
