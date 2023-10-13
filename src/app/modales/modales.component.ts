import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent {
  constructor(config: BsDatepickerConfig, private localeService: BsLocaleService) {
    config.dateInputFormat = 'DD/MM/YYYY';
    this.localeService.use('esLocale');
  }
  showModal() {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'complete los campos vacios para poder continuar!',
      footer: 'hay campos que aun no ha llenado'
    })
  }
  publicar() {
    showModal: Boolean;
    Swal.fire({
      title: 'confirmacion',
      color: 'black',
      text: "¿desea publicar el contenido?",
      icon: 'warning',
      input: 'checkbox',
      inputPlaceholder: 'publicar',

      background: 'linear-gradient(#228B22,#00FF00)',


      confirmButtonText: 'publicar',
      html: '<input type="text" id="datepicker" class="parrafo">',
      confirmButtonColor: 'green',
      showCancelButton: true,
      cancelButtonText: 'cancelar',
      cancelButtonColor: 'red',
      showCloseButton: true,
      footer: '<span>Gracias por su visita</span>',
      customClass: {
        title: 'titulo',
        input: 'input',
        confirmButton: 'boton_confirmacion',
        footer: 'mi_fotter'
      },
    })
  }
  eliminar() {
    Swal.fire({
      title: '¿Eliminar?',
      text: "Los cambios no son reversibles!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008d00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar',
      cancelButtonText: 'cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'tu anuncio ha sido eliminado.',
          'success'

        )
      }
    })

  }
}

