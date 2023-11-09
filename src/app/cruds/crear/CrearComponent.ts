import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {FormGroup, NgForm } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { aplicaciones } from '../../interfaces/aplicaciones.interface';
import { Secciones } from 'src/app/interfaces/secciones.interfaces';
import { parseJSON } from 'jquery';
import { zonas } from 'src/app/interfaces/zonas.interface';
import { publicInfo } from 'src/app/interfaces/publicInfo.interface';
import { Publicacion } from '../../interfaces/publicaciones.interface';
import { ImageLoader } from '@angular/common';





@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent {
  [x: string]: any;
  registro: FormGroup | undefined;
  options = [
    { label: 'login', selected: false },
    { label: 'principal', selected: false },
    { label: 'crear', selected: false },
    { label: 'editar', selected: false }
  ];
  // @ViewChild('miForm')
  // form!: NgForm;
  titulo!: string;
  imagenSeleccionada: File | any;
  contenido!: string;

  selectedAplicacion = '';

  mostrarCheck: boolean = false;
  checked: boolean = false;
  constructor(private router: Router, public modalServices: ModalService) {

  }
  lstRegistro: publicInfo[] = [];
  Registro: publicInfo = {
    id: 0,
    titulo: '',
    contenido: '',
    img: '', // Asignar una URL de imagen válida aquí
    aplicacion: '',
    seccion: '',
    area: '',
  };

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
  catalagoZonas: zonas[] = [];
  zona1: zonas = {
    id: 1,
    zona: 'bajio',
  };
  zona2: zonas = {
    id: 1,
    zona: 'Noroeste',
  };
  zona3: zonas = {
    id: 1,
    zona: 'Centro',

  };




  ngOnInit() {
    this.catalagoAplicaciones.push(this.aplicacion);
    this.catalagoAplicaciones.push(this.aplicacion2);
    this.catalagoAplicaciones.push(this.aplicacion3);

    this.lstSecciones.push(this.seccion);
    this.lstSecciones.push(this.seccion2);
    this.lstSecciones.push(this.seccion3);
    this.lstSecciones.push(this.seccion4);

    this.catalagoZonas.push(this.zona1);
    this.catalagoZonas.push(this.zona2);
    this.catalagoZonas.push(this.zona3);
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
  // evaluarFormulario(): boolean {

  //   if (this.validarFormulario()) {
  //     console.log('Formulario valido');
  //     return true;
  //   } else {
  //     console.log('faltan campos obligatorios');
  //     return false;
  //   }

  // }
  // validarFormulario(): boolean {
  //   const camposVacios = Object.keys(this.guardarRegistro).filter(
  //     controlName => this.guardarRegistro[controlName].hasError('required')
  //   );

  //   if (camposVacios.length > 0) {
  //     const camposVaciosMsg = camposVacios.join(', ');
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Hay campos vacíos en: ' + camposVaciosMsg,
  //       footer: 'Verifique si su información está completa'
  //     });
  //     return false;
  //   } else {
  //     // Lógica para guardar la sección
  //     // ...

  //     // Después de guardar, redirigir a la página de inicio
  //     this.router.navigate(['/panelControl']);
  //     return true
  //   }

  seleccionarImagen(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }

  guardarImagen() {
    const formData = new FormData();
    formData.append('imagen', this.imagenSeleccionada);

    this['http'].post('/api/subir-imagen', formData).subscribe(() => {
      // Lógica para manejar la respuesta del servidor
    });
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


    let objApp: any

    objApp = this.catalagoAplicaciones.filter(app => app.id == parseInt(this.selectedAplicacion));




    let seccionesActivas: Secciones[] = [];
    this.lstSecciones.forEach((seccion) => {
      if (seccion.activo == true) {
        // let aplicacion: aplicaciones[];
        seccionesActivas.push(seccion);

        this.selectedAplicacion = ''; // Restablece la selección de la aplicación
        this.lstSecciones.forEach(item => item.activo = false); // Restablece las selecciones de las secciones



      }
    });




    seccionesActivas.forEach((seccion) => {
      let app: aplicaciones = {
        id: objApp[0].id,
        aplicacion: objApp[0].aplicacion,
        seccion: {
          id: seccion.id,
          seccion: seccion.seccion,
          activo: true
        }
      }

      this.lstAplicaciones.push(app);

    });


  }
  eliminarRegistro(registro: any) {
    let id = this.lstAplicaciones.indexOf(registro);
    if (id != 0) {
      this.lstAplicaciones.splice(id);
    }
  }
  guardarRegistro() {

    const nuevaPublicacion: publicInfo = {
      id: this.lstRegistro.length + 1,
      titulo: this.titulo.replace(/[^a-zA-Z\s]/g, ''),
      contenido: this.contenido = this['Publicacion'].toUpperCase(),
      img: 'https://ejemplo.com/ruta-a-tu-imagen.jpg',
      aplicacion: this.selectedAplicacion,
      seccion: '',
      area: ''
    }
    if (this.imagenSeleccionada) {
      // Leer la imagen y convertirla a Base64
      const reader = new FileReader();
      reader.onload = (event) => {
        // Obtener la representación Base64 de la imagen
        nuevaPublicacion.img = this.imagenSeleccionada;

        // Guardar la nuevaPublicacion en el almacenamiento local
        this.guardarPublicacionEnLocalStorage(nuevaPublicacion);

        // Realizar otras operaciones necesarias
        // ...

        // Limpiar la selección de imagen
        this.imagenSeleccionada = null;
      };

      reader.readAsDataURL(this.imagenSeleccionada);
    } else {
      console.error('No se ha seleccionado una imagen.');
    }
    this.lstRegistro.push(nuevaPublicacion);
  }

  guardarPublicacionEnLocalStorage(publicacion: publicInfo) {
    // Convierte la publicación en JSON y guárdala en el almacenamiento local
    const publicacionStr = JSON.stringify(publicacion);
    localStorage.setItem('publicacion', publicacionStr);

    // Puedes usar sessionStorage en lugar de localStorage si deseas que los datos sean temporales.
    // sessionStorage.setItem('publicacion', publicacionStr);
    this.router.navigate(['/panelControl']);
  }






  //     this.lstRegistro.push(nuevaPublicacion);
  //   }

  // this.titulo = '';
  // this.clave = '';
  // this.selectedOption = '';
  // this.modalService.closeModal(
  // }

}







