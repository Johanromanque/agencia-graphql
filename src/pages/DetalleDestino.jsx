import { Link, useParams } from 'react-router';
import { useDetalleDestino } from '../hooks/useDetalleDestino';
import { Spinner } from '../components/atoms/Spinner';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import { ActivityTags } from '../components/molecules/ActivityTags';
import { TripSummaryBanner } from '../components/molecules/TripSummaryBanner';
import { FlightCard } from '../components/organisms/FlightCard';
import { HotelCard } from '../components/organisms/HotelCard';

export function DetalleDestino() {
  const { destinoId } = useParams();
  const {
    detalle,
    vuelosFiltrados,
    hotelesFiltrados,
    loading,
    error,
    vueloSeleccionado,
    hotelSeleccionado,
    soloDisponibles,
    totalEstimado,
    setSoloDisponibles,
    alternarVuelo,
    alternarHotel,
    limpiarPlan,
  } = useDetalleDestino(destinoId);

  if (loading) return <Spinner mensaje="Consultando vuelos y hoteles vía GraphQL..." />;

  if (error || !detalle) {
    return (
      <ErrorMessage
        titulo="Destino no encontrado"
        mensaje={error || 'No hay información disponible para este destino.'}
        accion={
          <Link
            to="/destinos"
            className="inline-block rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Volver a destinos
          </Link>
        }
      />
    );
  }

  return (
    <section className="space-y-8">
      <Link to="/destinos" className="inline-flex text-sm font-semibold text-sky-700 hover:underline">
        ← Volver a todos los destinos
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid md:grid-cols-2">
        <img
          src={detalle.imagen}
          alt={detalle.nombre}
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
            {detalle.pais}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900">{detalle.nombre}</h1>
          <p className="mt-3 text-sm text-slate-600">{detalle.descripcion}</p>
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase text-slate-400">
              Imperdibles en tu visita
            </p>
            <ActivityTags actividades={detalle.actividadesPopulares} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(e) => setSoloDisponibles(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-sky-600"
          />
          Mostrar solo opciones disponibles
        </label>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Vuelos disponibles</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vuelosFiltrados.map((vuelo) => (
            <FlightCard
              key={vuelo.id}
              vuelo={vuelo}
              seleccionado={vueloSeleccionado?.id === vuelo.id}
              onSeleccionar={alternarVuelo}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Hoteles disponibles</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {hotelesFiltrados.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              seleccionado={hotelSeleccionado?.id === hotel.id}
              onSeleccionar={alternarHotel}
            />
          ))}
        </div>
      </div>

      <TripSummaryBanner
        vueloSeleccionado={vueloSeleccionado}
        hotelSeleccionado={hotelSeleccionado}
        totalEstimado={totalEstimado}
        onLimpiar={limpiarPlan}
      />
    </section>
  );
}
