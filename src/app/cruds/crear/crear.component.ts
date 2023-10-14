import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  salir() {
    Swal.fire({
      title: '¿salir sin guardar?',
      icon: 'warning',
      confirmButtonColor: 'green',
      showCancelButton: true,
      confirmButtonText: 'guardar',
      cancelButtonText: 'Cancelar',
      showDenyButton:true,
      denyButtonText: 'salir sin guardar',
      allowEscapeKey: false,
      customClass: {
        popup: 'my-popup'
      },
      didOpen: (popup) => {
        console.log(popup);
      }
    });
  }

}
