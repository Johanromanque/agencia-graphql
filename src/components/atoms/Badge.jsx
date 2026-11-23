const VARIANTES = {
  neutral: "bg-slate-100 text-slate-700",
  sky: "bg-sky-100 text-sky-800",
  success: "bg-emerald-100 text-emerald-800",
  danger: "bg-rose-100 text-rose-800",
  amber: "bg-amber-100 text-amber-800",
};

export function Badge({ children, variante = "neutral" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        VARIANTES[variante] || VARIANTES.neutral
      }`}
    >
      {children}
    </span>
  );
}
