import { Link, NavLink } from 'react-router';

export function Navbar() {
  const enlaceClase = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-sky-600 text-white'
        : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-sky-700">
          Horizonte Viajes
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={enlaceClase}>
            Inicio
          </NavLink>
          <NavLink to="/destinos" className={enlaceClase}>
            Destinos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
