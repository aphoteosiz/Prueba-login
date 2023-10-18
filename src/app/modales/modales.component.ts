import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent {
  modalService: any;
  constructor(config: BsDatepickerConfig, private localeService: BsLocaleService) {
    config.dateInputFormat = 'DD/MM/YYYY';
    this.localeService.use('esLocale');
    activo: true;
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
  checkprueba() {
    cancel(){
      console.log("entrooooooo");

      this.modalService.modal = false;
    }


    save() {
      console.log("entrooooooo");

      this.modalService.modal = false;
    }
    closeModal(){
      this.modalService.modal = false;
    }
  }

  }
}
function save() {
  throw new Error('Function not implemented.');
}

