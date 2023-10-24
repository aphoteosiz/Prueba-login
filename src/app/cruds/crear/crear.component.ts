import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormBuilder,FormGroup,FormArray,FormControl,Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { aplicaciones } from '../../interfaces/aplicaciones.interface';
import { secciones } from 'src/app/interfaces/secciones.interfaces';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']

})

export class CrearComponent {
   options = [
    { label: 'login', selected: false },
    { label: 'principal', selected: false },
    { label: 'crear', selected: false },
    { label: 'editar', selected: false }
  ];
  @ViewChild('miForm')
  form!: NgForm;
  titulo!: string;
  selectedAplicacion: any ;
  constructor(private router: Router, public modalServices: ModalService) { }

  lstAplicaciones: aplicaciones[] = [];

  aplicacion: aplicaciones = {
    id: 1,
    aplicacion:'SIUP',

  }
  aplicacion2: aplicaciones = {
    id: 2,
    aplicacion: 'ENNIOSS',

  }
  aplicacion3: aplicaciones = {
    id: 3,
    aplicacion: 'PAGINA PRINCIPAL',

  }
  lstSecciones: secciones[] = [];

  seccion: secciones = {
    id: 1,
    seccion: 'login',
  }

  seccion2: secciones = {
    id: 2,
    seccion: 'panel'
  }
  seccion3: secciones = {
    id: 3,
    seccion: 'contratar'
  }
  seccion4: secciones = {
    id: 4,
    seccion: 'pagar'
  }



  ngOnInit() {
    this.lstAplicaciones.push(this.aplicacion);
    this.lstAplicaciones.push(this.aplicacion2);
    this.lstAplicaciones.push(this.aplicacion3);


    console.log(this.lstAplicaciones);
  }

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
  mostrarModal() {
    console.log("modal");

    this.modalServices.mostrarModal();

  }
  mostrarSeleccion(){
    const opcionesSeleccionadas = this.options.filter
  }
}



