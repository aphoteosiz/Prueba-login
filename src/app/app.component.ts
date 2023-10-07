import { Component } from '@angular/core';
// import { ModalService } from './modal.service';
// import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'modal';
  // constructor(public modalService: ModalService) { }
  constructor (private router:Router){}


  // showModal() {
  //   console.log("modal");

  //   this.modalService.showModal();
  // }

  // closeModal() {

  // }

  // openLogin() {
  //   this.modalService.openLogin();
  // }

  abrirLogin() {
    //navega al componente login al dar click
    this.router.navigate(['/login']);
  }
}
