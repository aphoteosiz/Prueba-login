import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { aplicaciones } from '../../interfaces/aplicaciones.interface';
import { Secciones } from 'src/app/interfaces/secciones.interfaces';
import { parseJSON } from 'jquery';




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

  selectedAplicacion = '';

  mostrarCheck: boolean = false;
  checked: boolean = false;
  constructor(private router: Router, public modalServices: ModalService) { }

  catalagoAplicaciones: aplicaciones[] = [];

  lstAplicaciones: aplicaciones[] = [];

  aplicacion: aplicaciones = {
    id: 1,
    aplicacion: 'SIUP',
    seccion: {
      id: 0,
      seccion: '',
      activo: false
    }
  };
  aplicacion2: aplicaciones = {
    id: 2,
    aplicacion: 'ENNIOSS',
    seccion: {
      id: 0,
      seccion: '',
      activo: false
    }
  };
  aplicacion3: aplicaciones = {
    id: 3,
    aplicacion: 'PAGINA PRINCIPAL',
    seccion: {
      id: 0,
      seccion: '',
      activo: false
    }
  };
  lstSecciones: Secciones[] = [];

  seccion: Secciones = {
    id: 1,
    seccion: 'login',
    activo: false
  };

  seccion2: Secciones = {
    id: 2,
    seccion: 'panel',
    activo: false
  };
  seccion3: Secciones = {
    id: 3,
    seccion: 'contratar',
    activo: false
  };
  seccion4: Secciones = {
    id: 4,
    seccion: 'pagar',
    activo: false
  };




  ngOnInit() {
    this.catalagoAplicaciones.push(this.aplicacion);
    this.catalagoAplicaciones.push(this.aplicacion2);
    this.catalagoAplicaciones.push(this.aplicacion3);

    this.lstSecciones.push(this.seccion);
    this.lstSecciones.push(this.seccion2);
    this.lstSecciones.push(this.seccion3);
    this.lstSecciones.push(this.seccion4);
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
        Swal.fire('tus cambios han sido guardados!', '', 'success');
      } else if (confirm.isDenied) {
        Swal.fire('tus cambios no se han guardado', '', 'info');
      }

      this.router.navigate(['/panelControl']);
    });
  }
  evaluarFormulario(): boolean {

    if (this.validarFormulario()) {
      console.log('Formulario valido');
      return true;
    } else {
      console.log('faltan campos obligatorios');
      return false;
    }

  }
  validarFormulario(): boolean {
    if (this.form.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'su notoficacion ha sido guardada',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/panelControl']);
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'hay campos vacios!',
        footer: 'verifique si su informacion esta completa'
      });
      return false;
    }





  }
  mostrarModal() {
    console.log("modal");

    this.modalServices.mostrarModal();

  }
  mostrarSeleccion() {
    const opcionesSeleccionadas = this.options.filter;
  }
  closeDialog() {
    this.modalServices.closeModal();

  }
  cambio(app: any) {


    console.log((app.target as HTMLSelectElement).value);
    this.selectedAplicacion = (app.target as HTMLSelectElement).value;
    this.mostrarCheck = true;


    console.log("app selected ", parseJSON(this.selectedAplicacion));


  }
  checkeado() {
    if (this.checked) {
      console.log('check seleccionado');
    }
    else {
      console.log('check no seleccionado');
    }
  }
  guardarSeccion() {

    console.log('selected', this.selectedAplicacion);
    console.log('seccion', this.lstSecciones);


    let objApp: any

    objApp = this.catalagoAplicaciones.filter(app => app.id == parseInt(this.selectedAplicacion));


    console.log('OBJETOOOOOOOOO A LLENAR', objApp);

    let seccionesActivas: Secciones[] = [];
    this.lstSecciones.forEach((seccion) => {
      if (seccion.activo == true) {
        // let aplicacion: aplicaciones[];
        seccionesActivas.push(seccion);



      }
    });




    seccionesActivas.forEach((seccion) => {
      let app: aplicaciones = {
        id: objApp.id,
        aplicacion: objApp.aplicacion,
        seccion: {
          id: seccion.id,
          seccion: seccion.seccion,
          activo: true
        }
      }

      this.lstAplicaciones.push(app);

    });


  }
}
