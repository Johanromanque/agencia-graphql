import { useEffect, useMemo, useState } from 'react';
import { obtenerDestinos } from '../services/destinosService';

export function useDestinos() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [regionSeleccionada, setRegionSeleccionada] = useState('Todas');

  useEffect(() => {
    let activo = true;

    async function cargarDestinos() {
      try {
        setCargando(true);
        setError(null);
        const data = await obtenerDestinos();
        if (activo) {
          setDestinos(data);
        }
      } catch (err) {
        if (activo) {
          setError(err.message || 'No se pudieron cargar los destinos.');
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarDestinos();

    return () => {
      activo = false;
    };
  }, []);

  const regiones = useMemo(() => {
    const unicas = Array.from(new Set(destinos.map((d) => d.region)));
    return ['Todas', ...unicas];
  }, [destinos]);

  const destinosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    return destinos.filter((destino) => {
      const coincideRegion =
        regionSeleccionada === 'Todas' || destino.region === regionSeleccionada;
      const coincideTexto =
        !termino ||
        destino.nombre.toLowerCase().includes(termino) ||
        destino.pais.toLowerCase().includes(termino) ||
        destino.actividadesPopulares.some((act) =>
          act.toLowerCase().includes(termino)
        );
      return coincideRegion && coincideTexto;
    });
  }, [destinos, busqueda, regionSeleccionada]);

  return {
    destinosFiltrados,
    regiones,
    cargando,
    error,
    busqueda,
    regionSeleccionada,
    setBusqueda,
    setRegionSeleccionada,
  };
}
