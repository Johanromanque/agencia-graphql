export const destinosMock = [
  {
    id: 'tokio',
    nombre: 'Tokio',
    pais: 'Japón',
    region: 'Asia',
    descripcion: 'Metrópoli que combina templos milenarios, gastronomía de clase mundial y tecnología de vanguardia.',
    imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Cruce de Shibuya', 'Templo Senso-ji', 'Tour gastronómico en Tsukiji', 'Mirador Tokyo Skytree'],
  },
  {
    id: 'paris',
    nombre: 'París',
    pais: 'Francia',
    region: 'Europa',
    descripcion: 'Arte, arquitectura icónica y cafés históricos a orillas del río Sena.',
    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Torre Eiffel', 'Museo del Louvre', 'Paseo por Montmartre', 'Crucero por el Sena'],
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    pais: 'Perú',
    region: 'Sudamérica',
    descripcion: 'Capital histórica del Imperio Inca y puerta de entrada a Machu Picchu.',
    imagen: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Machu Picchu', 'Valle Sagrado', 'Montaña de 7 Colores', 'Barrio de San Blas'],
  },
  {
    id: 'cancun',
    nombre: 'Cancún',
    pais: 'México',
    region: 'Norteamérica',
    descripcion: 'Playas de arena blanca, aguas turquesas y vestigios mayas en el Caribe mexicano.',
    imagen: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Snorkel en Isla Mujeres', 'Chichén Itzá', 'Cenotes de Tulum', 'Zona Hotelera'],
  },
  {
    id: 'bariloche',
    nombre: 'San Carlos de Bariloche',
    pais: 'Argentina',
    region: 'Sudamérica',
    descripcion: 'Lagos cristalinos, montañas patagónicas, senderismo y chocolaterías artesanales.',
    imagen: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Circuito Chico', 'Cerro Catedral', 'Navegación Lago Nahuel Huapi', 'Ruta de Chocolaterías'],
  },
  {
    id: 'roma',
    nombre: 'Roma',
    pais: 'Italia',
    region: 'Europa',
    descripcion: 'La Ciudad Eterna, un museo al aire libre repleto de historia romana y cocina tradicional.',
    imagen: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
    actividadesPopulares: ['Coliseo Romano', 'Fontana di Trevi', 'Museos Vaticanos', 'Trastevere'],
  },
];

