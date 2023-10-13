import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/interfaces/publicaciones.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
  [x: string]: any;
  constructor(public router: Router) { }


  lstPublicaciones: Publicacion[] = [];

  publicacion: Publicacion = {
    id: 1,
    notificacion: 'hahaha',
    publicacion: 12344,
    cierre: 2123,
    estado: true
  }
  publicacion2: Publicacion = {
    id: 2,
    notificacion: 'ssss',
    publicacion: 1234,
    cierre: 121212,
    estado: false,

  }
  publicacion3: Publicacion = {
    id: 3,
    notificacion: 'aaaaa',
    publicacion: 231212,
    cierre: 44323123,
    estado: false,

  }



  ngOnInit() {
    this.lstPublicaciones.push(this.publicacion);
    this.lstPublicaciones.push(this.publicacion2);
    this.lstPublicaciones.push(this.publicacion3);

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
      cancelButtonText:'cancelar',
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Editar?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'aceptar',
      cancelButtonText: 'cancelar',
      reverseButtons: true

    })

  }


  }


