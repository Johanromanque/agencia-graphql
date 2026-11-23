import { Link } from 'react-router';
import { Badge } from '../components/atoms/Badge';

export function Inicio() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 px-6 py-16 text-white shadow-lg sm:px-12">
      <Badge variante="amber">Planificador de viajes · REST + GraphQL</Badge>
      <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
        Explora destinos increíbles y arma tu viaje a medida
      </h1>
      <p className="mt-4 max-w-xl text-base text-sky-100 sm:text-lg">
        Descubre países y actividades populares desde nuestra API REST y consulta en detalle
        vuelos, hoteles, fechas y disponibilidad en tiempo real mediante GraphQL.
      </p>
      <div className="mt-8">
        <Link
          to="/destinos"
          className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-sky-700 shadow transition hover:bg-sky-50"
        >
          Explorar destinos disponibles
        </Link>
      </div>
    </section>
  );
}
