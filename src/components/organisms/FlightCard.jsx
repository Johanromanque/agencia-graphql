import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { formatearPrecioUSD } from '../../utils/formatters';

export function FlightCard({ vuelo, seleccionado, onSeleccionar }) {
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
          <h4 className="text-base font-bold text-slate-900">{vuelo.aerolinea}</h4>
          <p className="text-xs text-slate-500">Salida desde {vuelo.origen}</p>
        </div>
        <Badge variante={vuelo.disponible ? 'success' : 'danger'}>
          {vuelo.disponible ? `${vuelo.cupos} cupos` : 'Agotado'}
        </Badge>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div>
          <dt className="text-xs text-slate-400">Ida</dt>
          <dd className="font-medium text-slate-800">{vuelo.fechaSalida}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-400">Vuelta</dt>
          <dd className="font-medium text-slate-800">{vuelo.fechaRegreso}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-400">Modalidad</dt>
          <dd className="font-medium text-slate-800">{vuelo.escalas}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-400">Precio ida y vuelta</dt>
          <dd className="text-lg font-extrabold text-sky-700">
            {formatearPrecioUSD(vuelo.precio)}
          </dd>
        </div>
      </dl>

      <Button
        onClick={() => onSeleccionar(vuelo)}
        disabled={!vuelo.disponible}
        variante={seleccionado ? 'selected' : 'primary'}
        className="mt-4 w-full"
      >
        {!vuelo.disponible
          ? 'No disponible'
          : seleccionado
          ? 'Vuelo seleccionado'
          : 'Elegir vuelo'}
      </Button>
    </article>
  );
}
