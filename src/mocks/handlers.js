import { http, graphql, HttpResponse, delay } from 'msw';
import { GRAPHQL_ENDPOINT, REST_DESTINOS_ENDPOINT } from '../graphql/endpoint';
import { destinosMock, opcionesPorDestinoMock } from './data';

const agenciaGraphql = graphql.link(GRAPHQL_ENDPOINT);

export const handlers = [
  // API REST Mock: Lista de destinos disponibles
  http.get(REST_DESTINOS_ENDPOINT, async () => {
    await delay(500);
    return HttpResponse.json(destinosMock, { status: 200 });
  }),

  // API GraphQL Mock: Vuelos y hoteles por destino
  agenciaGraphql.query('GetOpcionesDestino', async ({ variables }) => {
    await delay(600);
    const { destinoId } = variables;

    const destino = destinosMock.find((item) => item.id === destinoId);
    const opciones = opcionesPorDestinoMock[destinoId];

    if (!destino || !opciones) {
      return HttpResponse.json({
        errors: [
          {
            message: `No se encontraron vuelos ni hoteles para el destino "${destinoId}".`,
          },
        ],
      });
    }

    return HttpResponse.json({
      data: {
        detalleDestino: {
          id: destino.id,
          nombre: destino.nombre,
          pais: destino.pais,
          descripcion: destino.descripcion,
          imagen: destino.imagen,
          actividadesPopulares: destino.actividadesPopulares,
          vuelos: opciones.vuelos,
          hoteles: opciones.hoteles,
        },
      },
    });
  }),
];
