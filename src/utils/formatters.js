export function formatearPrecioUSD(valor) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(valor);
}

export function calcularNoches(fechaInicio, fechaFin) {
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);
  const diferenciaMs = fin - inicio;
  const noches = Math.round(diferenciaMs / (1000 * 60 * 60 * 24));
  return noches > 0 ? noches : 1;
}
