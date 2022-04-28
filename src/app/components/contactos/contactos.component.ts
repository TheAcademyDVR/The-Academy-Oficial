import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {


  datos:FormGroup;
  constructor(private httpClient:HttpClient) {
    this.datos= new FormGroup({
       email: new FormControl('',[Validators.email, Validators.required]),
      // asunto: new FormControl('',Validators.required),
      nombre: new FormControl('',),
      telefono: new FormControl('',Validators.required),
      tipo: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })

  }

  sendEmail(){
     Notiflix.Loading.circle('Enviando Correo...')
    let params = {
      email:this.datos.value.email,
      asunto:'The Academy - Web',
      mensaje:this.datos.value.mensaje,
      nombre:this.datos.value.nombre,
      telefono:this.datos.value.telefono,
      tipo:this.datos.value.tipo

    }
    console.log(params);

    this.datos.reset();
this.httpClient.post('https://api-email-the-academy.herokuapp.com/sendEmail',params).subscribe(res=>{
  console.log(res)
  Notiflix.Loading.remove();
  Notiflix.Notify.success('Correo enviado exitosamente');


})
// this.httpClient.post('https://the-academy-backend.herokuapp.com/sendEmail',params).subscribe(res=>{
//   console.log(res)
// })
    // this.httpClient.post('http://localhost:3000/sendEmail',params).subscribe(resp=>{
    //   console.log('MARCO ERROR'+resp)

    // });
  }


  ngOnInit(): void {
  }

}
