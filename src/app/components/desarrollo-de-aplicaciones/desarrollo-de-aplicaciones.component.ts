import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollo-de-aplicaciones',
  templateUrl: './desarrollo-de-aplicaciones.component.html',
  styleUrls: ['./desarrollo-de-aplicaciones.component.css']
})
export class DesarrolloDeAplicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /* DE LAS TRES CARD */
  titleCard1: string = 'APP DELIVERY MÓVIL';
  titleCardDetail1: string = 'Desarrollamos tus aplicaciones para la entrega de pedidos inmediatos usando tecnolgía como Flutter, Dart, PostgreSQL, API - Node JS';
  titleCard2: string = 'TIENDA ONLINE';
  titleCardDetail2: string = 'Incrementa tus ventas con tu nueva tienda virtual que te ofrecemos en The Academy. Angular, PostgreSQL, API Rest - PHP 8, MySQL';
  titleCard3: string = 'SISTEMAS DE INFORMACIÓN';
  titleCardDetail3: string = 'Encuentra el sistema que necesita para tu empresa o tesis en tecnolgías como Angular, Flutter, PostgreSQL, MySQL, Firebase, Wordpress.';
  titleCard4: string = 'SITIOS WEB';
  titleCardDetail4: string = 'Si quieres tener tu sitio web de forma rápida, ¡The Academy! esta para el diseño de tu sitio vinculados con redes sociales y uso de posicionamiento SEO.';
  titleCard5: string = 'TU PRIMER APP MÓVIL';
  titleCardDetail5: string = 'Desarrollo, diseño, asesoramiento y capacitación en el desarrollo de aplicaciones moviles, usando Flutter, Dart, Api Rest y PostgreSQL';
  masInfo: String='Más Información ';




}
