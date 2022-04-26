import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoriaAcademicaComponent } from './components/asesoria-academica/asesoria-academica.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DesarrolloDeAplicacionesComponent } from './components/desarrollo-de-aplicaciones/desarrollo-de-aplicaciones.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'asesoria-academica', component: AsesoriaAcademicaComponent },
  { path: 'desarrollo-de-sistemas', component: DesarrolloDeAplicacionesComponent },
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  LoginComponent,
  NosotrosComponent,
  PagenotfoundComponent,
  ContactosComponent,
  CursosComponent,
  AsesoriaAcademicaComponent,
  DesarrolloDeAplicacionesComponent
];
