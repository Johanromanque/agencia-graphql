import { Button } from '../atoms/Button';
import { formatearPrecioUSD } from '../../utils/formatters';

export function TripSummaryBanner({
  vueloSeleccionado,
  hotelSeleccionado,
  totalEstimado,
  onLimpiar,
}) {
  if (!vueloSeleccionado && !hotelSeleccionado) return null;

  return (
    <aside className="sticky bottom-4 z-20 rounded-2xl border border-sky-200 bg-slate-900 p-4 text-white shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
            Resumen de tu plan de viaje
          </p>
          <p>
            <span className="text-slate-400">Vuelo:</span>{' '}
            {vueloSeleccionado
              ? `${vueloSeleccionado.aerolinea} (${formatearPrecioUSD(vueloSeleccionado.precio)})`
              : 'Sin seleccionar'}
          </p>
          <p>
            <span className="text-slate-400">Hotel:</span>{' '}
            {hotelSeleccionado
              ? `${hotelSeleccionado.nombre} (${formatearPrecioUSD(hotelSeleccionado.precioPorNoche)}/noche)`
              : 'Sin seleccionar'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-xs text-slate-400">Total estimado</span>
            <span className="text-2xl font-bold text-emerald-400">
              {formatearPrecioUSD(totalEstimado)}
            </span>
          </div>
          <Button variante="secondary" onClick={onLimpiar}>
            Limpiar
          </Button>
        </div>
      </div>
    </aside>
  );
}
