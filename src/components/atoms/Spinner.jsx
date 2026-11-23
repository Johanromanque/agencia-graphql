export function Spinner({ mensaje = 'Cargando información...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-slate-600" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600" />
      <p className="mt-4 text-sm font-medium">{mensaje}</p>
    </div>
  );
}
