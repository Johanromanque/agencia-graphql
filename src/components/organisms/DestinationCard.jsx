import { Link } from 'react-router';
import { Badge } from '../atoms/Badge';
import { ActivityTags } from '../molecules/ActivityTags';

export function DestinationCard({ destino }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={destino.imagen}
        alt={`${destino.nombre}, ${destino.pais}`}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-900">{destino.nombre}</h3>
          <Badge variante="neutral">{destino.pais}</Badge>
        </div>
        <p className="mt-2 text-sm text-slate-600">{destino.descripcion}</p>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Actividades populares
          </p>
          <ActivityTags actividades={destino.actividadesPopulares} />
        </div>

        <div className="mt-auto pt-5">
          <Link
            to={`/destinos/${destino.id}`}
            className="block w-full rounded-lg bg-sky-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Ver vuelos y hoteles
          </Link>
        </div>
      </div>
    </article>
  );
}
