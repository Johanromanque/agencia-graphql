export function ErrorMessage({ titulo = 'Ocurrió un problema', mensaje, accion }) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-900">
      <h3 className="text-lg font-bold">{titulo}</h3>
      <p className="mt-1 text-sm text-rose-700">{mensaje}</p>
      {accion && <div className="mt-4">{accion}</div>}
    </div>
  );
}
