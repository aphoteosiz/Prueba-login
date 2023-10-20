import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicaciones.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalService } from 'src/app/services/modal.service';
import { NgModel } from '@angular/forms';
import { calendar } from 'ngx-bootstrap/chronos/moment/calendar';




@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
  // @HostListener("widows: scroll", ['event'])
  // doSometingOninternalScroll($event: Event) {
  //   let scrollOfset = $event.target.children[0].scrollTop;
  //   console.log("window:scroll: ", scrollOfset);
  // }
  @ViewChild('fullscreenModal') modal: any;
  selectedDate: boolean = false;



  constructor(public router: Router, public modalServices: ModalService) { }
  esPublicar: boolean = false;




  lstPublicaciones: Publicacion[] = [];

  publicacion: Publicacion = {
    id: 1,
    notificacion: 'hahaha',
    publicacion: 12344,
    cierre: 2123,
    estado: true,
    acciones: true,

  }
  publicacion2: Publicacion = {
    id: 2,
    notificacion: 'ssss',
    publicacion: 1234,
    cierre: 121212,
    estado: false,
    acciones: true,

  }
  publicacion3: Publicacion = {
    id: 3,
    notificacion: 'aaaaa',
    publicacion: 231212,
    cierre: 44323123,
    estado: true,
    acciones: true,


  }
  publicacion4: Publicacion = {
    id: 4,
    notificacion: 'bbbbb',
    publicacion: 121231,
    cierre: 3221321,
    estado: false,
    acciones: true,


  }



  ngOnInit() {
    this.lstPublicaciones.push(this.publicacion);
    this.lstPublicaciones.push(this.publicacion2);
    this.lstPublicaciones.push(this.publicacion3);
    this.lstPublicaciones.push(this.publicacion4);

    console.log(this.lstPublicaciones);
  }

  eliminar() {
    Swal.fire({
      title: '¿seguro de eliminar?',
      text: "esta accion no se puede revertir",
      icon: 'question',
      iconColor: 'red',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'si eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho',
          'tu anuncio ha sido eliminado',
          'success'
        )
      }
    })
  }
  irAcrear() {
    this.router.navigate(['/crear'])
  }
  editar() {
    Swal.fire({
      title: '¿editar?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'editar',
      cancelButtonText: 'cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

      }
    })
  }
  compartir() {
    Swal.fire({
      title: '¿seguro que quieres publicar esto?',

      showCancelButton: true,
      icon: 'question',
      cancelButtonText: 'cancelar',
      cancelButtonColor: 'red',
      confirmButtonText: 'publicar?',
      confirmButtonColor: 'green',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('tu contenido se ha publicado', '', 'success')
      }
    })
  }
  cerrar() {
    Swal.fire({
      title: 'Cargando...',
      allowEscapeKey: false,
      allowOutsideClick: true,
      showConfirmButton: false
    });

    Swal.showLoading();
    setTimeout(() => {
      Swal.close();
    }, 1000);
  }
  ver() { }
  mostrarModal() {
    console.log("modal");

    this.modalServices.mostrarModal();

  }
  cancel() {


  }
  resetDate() {
    this.selectedDate = false
  }
  publicar() {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'tu publicacion se ha realizado',
      showConfirmButton: false,
      timer: 1500
    })
    this.modalServices.modal = false;
    this.esPublicar = false;
    this.selectedDate = true;

     this.modalServices.modal = false;
    this.esPublicar = false;
    this.selectedDate = true;

  }

  cancelar() {
    this.modalServices.modal = false;
    this.esPublicar = false;
    this.selectedDate = true;
  }

}




