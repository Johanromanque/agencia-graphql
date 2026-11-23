import { Link } from 'react-router';

export function PaginaNoEncontrada() {
  return (
    <section className="py-16 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-sky-600">Error 404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Página no encontrada</h1>
      <p className="mt-2 text-sm text-slate-600">
        La ruta que buscas no existe en nuestra agencia de viajes.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
      >
        Ir al inicio
      </Link>
    </section>
  );
}
