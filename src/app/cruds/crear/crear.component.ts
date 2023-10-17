import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  @ViewChild('miForm')
  form!: NgForm;
  titulo!: string;
  constructor(private router: Router) { }

  salir() {
    Swal.fire({
      title: '¿salir sin guardar?',
      icon: 'warning',
      confirmButtonColor: 'green',
      showCancelButton: true,
      confirmButtonText: 'guardar',
      cancelButtonText: 'Cancelar',
      showDenyButton: true,
      denyButtonText: 'salir sin guardar',
      allowEscapeKey: false,
      customClass: {
        popup: 'my-popup'
      },

      didOpen: (popup) => {
        console.log(popup);
      }


    }).then((confirm) => {
      if (confirm.isConfirmed) {
        Swal.fire('tus cambios han sido guardados!', '', 'success')
      } else if (confirm.isDenied) {
        Swal.fire('tus cambios no se han guardado', '', 'info')
      }

      this.router.navigate(['/panelControl']);
    });
  }
  evaluarFormulario():boolean {

    if (this.validarFormulario()) {
      console.log('Formulario valido');
      return true;
    } else {
      console.log('faltan campos obligatorios');
      return false;
    }

  }
  validarFormulario(): boolean{
    if (this.form.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'su notoficacion ha sido guardada',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/panelControl']);
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'hay campos vacios!',
        footer: 'verifique si su informacion esta completa'
      })
      return false;
    }





  }
}



