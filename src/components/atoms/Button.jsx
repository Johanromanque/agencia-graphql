const ESTILOS = {
  primary: 'bg-sky-600 text-white hover:bg-sky-700 disabled:bg-slate-300',
  secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 disabled:opacity-50',
  selected: 'bg-emerald-600 text-white hover:bg-emerald-700',
};

export function Button({
  children,
  onClick,
  type = 'button',
  variante = 'primary',
  disabled = false,
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition cursor-pointer disabled:cursor-not-allowed ${
        ESTILOS[variante] || ESTILOS.primary
      } ${className}`}
    >
      {children}
    </button>
  );
}
