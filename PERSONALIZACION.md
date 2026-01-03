# Guía de Personalización - Tu Portafolio

¡Bienvenido! Aquí está tu portafolio profesional listo. Ahora necesitas personalizarlo con tu información. Sigue estos pasos:

## 1. Información Personal

### Actualizar en `src/components/Footer.tsx`
Busca esta línea y reemplaza "Your Name":
```tsx
&copy; {currentYear} Your Name. Built with...
```

Con tu nombre real.

## 2. Redes Sociales y Contacto

### Actualizar en `src/components/Header.tsx`
Los links ya están configurados, solo verifica los hrefs.

### Actualizar en `src/components/Contact.tsx`
Reemplaza estos URLs con los tuyos:
```tsx
{
  name: "GitHub",
  url: "https://github.com/TU_USUARIO", // ← Reemplaza esto
},
{
  name: "LinkedIn",
  url: "https://linkedin.com/in/TU_USUARIO", // ← Reemplaza esto
},
{
  name: "Email",
  url: "mailto:tu.email@example.com", // ← Reemplaza esto
}
```

## 3. Proyectos

### Actualizar en `src/components/Projects.tsx`
Reemplaza los proyectos mock con los tuyos. Ejemplo:

```tsx
{
  id: 1,
  title: "Mi Proyecto Real",
  description: "Descripción de qué hace el proyecto",
  technologies: ["Django", "PostgreSQL", "Docker"],
  github: "https://github.com/tu_usuario/tu_repo",
  image: "🚀",
  featured: true,
}
```

**Consejo**: Puedes obtener la URL de GitHub API para mostrar dinámicamente tus repositorios.

## 4. Experiencia Laboral

### Actualizar en `src/components/Experience.tsx`
Reemplaza los ejemplos con tu experiencia real:

```tsx
{
  id: 1,
  title: "Software Engineer",
  company: "Nombre de tu empresa",
  period: "2022 - Present",
  description:
    "Describe qué hiciste específicamente",
  icon: "💼",
}
```

Actualiza también la sección de Education con tu información de UAdeC.

## 5. Skills

### Actualizar en `src/components/Skills.tsx`
Ya está precargado con tu stack, pero puedes ajustar según sea necesario.

## 6. Hero Section

### Actualizar en `src/components/Hero.tsx`
Personaliza la biografía:

```tsx
<p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
  Software Engineer with 2 years of experience... // ← Personaliza aquí
</p>
```

## Ejecutar Localmente

### Opción 1: Doble click en `dev.bat`
Simplemente abre el archivo `dev.bat` en tu carpeta del proyecto.

### Opción 2: Desde terminal
```bash
cd "C:\Users\User\Documents\Sells\My Portfolio"
set PATH=C:\Users\User\node;%PATH%
npm run dev
```

Luego abre: **http://localhost:3000**

## Construir para Producción

```bash
npm run build
npm start
```

## Deploy (Próximos pasos)

### Vercel (Recomendado)
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Listo! Se deployará automáticamente

### Netlify
1. Corre `npm run build`
2. Sube la carpeta `.next` a Netlify

### Otros servidores
- Compila con `npm run build`
- Sube a tu servidor y configura Node.js

## Consejos Finales

1. **Fotos de Proyectos**: Agrega screenshots o GIFs de tus proyectos
2. **Animaciones**: Ya incluye animaciones suaves, ajusta velocidades en `tailwind.config.js`
3. **Colores**: Personaliza en `tailwind.config.js` el color de indigo/pink
4. **CV**: Agrega un botón para descargar tu CV
5. **Analytics**: Integra con Vercel Analytics o Google Analytics

¡Tu portafolio está listo! 🚀
