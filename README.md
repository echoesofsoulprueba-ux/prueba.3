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

Se distribuyen **precompilados** en `dist/` (CommonJS + ESM, `react`/`react-dom` quedan como
peer — usan la instancia de React de tu proyecto). Esto es necesario porque un paquete instalado
vía `npm install github:...` nunca corre un paso de build: los archivos compilados tienen que
estar físicamente en el repo. El código fuente sin compilar sigue disponible en `src/components/`
para quien quiera inspeccionarlo o usarlo directamente.

### Estilos

Dos formas de aplicar los estilos de los componentes, elegí una:

**Opción A — hoja de estilos ya compilada** (más simple, no requiere tener Tailwind configurado):

```js
import 'prueba.3/styles.css'
```

**Opción B — preset de Tailwind** (si tu proyecto ya usa Tailwind y preferís que las utilities se
generen junto con las tuyas, con tree-shaking de lo que no uses):

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('prueba.3/tailwind-preset')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

Esto habilita tanto los tokens semánticos (`bg-primary`, `text-error`, etc.) como las utilities
de escala (`bg-primary-700`, `bg-accent-100`, etc.).
