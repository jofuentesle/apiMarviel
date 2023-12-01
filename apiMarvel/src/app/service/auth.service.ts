import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { LoginForm } from '../interficies/login-form.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';


//Declaramos url
const base_url = environment.BASE_URL; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //definimos usuario
  public usuarioDB!: Usuario;

  constructor(  private http: HttpClient,
                private router: Router,
                private ngZone: NgZone ) { }

  loginUserService ( formData: LoginForm ) {
      return this.http.post<LoginForm>(`${base_url}/login`, formData)
          //Guardamos token localStorage
          .pipe(
            tap( (resp: any ) => {
              localStorage.setItem('token', resp.token)
            })
          );
    }
    
    //Google autenthication TODO
    loginGoogle( token: string ) {

      return this.http.post(`${ base_url }/login/google`, { token} )
       //Guardamos token localStorage
        .pipe(
          tap( (resp: any ) => {
            localStorage.setItem('token', resp.token)
          })
        )
    }

    validarToken(): Observable<Boolean> {

      const token = localStorage.getItem('token') || '';

      return this.http.get(`${ base_url }/login/renew`, {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap( (resp:any) => {
          localStorage.setItem('token', resp.token)
        }),
        map( (resp:any) => true)
      )

    }
  
  }