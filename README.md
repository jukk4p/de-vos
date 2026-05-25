# 💈 Barbería De-Vos — Precisión Industrial

[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

Sitio web oficial de la **Barbería De-Vos** (Coria del Río, Sevilla), un espacio de estética masculina y línea junior diseñado bajo un concepto estético industrial-premium. La plataforma destaca por sus micro-animaciones fluidas, un diseño visual imponente y una experiencia de usuario optimizada para agendamiento de turnos directo.

---

## ✨ Características Principales

*   **Estética Industrial & Premium:** Paleta de colores oscuros con acentos dorados/ocre industriales, tipografía moderna (`Inter` y `Manrope`) y un diseño de grilla estructurado.
*   **Animaciones Ultra-fluidas:** Implementación de GSAP (GreenSock) con `ScrollTrigger` y animaciones de parallax para una experiencia interactiva sofisticada.
*   **Optimizado para Dispositivos Móviles:** Interfaz totalmente responsiva con menú lateral adaptado y botones flotantes táctiles de contacto rápido.
*   **Integración con WhatsApp Business:** Enlaces directos preconfigurados para facilitar la solicitud de turnos sin fricción.
*   **Seguridad Primero:** Estructura limpia libre de API keys hardcodeadas y configuración preventiva en `.gitignore`.

---

## 🛠️ Stack Tecnológico

*   **Framework:** React 19 (TypeScript)
*   **Bundler:** Vite
*   **Estilos:** Tailwind CSS + PostCSS + CSS Variables (diseño a medida)
*   **Animaciones:** GSAP (GreenSock) + `@gsap/react`
*   **Iconografía:** Lucide React

---

## 📂 Estructura del Proyecto

```bash
De-Vos/
├── public/                # Recursos estáticos (imágenes de la galería, favicons)
│   └── galeria/           # Fotografías del local y cortes
├── src/
│   ├── assets/            # Archivos vectoriales y assets importables
│   ├── components/        # Componentes reutilizables globales (Navbar, Footer)
│   ├── pages/             # Vistas principales (Home, Services, Contact)
│   ├── App.css            # Estilos globales y tipografías personalizadas
│   ├── index.css          # Inicialización de Tailwind y variables de diseño
│   └── main.tsx           # Punto de entrada de la aplicación
├── eslint.config.js       # Configuración de ESLint (Reglas de Calidad de Código)
├── tailwind.config.js     # Configuración de diseño Tailwind CSS
└── vite.config.ts         # Configuración del servidor de desarrollo Vite
```

---

## 🚀 Empezar a Desarrollar

### Requisitos Previos

Asegurate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 1. Clonar el repositorio
```bash
git clone https://github.com/jukk4p/de-vos.git
cd de-vos
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Correr el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:5173`.

### 4. Construir para producción
Para compilar y minificar el sitio para producción:
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `/dist`.

---

## 🔒 Buenas Prácticas & Seguridad

*   **Variables de entorno:** Si agregás servicios externos (como EmailJS o Firebase), hacelo usando variables de entorno (`.env`). Las plantillas `.env` y `.env.*` están configuradas en `.gitignore` para prevenir fugas accidentales.
*   **Convención de Commits:** Este repositorio sigue la convención de commits tradicionales ([Conventional Commits](https://www.conventionalcommits.org/es/)) para mantener un historial limpio y legible.

