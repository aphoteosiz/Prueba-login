import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecuperacionComponent } from './auth/recuperacion/recuperacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'inicio', component: DashboardComponent },
  // { path: 'iniciar-sesion', component: LoginComponent },
  {path: 'login', component: LoginComponent},
  { path: 'recuperacion', component:RecuperacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
