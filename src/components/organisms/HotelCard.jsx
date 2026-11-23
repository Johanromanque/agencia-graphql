import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { formatearPrecioUSD } from '../../utils/formatters';

export function HotelCard({ hotel, seleccionado, onSeleccionar }) {
  return (
    <article
      className={`rounded-2xl border p-5 transition ${
        seleccionado
          ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-base font-bold text-slate-900">{hotel.nombre}</h4>
          <p className="text-xs text-slate-500">
            {hotel.ubicacion} · {'★'.repeat(hotel.estrellas)}
          </p>
        </div>
        <Badge variante={hotel.disponible ? 'success' : 'danger'}>
          {hotel.disponible
            ? `${hotel.habitacionesDisponibles} hab. disponibles`
            : 'Sin disponibilidad'}
        </Badge>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div>
          <dt className="text-xs text-slate-400">Check-in</dt>
          <dd className="font-medium text-slate-800">{hotel.fechaCheckIn}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-400">Check-out</dt>
          <dd className="font-medium text-slate-800">{hotel.fechaCheckOut}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-xs text-slate-400">Tarifa por noche</dt>
          <dd className="text-lg font-extrabold text-sky-700">
            {formatearPrecioUSD(hotel.precioPorNoche)}
          </dd>
        </div>
      </dl>

      <Button
        onClick={() => onSeleccionar(hotel)}
        disabled={!hotel.disponible}
        variante={seleccionado ? 'selected' : 'primary'}
        className="mt-4 w-full"
      >
        {!hotel.disponible
          ? 'No disponible'
          : seleccionado
          ? 'Hotel seleccionado'
          : 'Elegir hotel'}
      </Button>
    </article>
  );
}
