export const productos = [
  {
    nombre: "Tina de cuajada 3000",
    slug: "tina-cuajada-3000",
    tipo: "Maquinaria",
    descripcion: "Equipo en acero inoxidable para procesos lácteos...",
    // AGREGAMOS ESTO:
    imagenes: [
      "/imagenes/tina-frontal.jpg", 
      "/imagenes/tina-lateral.jpg", 
      "/imagenes/tina-detalle.jpg"
    ],
    // Mantenemos 'imagen' por compatibilidad con otros componentes no salen las imagenes ayudaaaaaa :(
    imagen: "/imagenes/tina-frontal.jpg" 
  },
  // ... otros productos
]