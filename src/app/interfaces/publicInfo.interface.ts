import { Publicacion } from './publicaciones.interface';

export interface publicInfo {
notificacion:string;
publicacion: Date;
cierre: Date;
estado: boolean;
  id: number;
  titulo: string;
  contenido: string;
  img: string;
  aplicacion: string;
  seccion: string;
  area: string;

}

