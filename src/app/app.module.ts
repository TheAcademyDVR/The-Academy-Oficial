import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactosComponent } from './components/contactos/contactos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AsesoriaAcademicaComponent } from './components/asesoria-academica/asesoria-academica.component';
import { DesarrolloDeAplicacionesComponent } from './components/desarrollo-de-aplicaciones/desarrollo-de-aplicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    FooterComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
