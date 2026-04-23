# 🎓 TaskUNPC — Gestor Académico

Aplicación web para gestionar tareas académicas universitarias. Permite crear, visualizar, filtrar, completar y eliminar tareas con persistencia local en el navegador.

> **🌐 Demo en vivo:** [https://guileless-cheesecake-3ed221.netlify.app](https://guileless-cheesecake-3ed221.netlify.app)

---

## 📸 Capturas de pantalla

| Vista | Descripción |
|-------|-------------|
| **Inicio** | Panel principal con filtros y tarjetas de tareas |
| **Filtros** | Todas · Pendientes · Completadas con contadores |
| **Nueva Tarea** | Formulario controlado con validación |
| **Detalle** | Vista completa con acciones de toggle y eliminar |

---

## ✨ Funcionalidades

- ✅ **CRUD de tareas** — Crear, leer, actualizar estado y eliminar
- 🔄 **Toggle de completado** — Switch visual con cambio de opacidad y tachado
- 🔍 **Filtros** — Todas / Pendientes / Completadas con contadores dinámicos
- 📝 **Formulario controlado** — Campos validados con `useState` y `handleChange`
- 📦 **Persistencia con localStorage** — Los datos sobreviven al recargar la página
- 🧭 **Navegación SPA** — React Router con 3 rutas (`/`, `/nueva`, `/tarea/:id`)
- 🌙 **Dark theme premium** — Diseño oscuro con gradientes y micro-animaciones

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [React](https://react.dev) | 19.x | Librería UI con componentes funcionales |
| [Vite](https://vite.dev) | 8.x | Bundler y dev server |
| [React Router](https://reactrouter.com) | 7.x | Navegación SPA |
| CSS Vanilla | — | Estilos con Custom Properties (variables) |
| [Netlify](https://netlify.com) | — | Hosting y deploy continuo |

---

## 📁 Estructura del proyecto

```
taskunpc/
├── public/
│   └── _redirects              # SPA routing para Netlify
├── src/
│   ├── context/
│   │   └── TareasContext.jsx   # Provider global + hook useTareas
│   ├── components/
│   │   ├── Header.jsx          # Barra de navegación con logo y badge
│   │   ├── Header.css
│   │   ├── ListaTareas.jsx     # Grid de tarjetas (recibe tareas vía props)
│   │   ├── ListaTareas.css
│   │   ├── TareaCard.jsx       # Tarjeta individual con toggle switch
│   │   └── TareaCard.css
│   ├── pages/
│   │   ├── Inicio.jsx          # Página principal con filtros
│   │   ├── Inicio.css
│   │   ├── NuevaTarea.jsx      # Formulario controlado para crear tareas
│   │   ├── NuevaTarea.css
│   │   ├── DetalleTarea.jsx    # Vista detalle con toggle y eliminar
│   │   └── DetalleTarea.css
│   ├── data/
│   │   └── tareas.js           # Datos mock iniciales (5 tareas)
│   ├── App.jsx                 # Componente raíz con React Router
│   ├── App.css
│   ├── main.jsx                # Entry point: Provider + BrowserRouter
│   └── index.css               # Design system: variables, reset, layout
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Instalación y ejecución

### Prerrequisitos

- [Node.js](https://nodejs.org) ≥ 18
- npm ≥ 9

### Clonar el repositorio

```bash
git clone https://github.com/Erickong24/taskunpc.git
cd taskunpc
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

### Generar build de producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Previsualizar el build

```bash
npm run preview
```

---

## 🧩 Conceptos de React aplicados

### Context API (Estado global)

```jsx
// src/context/TareasContext.jsx
const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // toggleTarea, agregarTarea, eliminarTarea...
}

export function useTareas() {
  return useContext(TareasContext);
}
```

### Formulario controlado con `useState`

```jsx
// src/pages/NuevaTarea.jsx
const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

function handleSubmit(e) {
  e.preventDefault();
  agregarTarea(form);
  navigate('/');
}
```

### Renderizado de listas con `.map()` y `key`

```jsx
// src/components/ListaTareas.jsx
{tareas.map((tarea) => (
  <TareaCard key={tarea.id} {...tarea} />
))}
```

### Rutas con React Router

```jsx
// src/App.jsx
<Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/nueva" element={<NuevaTarea />} />
  <Route path="/tarea/:id" element={<DetalleTarea />} />
</Routes>
```

### Filtrado con estado local

```jsx
// src/pages/Inicio.jsx
const [filtro, setFiltro] = useState('todas');

const tareasFiltradas =
  filtro === 'pendientes'
    ? tareas.filter((t) => !t.completada)
    : filtro === 'completadas'
      ? tareas.filter((t) => t.completada)
      : tareas;
```

---

## 🌐 Deploy

La aplicación está desplegada en **Netlify** con la siguiente configuración:

| Parámetro | Valor |
|-----------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| SPA redirect | `/* → /index.html 200` |

El archivo `public/_redirects` garantiza que todas las rutas del SPA funcionen correctamente en producción.

---

## 📋 Rutas de la aplicación

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Lista de tareas con filtros |
| `/nueva` | Nueva Tarea | Formulario para agregar tarea |
| `/tarea/:id` | Detalle | Vista detalle con acciones |

---

## 👤 Autor

**Erickong24** — [GitHub](https://github.com/Erickong24)

---

## 📄 Licencia

Este proyecto es de uso académico.
