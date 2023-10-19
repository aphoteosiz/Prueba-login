import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  public modal: boolean = false;

  mostrarModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  }







