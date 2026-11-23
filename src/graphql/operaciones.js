import { gql } from '@apollo/client';

export const GET_OPCIONES_DESTINO = gql`
  query GetOpcionesDestino($destinoId: ID!) {
    detalleDestino(destinoId: $destinoId) {
      id
      nombre
      pais
      descripcion
      imagen
      actividadesPopulares
      vuelos {
        id
        aerolinea
        origen
        fechaSalida
        fechaRegreso
        precio
        escalas
        disponible
        cupos
      }
      hoteles {
        id
        nombre
        estrellas
        ubicacion
        precioPorNoche
        fechaCheckIn
        fechaCheckOut
        disponible
        habitacionesDisponibles
      }
    }
  }
`;
