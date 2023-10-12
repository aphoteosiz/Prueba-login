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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿seguro que desea eliminar este archivo?',
      text: "esta accion no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si eliminar',
      cancelButtonText: 'cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'eliminado',
          'su archivo ha sido eliminado',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'su archivo esta a salvo',
          'error'
        )
      }
    })
  }




}



    //   Swal.fire({
    //     title: 'confirmacion',
    //     text: "¿desea publicar el contenido?",
    //     icon: 'warning',
    //     input: 'checkbox',
    //     inputPlaceholder: 'publicar',
    //     onOpen: function () {
    //       $('#datetimepicker').datetimepicker({
    //         format: 'DD/MM/YYYY hh:mm A',
    //         defaultDate: new Date()
    //       });
    //     },

    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'si publicar!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         'su contenido ha sido publicado!',
    //         '',
    //         'success'

    //       )
    //     }
    //   }


    //   )
    // }



