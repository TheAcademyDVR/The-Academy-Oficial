import { HttpClient } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos:FormGroup;
  constructor(private httpClient:HttpClient) {
    this.datos= new FormGroup({
       email: new FormControl('',[Validators.email, Validators.required]),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })
  }

  sendEmail(){
    Notiflix.Loading.standard('Enviando Correo...')
    let params = {
      email:this.datos.value.email,
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje

    }
    console.log(params);

this.httpClient.post('http://localhost:3000/sendEmail',params).subscribe(res=>{
  console.log(res)
  Notiflix.Loading.remove();
  if(res){
      Notiflix.Notify.success('Correo enviado exitosamente');
  }else{
      Notiflix.Notify.warning('- Correo no enviado - Error de servidor ');
  }

})
// this.httpClient.post('https://the-academy-backend.herokuapp.com/sendEmail',params).subscribe(res=>{
//   console.log(res)
// })
    // this.httpClient.post('http://localhost:3000/sendEmail',params).subscribe(resp=>{
    //   console.log('MARCO ERROR'+resp)

    // });
  }

 titleNeed:  string = 'Tenemos lo que necesitas';
 titleDetailNeed:  string = 'Elige el servicio que necesitas en el desarrollo de aplicaciones, tesis, trabajos academicos y mantenimineto de computadoras. ';
 titleDetailPrice: string = '¡Y al mejor precio!.'

 /* DE LAS TRES CARD */
 titleCard1: string = 'ASESORIA ACADÉMICA';
 titleCardDetail1: string = 'Sabemos que tus conocimientos necesitan refuerzo, por eso te ofrecemos nuestra asesoria para realizar tus trabajos y brindar capacitación en los diversos temas academicos';
 titleCard2: string = 'DESARROLLO DE SOFTWARE';
 titleCardDetail2: string = 'Estamos siempre disponibles para llevar tus ideas en el desarrollo de aplicaciones web, móvil y desktop, para cumplir tus metas academicas o profesionales.';
 titleCard3: string = 'PROYECTOS & TESIS';
 titleCardDetail3: string = 'Si necesitas ayuda para la realización de tu proyectos o tesis de grado. The Academy te asesora y capacita desde el inicio hasta la culminación de tu tesis';
 masInfo: String='Más Información ';


 /* TARGETA DE COSTOS*/
 titleCardCosto: String='Costos básicos de nuestros servicios';
 titleCardDetailCosto: String='Nuestros servicios es rápido y flexible creado para una variedad de necesidades.';
 titleActivity1: String = 'Soporte de Computadoras';
 price1: String = '$20,00';
 titleActivity2: String = 'Proyectos & Tesis';
 price2: String = '$50,00';
 titleActivity3: String = 'Tareas Académicas';
 price3: String = '$5,00';
 titleActivity4: String = 'Instalación de Programas';
 price4: String = '$5,00';
 titleActivity5: String = 'Páginas Web';
 price5: String = '$100,00';
 titleActivity6: String = 'Aplicaciones Móviles';
 price6: String = '$100,00';
 titleActivity7: String = 'Marketing Digital';
 price7: String = '$10,00';
 titleActivity8: String = 'Capacitaciones Virtuales';
 price8: String = '$5,00';



  ngOnInit(): void {
  }

}
