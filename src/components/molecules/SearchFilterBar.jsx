export function SearchFilterBar({
  busqueda,
  onBusquedaChange,
  regiones,
  regionSeleccionada,
  onRegionChange,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <input
        type="text"
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
        placeholder="Buscar por destino, país o actividad..."
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-800 focus:border-sky-500 focus:outline-none md:max-w-md"
      />
      <div className="flex flex-wrap gap-2">
        {regiones.map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => onRegionChange(region)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
              regionSeleccionada === region
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
