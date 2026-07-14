# prueba.3

Design system generado con SuperDSAI Generator: tokens de color/tipografía + 5 componentes
(Button, Input, Textarea, Alert, Badge) documentados en Storybook.

## Storybook local

```
npm install
npm run storybook
```

## Instalar como dependencia

Este repo se puede instalar directamente desde GitHub en otro proyecto:

```
npm install github:<owner>/prueba.3
```

### Componentes

Los 5 componentes se exportan desde la raíz del paquete:

```jsx
import { Button, Input, Textarea, Alert, Badge } from 'prueba.3'
```

Los componentes se distribuyen como JSX sin compilar (no hay paso de build). Tu proyecto
consumidor necesita un bundler que entienda JSX (Vite, Next.js, Create React App, etc.), lo cual
ya es el caso en la gran mayoría de proyectos React modernos.

### Preset de Tailwind

El paquete expone un preset de Tailwind con los tokens de color (semánticos + escalas 50–900) y
la tipografía de este design system. Extendé el `tailwind.config.js` de tu proyecto:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('prueba.3/tailwind-preset')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

Esto habilita tanto los tokens semánticos (`bg-primary`, `text-error`, etc.) como las utilities
de escala (`bg-primary-700`, `bg-accent-100`, etc.).
