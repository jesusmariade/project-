export interface Producto {
  nombre: string;
  descripcion: string;
  tipo: "maquinaria" | "insumos";
  slug: string;
  imagen?: string;
  imagenes?: string[];
  caracteristicas?: string[];
  medidas?: string[];
}