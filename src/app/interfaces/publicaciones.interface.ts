import { publicInfo } from './publicInfo.interface';

export interface Publicacion {
  id: number;
  notificacion: string;
  estado: boolean;
  publicacion: number;
  cierre: number;
  acciones: boolean;
  titlulo: string;
}
