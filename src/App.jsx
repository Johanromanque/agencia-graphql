import { HashRouter, Route, Routes } from 'react-router';
import { MainLayout } from './components/templates/MainLayout';
import { Inicio } from './pages/Inicio';
import { Destinos } from './pages/Destinos';
import { DetalleDestino } from './pages/DetalleDestino';
import { PaginaNoEncontrada } from './pages/PaginaNoEncontrada';

export default function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:destinoId" element={<DetalleDestino />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}
