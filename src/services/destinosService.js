import { REST_DESTINOS_ENDPOINT } from '../graphql/endpoint';

export async function obtenerDestinos() {
  const response = await fetch(REST_DESTINOS_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Error al obtener los destinos (HTTP ${response.status})`);
  }

  return response.json();
}
