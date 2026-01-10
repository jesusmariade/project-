export interface Producto {
  nombre: string;
  descripcion: string;
  tipo: string;
  slug: string;
  imagen?: string;
  imagenes?: string[];
  caracteristicas?: string[];
  medidas?: string[];
}