import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecuperacionComponent } from './auth/recuperacion/recuperacion.component';
import { ModalesComponent } from './modales/modales.component';
import { CrearComponent } from './cruds/crear/CrearComponent';
import { PanelControlComponent } from './pages/panel-control/panel-control.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'inicio', component: DashboardComponent },
  // { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperacion', component: RecuperacionComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'modales', component: ModalesComponent },
  { path: 'botones', component: ModalesComponent },
  { path: 'panelControl', component: PanelControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
