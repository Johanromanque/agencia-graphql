# Horizonte Viajes — Agencia de Viajes (REST + GraphQL)

Aplicación web frontend para una agencia de viajes desarrollada en **React** y **Vite**, correspondiente a la actividad sumativa de la **Semana 5** de la asignatura **Desarrollo Frontend II (PFY2202)**.

La plataforma permite explorar destinos turísticos internacionales obtenidos desde una **API REST mock** y consultar en detalle las opciones de **vuelos y hoteles** (precios, fechas y disponibilidad) mediante una **API GraphQL mock**, permitiendo al usuario seleccionar su combinación preferida para planificar su viaje.

---

## Demo en vivo (GitHub Pages)

> **URL de despliegue:** [https://johanromanque.github.io/agencia-graphql/](https://johanromanque.github.io/agencia-graphql/)

---

## Funcionalidades principales

- **Catálogo de destinos (REST):** Listado de destinos con imagen, país, región, descripción y actividades populares.
- **Búsqueda y filtrado dinámico:** Filtro en tiempo real por texto (destino, país o actividad) y por región geográfica utilizando manejo de estado en React (`useState`, `useEffect`, `useMemo`).
- **Detalle de vuelos y hoteles (GraphQL + Apollo Client):** Al seleccionar un destino, se consultan sus vuelos (aerolínea, origen, fechas de ida/vuelta, escalas, cupos y precio en USD) y hoteles (ubicación, estrellas, check-in/check-out, habitaciones disponibles y tarifa por noche).
- **Planificador interactivo de viaje:** Permite filtrar únicamente opciones disponibles, elegir un vuelo y un hotel, y visualizar en un banner flotante el cálculo automático del costo total estimado según las noches de estadía.
- **Manejo de estados de carga y error:** Indicadores visuales de carga (_spinner_) y mensajes claros ante errores de red o destinos inexistentes.
- **Navegación SPA con React Router:** Rutas limpias con `HashRouter` (compatible con GitHub Pages) y vista dedicada para rutas no encontradas (404).
- **Diseño 100% responsivo:** Interfaz construida con **Tailwind CSS v4** adaptable a dispositivos móviles, tablets y pantallas de escritorio.

---

## Tecnologías utilizadas

- **React 19** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router** (`HashRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams`)
- **Apollo Client** + **GraphQL**
- **Mock Service Worker (MSW v2)** para simular backend REST y GraphQL directamente en el navegador (tanto en desarrollo como en GitHub Pages)
- **gh-pages** para publicación automática

---

## Arquitectura y organización del código

El proyecto sigue dos principios clave de mantenibilidad y escalabilidad:

1. **Atomic Design:** Los componentes visuales están divididos por nivel de abstracción (`atoms`, `molecules`, `organisms` y `templates`) para maximizar su reutilización.
2. **Separación de responsabilidades:** Los archivos `.jsx` contienen únicamente la capa de vista (presentación). Toda la lógica de llamadas HTTP, consultas GraphQL, manejo de estado y formateo vive aislada en `hooks/`, `services/`, `graphql/` y `utils/`.

```text
agencia_semana5/
├── public/
│   └── mockServiceWorker.js       # Service Worker de MSW
├── src/
│   ├── components/
│   │   ├── atoms/                 # Componentes base reutilizables (Badge, Button, Spinner, ErrorMessage)
│   │   ├── molecules/             # Combinaciones simples (ActivityTags, SearchFilterBar, TripSummaryBanner)
│   │   ├── organisms/             # Secciones complejas (Navbar, DestinationCard, FlightCard, HotelCard)
│   │   └── templates/             # Estructura general de página (MainLayout)
│   ├── graphql/
│   │   ├── client.js              # Configuración de ApolloClient e InMemoryCache
│   │   ├── endpoint.js            # Endpoints centralizados compatibles con localhost y gh-pages
│   │   └── operaciones.js         # Definición de queries GraphQL (GET_OPCIONES_DESTINO)
│   ├── hooks/
│   │   ├── useDestinos.js         # Lógica de consumo REST y filtros con useState / useEffect
│   │   └── useDetalleDestino.js   # Lógica de consulta GraphQL (useQuery) y cálculo del plan de viaje
│   ├── mocks/
│   │   ├── browser.js             # Registro del worker de MSW
│   │   ├── data.js                # Dataset simulado de destinos, vuelos y hoteles
│   │   └── handlers.js            # Handlers simultáneos para REST y GraphQL
│   ├── pages/
│   │   ├── Inicio.jsx             # Portada principal
│   │   ├── Destinos.jsx           # Vista de exploración de destinos (REST)
│   │   ├── DetalleDestino.jsx     # Vista detallada de vuelos y hoteles (GraphQL)
│   │   └── PaginaNoEncontrada.jsx # Vista 404
│   ├── services/
│   │   └── destinosService.js     # Cliente fetch para el endpoint REST
│   ├── utils/
│   │   └── formatters.js          # Formateo de moneda USD y cálculo de noches
│   ├── App.jsx                    # Configuración de rutas con React Router
│   ├── index.css                  # Integración de Tailwind CSS v4
│   └── main.jsx                   # Inicialización de MSW y ApolloProvider
├── package.json
└── vite.config.js
```

---

## Integración Backend Mock (REST y GraphQL)

Ambos servicios son interceptados por **MSW** mediante `src/mocks/handlers.js`:

### 1. API REST — Listado de destinos

- **Endpoint:** `GET /api/destinos`
- **Consumido desde:** `src/services/destinosService.js` y `src/hooks/useDestinos.js`
- **Ejemplo de respuesta JSON:**

```json
[
  {
    "id": "tokio",
    "nombre": "Tokio",
    "pais": "Japón",
    "region": "Asia",
    "descripcion": "Metrópoli que combina templos milenarios, gastronomía de clase mundial y tecnología de vanguardia.",
    "imagen": "https://...",
    "actividadesPopulares": [
      "Cruce de Shibuya",
      "Templo Senso-ji",
      "Tour gastronómico en Tsukiji",
      "Mirador Tokyo Skytree"
    ]
  }
]
```

### 2. API GraphQL — Vuelos y hoteles por destino

- **Endpoint:** `POST /graphql`
- **Operación:** `GetOpcionesDestino`
- **Consumido desde:** `src/hooks/useDetalleDestino.js` mediante `useQuery` de Apollo Client
- **Consulta utilizada:**

```graphql
query GetOpcionesDestino($destinoId: ID!) {
  detalleDestino(destinoId: $destinoId) {
    id
    nombre
    pais
    descripcion
    imagen
    actividadesPopulares
    vuelos {
      id
      aerolinea
      origen
      fechaSalida
      fechaRegreso
      precio
      escalas
      disponible
      cupos
    }
    hoteles {
      id
      nombre
      estrellas
      ubicacion
      precioPorNoche
      fechaCheckIn
      fechaCheckOut
      disponible
      habitacionesDisponibles
    }
  }
}
```

---

## Rutas de la aplicación

| Ruta                     | Vista                | Descripción                                                                      |
| :----------------------- | :------------------- | :------------------------------------------------------------------------------- |
| `/#/`                    | `Inicio`             | Página de bienvenida y acceso directo al explorador de destinos.                 |
| `/#/destinos`            | `Destinos`           | Listado de destinos desde REST con barra de búsqueda y filtro por región.        |
| `/#/destinos/:destinoId` | `DetalleDestino`     | Consulta GraphQL de vuelos, hoteles, fechas, disponibilidad y resumen del viaje. |
| `/#/*`                   | `PaginaNoEncontrada` | Página de error 404 para rutas inexistentes.                                     |

---

## Instalación y ejecución local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Johanromanque/agencia-graphql
   cd agencia-graphql
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**

   ```bash
   npm run dev
   ```

   Abrir en el navegador la URL indicada por Vite (por defecto `http://localhost:5173`). En la consola de DevTools debe aparecer `[MSW] Mocking enabled.`.

4. **Compilar para producción:**

   ```bash
   npm run build
   ```

5. **Desplegar en GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## Pruebas en navegadores y responsividad

Se verificó la correcta carga del Service Worker de MSW, las peticiones REST y GraphQL en la pestaña _Network_, la ausencia de errores en consola y la adaptación del diseño en resoluciones **móvil (375px)**, **tablet (768px)** y **escritorio (1440px)**:

| Navegador       | Carga REST (`/api/destinos`) | Consulta GraphQL (`GetOpcionesDestino`) | Navegación React Router | Diseño Responsivo |  Estado  |
| :-------------- | :--------------------------: | :-------------------------------------: | :---------------------: | :---------------: | :------: |
| Google Chrome   |              OK              |                   OK                    |           OK            |        OK         | Aprobado |
| Microsoft Edge  |              OK              |                   OK                    |           OK            |        OK         | Aprobado |
| Mozilla Firefox |              OK              |                   OK                    |           OK            |        OK         | Aprobado |

---

## Autor

- **Estudiante:** Johan Romanque
- **Asignatura:** Desarrollo Frontend II (`PFY2202`) — Duoc UC Online
- **Actividad:** Semana 5 — Integrando nuestro frontend con backend
