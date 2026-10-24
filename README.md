# Impulso Digital — Práctica Introductoria React y Next.js (Semana 11)

Proyecto de una iniciativa estudiantil ficticia para la práctica de Next.js con React y TypeScript. Incluye dos páginas, navegación mediante `Link`, componentes reutilizables con props tipadas y estilos CSS.

## 1. Requisitos previos

- Node.js LTS (recomendado: versión 22 o posterior compatible con Next.js 16).
- npm (se instala con Node.js).
- Git.
- Visual Studio Code o un editor similar.

Comprueba las herramientas en la terminal:

```powershell
node -v
npm -v
git --version
```

## 2. Ejecutar el proyecto

Descomprime el ZIP y abre la carpeta **mi-sitio-react** en VS Code. Desde la terminal, ubicado dentro de esa carpeta:

```powershell
npm install
npm run dev
```

Abre las páginas en el navegador:

- Inicio: http://localhost:3000
- Nosotros: http://localhost:3000/nosotros

Para detener el servidor usa `Ctrl + C`. Para comprobar la compilación ejecuta `npm run build`.

> El ZIP no contiene `node_modules`; se crea en tu equipo al ejecutar `npm install`.

## 3. Estructura principal

```text
mi-sitio-react/
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── nosotros/
│   │       └── page.tsx
│   └── components/
│       ├── Header.tsx
│       └── Button.tsx
└── evidencias/
```

## 4. Actividades desarrolladas

**Actividad 1 — Preparación:** proyecto configurado con Next.js, TypeScript, App Router, carpeta `src/` y rutas disponibles para probar localmente. La instalación de dependencias debe realizarse en tu computadora.

**Actividad 2 — Inicio y JSX:** `src/app/page.tsx` presenta el nombre del sitio, el propósito de la iniciativa y una lista de tres actividades: talleres, proyectos colaborativos y charlas tecnológicas.

**Actividad 3 — Segunda página:** `src/app/nosotros/page.tsx` explica quiénes forman la comunidad y su objetivo. Ambas páginas se enlazan con `Link` desde `next/link`.

**Actividad 4 — Componentes:** `Header.tsx` recibe `titulo` como `string`; `Button.tsx` recibe `texto` como `string` y opcionalmente `variante`. Ambos se utilizan en Inicio y `Header` también se utiliza en Nosotros.

**Actividad 5 — Personalización:** el proyecto usa CSS responsive; reutiliza `Header` con títulos distintos y contiene dos `Button` con textos diferentes. Los botones son **solo visuales**, tal como indica la práctica.

## 5. Preguntas conceptuales

### ¿Qué es JSX?
JSX es una sintaxis que permite escribir elementos de la interfaz con una estructura parecida al HTML dentro del código JavaScript o TypeScript. React utiliza esos elementos para mostrar lo que aparece en pantalla.

### ¿Para qué sirve `export default`?
Permite indicar cuál es el elemento principal que exporta un archivo, por ejemplo una función que representa un componente. Así podemos importarlo en otros archivos sin utilizar llaves en la importación.

### ¿Cómo funcionan las props?
Las props permiten enviar datos desde un componente padre hacia un componente hijo. Por ejemplo, `<Header titulo="Bienvenidos" />` envía el texto "Bienvenidos" mediante la prop `titulo`. TypeScript permite definir el tipo de dato esperado.

## 6. Preguntas de reflexión

### ¿Qué diferencia existe entre React y Next.js?
React es una biblioteca de JavaScript que se utiliza para crear interfaces con componentes. Next.js es un framework construido sobre React que agrega herramientas como organización de páginas mediante rutas, opciones de renderizado y configuración para aplicaciones web.

### ¿Qué ventaja tiene crear Header como componente en lugar de repetir el mismo código?
Podemos usar la misma estructura en varias páginas sin copiarla. Si queremos cambiar su diseño, solo modificamos el componente y el cambio se refleja en todos los lugares donde se utiliza. Esto facilita el mantenimiento del proyecto.

### ¿Qué cambia al enviar un valor diferente a la prop `titulo`?
Cambia el título que muestra Header, pero se mantiene la misma estructura y estilo del componente. En Inicio se puede mostrar "Descubre lo que hacemos" y en Nosotros "¿Quiénes somos?".

## 7. Evidencias que debes completar antes de entregar

**Son capturas reales de tu computadora; no están incluidas en este ZIP.**

1. `evidencias/01-inicio.png`: captura de http://localhost:3000, con la página Inicio visible.
2. `evidencias/02-nosotros.png`: captura de http://localhost:3000/nosotros, con la información del equipo.
3. `evidencias/03-props-codigo.png`: captura en VS Code de `Header.tsx`, `Button.tsx` o de su uso mediante props en `page.tsx`.
4. `evidencias/04-terminal.png` (opcional): captura de la terminal mostrando el servidor funcionando sin errores.

Antes de entregar, verifica que el servidor se abra sin errores, que los enlaces funcionen y que las dos páginas se vean correctamente. Entrega la carpeta o el repositorio Git según lo que solicite tu docente.

## 8. Guía rápida para subirlo a GitHub (solo si el docente solicita un repositorio)

Desde la carpeta del proyecto:

```powershell
git init
git add .
git commit -m "Practica semana 11 React y Next.js"
```

Después, crea un repositorio vacío en GitHub y sigue las instrucciones para conectar el repositorio local. No debes subir `node_modules` ni `.next`; ya están excluidos en `.gitignore`.
