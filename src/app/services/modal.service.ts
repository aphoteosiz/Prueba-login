import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  public modal: boolean = false;

  showModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  }







