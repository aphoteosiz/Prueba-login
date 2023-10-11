import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent {
  showModal() {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'complete los campos vacios para poder continuar!',
      footer: 'hay campos que aun no ha llenado'
    })
  }
  publicar() {
    Swal.fire({
      title: 'confirmacion',
      text: "¿desea publicar el contenido?",
      icon: 'warning',
      input: 'checkbox',
      inputPlaceholder: 'publicar',
      
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si publicar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'su contenido ha sido publicado!',
          '',
          'success'

        )
      }
    }


    )
  }

}

