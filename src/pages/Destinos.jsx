import { useDestinos } from '../hooks/useDestinos';
import { Spinner } from '../components/atoms/Spinner';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import { SearchFilterBar } from '../components/molecules/SearchFilterBar';
import { DestinationCard } from '../components/organisms/DestinationCard';

export function Destinos() {
  const {
    destinosFiltrados,
    regiones,
    cargando,
    error,
    busqueda,
    regionSeleccionada,
    setBusqueda,
    setRegionSeleccionada,
  } = useDestinos();

  if (cargando) return <Spinner mensaje="Cargando destinos desde API REST..." />;
  if (error) return <ErrorMessage mensaje={error} />;

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Destinos disponibles</h1>
        <p className="mt-1 text-sm text-slate-600">
          Selecciona un destino para consultar vuelos y hoteles disponibles.
        </p>
      </div>

      <SearchFilterBar
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
        regiones={regiones}
        regionSeleccionada={regionSeleccionada}
        onRegionChange={setRegionSeleccionada}
      />

      {destinosFiltrados.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          No encontramos destinos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinosFiltrados.map((destino) => (
            <DestinationCard key={destino.id} destino={destino} />
          ))}
        </div>
      )}
    </section>
  );
}
