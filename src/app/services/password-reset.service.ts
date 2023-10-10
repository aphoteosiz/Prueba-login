import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  private resetToken: string | null = null;

  constructor() { }
  requestpasswordReset(email: string): boolean{
    //solo para simular el envio de la solicitud de correo
    this.resetToken = 'token';
    return true;
  }
  resetPassword(token: string, newPassword: string): boolean{

    if (token == this.resetToken) {
      this.resetToken = null;
      return true;
    }
    return false;
  }
}
