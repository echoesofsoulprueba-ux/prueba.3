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

## Camino principal: usar los 5 componentes ya armados

Es el camino recomendado — funciona en cualquier bundler/framework (Vite, Next.js, CRA, etc.) sin
depender de que tu proyecto tenga Tailwind configurado.

```jsx
import { Button, Input, Textarea, Alert, Badge } from 'prueba.3'
import 'prueba.3/styles.css'
```

Los componentes se distribuyen **precompilados** en `dist/` (CommonJS + ESM, `react`/
`react-dom` quedan como peer — usan la instancia de React de tu proyecto), junto con
`dist/index.css`, una hoja de estilos ya purgada a exactamente las clases que estos 5 componentes
usan. Esto es necesario porque un paquete instalado vía `npm install github:...` nunca corre un
paso de build: los archivos compilados tienen que estar físicamente en el repo.

> **`dist/` se regenera automáticamente en cada exportación/actualización desde el generador —
> no lo edites a mano, cualquier cambio manual se pierde en el próximo export.** El código fuente
> sin compilar sigue disponible en `src/components/` para quien quiera inspeccionarlo.

## Camino avanzado (opcional): construir tus propios componentes con estos tokens

Si en vez de (o además de) usar los 5 componentes ya armados querés construir los tuyos propios
reusando la misma paleta de marca (colores semánticos + escalas 50–900 + tipografía), extendé tu
`tailwind.config.js` con el preset de este paquete:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('prueba.3/tailwind-preset')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

Esto habilita tanto los tokens semánticos (`bg-primary`, `text-error`, etc.) como las utilities
de escala (`bg-primary-700`, `bg-accent-100`, etc.), generadas por tu propio Tailwind con
tree-shaking de lo que no uses. El preset y el `dist/index.css` del camino principal se derivan
de la misma fuente de tokens, así que nunca quedan desincronizados entre sí.
