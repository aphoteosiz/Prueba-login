import { Component } from '@angular/core';
import { PasswordResetService } from 'src/app/services/password-reset.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {
  email: string = '';
  newPassword: string = '';
  resetToken: string = '';
  resetSuccess: boolean = false;
  resetError: boolean = false;

  constructor(private passwordResetService: PasswordResetService) { }

  requestPasswordReset() {
    this.resetSuccess = false;
    this.resetError = false;

    if (this.passwordResetService.requestpasswordReset(this.email)) {
      this.resetSuccess = true;
    } else {
      this.resetError = true;
    }
  }

  resetPassword() {
    this.resetSuccess = false;
    this.resetError = false;

    if (this.passwordResetService.resetPassword(this.resetToken, this.newPassword)) {
      this.resetSuccess = true;
    } else {
      this.resetError = true;
    }
  }
}
