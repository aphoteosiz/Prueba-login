import { Component } from '@angular/core';
// import { ModalService } from './modal.service';
// import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { Router } from '@angular/router';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: any;

publicar() {
throw new Error('Method not implemented.');
}
  // title = 'modal';
  // constructor(public modalService: ModalService) { }
  constructor (public modalService:ModalService, router:Router){}


  // showModal() {
  //   console.log("modal");

  //   this.modalService.showModal();
  // }

  // closeModal() {

  // }

  // openLogin() {
  //   this.modalService.openLogin();
  // }
  showModal() {
    console.log("modal");

    this.modalService.showModal();
  }


  abrirLogin() {
    //navega al componente login al dar click
    this.router.navigate(['/login']);
  }
  recuperacion() {
    this.router.navigate(['/src/app/auth/recuperacion'])
  }
}
