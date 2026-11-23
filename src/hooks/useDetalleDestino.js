import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_OPCIONES_DESTINO } from '../graphql/operaciones';
import { calcularNoches } from '../utils/formatters';

export function useDetalleDestino(destinoId) {
  const [vueloSeleccionado, setVueloSeleccionado] = useState(null);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const { data, loading, error } = useQuery(GET_OPCIONES_DESTINO, {
    variables: { destinoId },
    skip: !destinoId,
  });

  const detalle = data?.detalleDestino ?? null;

  const vuelosFiltrados = useMemo(() => {
    if (!detalle) return [];
    return soloDisponibles
      ? detalle.vuelos.filter((v) => v.disponible)
      : detalle.vuelos;
  }, [detalle, soloDisponibles]);

  const hotelesFiltrados = useMemo(() => {
    if (!detalle) return [];
    return soloDisponibles
      ? detalle.hoteles.filter((h) => h.disponible)
      : detalle.hoteles;
  }, [detalle, soloDisponibles]);

  const totalEstimado = useMemo(() => {
    const costoVuelo = vueloSeleccionado ? vueloSeleccionado.precio : 0;
    const costoHotel = hotelSeleccionado
      ? hotelSeleccionado.precioPorNoche *
        calcularNoches(hotelSeleccionado.fechaCheckIn, hotelSeleccionado.fechaCheckOut)
      : 0;
    return costoVuelo + costoHotel;
  }, [vueloSeleccionado, hotelSeleccionado]);

  const alternarVuelo = (vuelo) => {
    if (!vuelo.disponible) return;
    setVueloSeleccionado((actual) => (actual?.id === vuelo.id ? null : vuelo));
  };

  const alternarHotel = (hotel) => {
    if (!hotel.disponible) return;
    setHotelSeleccionado((actual) => (actual?.id === hotel.id ? null : hotel));
  };

  const limpiarPlan = () => {
    setVueloSeleccionado(null);
    setHotelSeleccionado(null);
  };

  return {
    detalle,
    vuelosFiltrados,
    hotelesFiltrados,
    loading,
    error: error?.message ?? null,
    vueloSeleccionado,
    hotelSeleccionado,
    soloDisponibles,
    totalEstimado,
    setSoloDisponibles,
    alternarVuelo,
    alternarHotel,
    limpiarPlan,
  };
}