export const opcionesPorDestinoMock = {
  tokio: {
    vuelos: [
      { id: 'v-tk-1', aerolinea: 'LATAM + JAL', origen: 'Santiago (SCL)', fechaSalida: '2026-12-10', fechaRegreso: '2026-12-20', precio: 1450, escalas: '1 escala', disponible: true, cupos: 6 },
      { id: 'v-tk-2', aerolinea: 'ANA All Nippon', origen: 'Santiago (SCL)', fechaSalida: '2026-12-12', fechaRegreso: '2026-12-22', precio: 1620, escalas: '1 escala', disponible: true, cupos: 3 },
      { id: 'v-tk-3', aerolinea: 'Air Canada', origen: 'Santiago (SCL)', fechaSalida: '2026-12-15', fechaRegreso: '2026-12-25', precio: 1320, escalas: '2 escalas', disponible: false, cupos: 0 },
    ],
    hoteles: [
      { id: 'h-tk-1', nombre: 'Shinjuku Granbell Hotel', estrellas: 4, ubicacion: 'Shinjuku', precioPorNoche: 165, fechaCheckIn: '2026-12-11', fechaCheckOut: '2026-12-20', disponible: true, habitacionesDisponibles: 4 },
      { id: 'h-tk-2', nombre: 'Park Hotel Tokyo', estrellas: 5, ubicacion: 'Minato', precioPorNoche: 260, fechaCheckIn: '2026-12-11', fechaCheckOut: '2026-12-20', disponible: true, habitacionesDisponibles: 2 },
    ],
  },
  paris: {
    vuelos: [
      { id: 'v-pa-1', aerolinea: 'Air France', origen: 'Santiago (SCL)', fechaSalida: '2026-12-08', fechaRegreso: '2026-12-18', precio: 1180, escalas: 'Directo', disponible: true, cupos: 8 },
      { id: 'v-pa-2', aerolinea: 'Iberia', origen: 'Santiago (SCL)', fechaSalida: '2026-12-14', fechaRegreso: '2026-12-24', precio: 990, escalas: '1 escala', disponible: true, cupos: 5 },
    ],
    hoteles: [
      { id: 'h-pa-1', nombre: 'Hôtel Le Marais Boutique', estrellas: 4, ubicacion: 'Le Marais', precioPorNoche: 210, fechaCheckIn: '2026-12-09', fechaCheckOut: '2026-12-18', disponible: true, habitacionesDisponibles: 5 },
      { id: 'h-pa-2', nombre: 'Pullman Paris Tour Eiffel', estrellas: 5, ubicacion: 'Champ de Mars', precioPorNoche: 340, fechaCheckIn: '2026-12-09', fechaCheckOut: '2026-12-18', disponible: false, habitacionesDisponibles: 0 },
    ],
  },
  cusco: {
    vuelos: [
      { id: 'v-cu-1', aerolinea: 'SKY Airline', origen: 'Santiago (SCL)', fechaSalida: '2026-12-04', fechaRegreso: '2026-12-10', precio: 310, escalas: '1 escala', disponible: true, cupos: 12 },
      { id: 'v-cu-2', aerolinea: 'LATAM Airlines', origen: 'Santiago (SCL)', fechaSalida: '2026-12-06', fechaRegreso: '2026-12-12', precio: 375, escalas: 'Directo', disponible: true, cupos: 7 },
    ],
    hoteles: [
      { id: 'h-cu-1', nombre: 'Palacio del Inka', estrellas: 5, ubicacion: 'Centro Histórico', precioPorNoche: 195, fechaCheckIn: '2026-12-04', fechaCheckOut: '2026-12-10', disponible: true, habitacionesDisponibles: 6 },
      { id: 'h-cu-2', nombre: 'Tierra Viva Cusco San Blas', estrellas: 3, ubicacion: 'San Blas', precioPorNoche: 92, fechaCheckIn: '2026-12-04', fechaCheckOut: '2026-12-10', disponible: true, habitacionesDisponibles: 9 },
    ],
  },
  cancun: {
    vuelos: [
      { id: 'v-ca-1', aerolinea: 'Copa Airlines', origen: 'Santiago (SCL)', fechaSalida: '2026-12-10', fechaRegreso: '2026-12-17', precio: 540, escalas: '1 escala', disponible: true, cupos: 10 },
      { id: 'v-ca-2', aerolinea: 'Aeroméxico', origen: 'Santiago (SCL)', fechaSalida: '2026-12-11', fechaRegreso: '2026-12-18', precio: 610, escalas: '1 escala', disponible: true, cupos: 4 },
    ],
    hoteles: [
      { id: 'h-ca-1', nombre: 'Live Aqua Beach Resort', estrellas: 5, ubicacion: 'Zona Hotelera', precioPorNoche: 320, fechaCheckIn: '2026-12-10', fechaCheckOut: '2026-12-17', disponible: true, habitacionesDisponibles: 3 },
      { id: 'h-ca-2', nombre: 'Krystal Cancún', estrellas: 4, ubicacion: 'Punta Cancún', precioPorNoche: 175, fechaCheckIn: '2026-12-10', fechaCheckOut: '2026-12-17', disponible: true, habitacionesDisponibles: 8 },
    ],
  },
  bariloche: {
    vuelos: [
      { id: 'v-ba-1', aerolinea: 'JetSMART', origen: 'Santiago (SCL)', fechaSalida: '2026-12-05', fechaRegreso: '2026-12-11', precio: 220, escalas: '1 escala', disponible: true, cupos: 9 },
      { id: 'v-ba-2', aerolinea: 'Aerolíneas Argentinas', origen: 'Santiago (SCL)', fechaSalida: '2026-12-07', fechaRegreso: '2026-12-13', precio: 280, escalas: 'Directo', disponible: true, cupos: 5 },
    ],
    hoteles: [
      { id: 'h-ba-1', nombre: 'Llao Llao Resort', estrellas: 5, ubicacion: 'Av. Bustillo Km 25', precioPorNoche: 350, fechaCheckIn: '2026-12-05', fechaCheckOut: '2026-12-11', disponible: true, habitacionesDisponibles: 2 },
      { id: 'h-ba-2', nombre: 'Hotel Cacique Inacayal', estrellas: 4, ubicacion: 'Costanera Lago Nahuel Huapi', precioPorNoche: 145, fechaCheckIn: '2026-12-05', fechaCheckOut: '2026-12-11', disponible: true, habitacionesDisponibles: 7 },
    ],
  },
  roma: {
    vuelos: [
      { id: 'v-ro-1', aerolinea: 'ITA Airways', origen: 'Santiago (SCL)', fechaSalida: '2026-12-09', fechaRegreso: '2026-12-19', precio: 1090, escalas: '1 escala', disponible: true, cupos: 6 },
      { id: 'v-ro-2', aerolinea: 'KLM', origen: 'Santiago (SCL)', fechaSalida: '2026-12-13', fechaRegreso: '2026-12-23', precio: 1150, escalas: '1 escala', disponible: false, cupos: 0 },
    ],
    hoteles: [
      { id: 'h-ro-1', nombre: 'Hotel Artemide', estrellas: 4, ubicacion: 'Via Nazionale', precioPorNoche: 225, fechaCheckIn: '2026-12-10', fechaCheckOut: '2026-12-19', disponible: true, habitacionesDisponibles: 4 },
      { id: 'h-ro-2', nombre: 'Donna Camilla Savelli', estrellas: 4, ubicacion: 'Trastevere', precioPorNoche: 240, fechaCheckIn: '2026-12-10', fechaCheckOut: '2026-12-19', disponible: true, habitacionesDisponibles: 3 },
    ],
  },
};
