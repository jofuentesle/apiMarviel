import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { RegisterForm } from '../interficies/register-form.interface.ts';
import { Usuario } from '../models/usuario.model.js';

//Declaramos url
const base_url = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {


   //definimos usuario
   public usuarioDB!: Usuario;

  constructor( private http:HttpClient) { }


  //Create User
  createUserBBDD ( data:RegisterForm ) {
    console.log(base_url);
    console.log('Creando user desde servicio' + data.email);

    return this.http.post<RegisterForm>(`${base_url}/usuarios`, data)
    //Guardamos token localStorage
    .pipe(
      tap( (resp: any ) => {
        localStorage.setItem('token', resp.token)
      })
    );
    ;
  }

}
