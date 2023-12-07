import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { LoginForm } from '../interficies/login-form.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { of } from 'rxjs';


//Declaramos url
const base_url = environment.BASE_URL; 

//Declaramos el objeto Google
declare const google:any;

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

    validarToken() {

      const token = localStorage.getItem('token') || '';
      
      return this.http.get(`${ base_url }/login/renew`, {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap( (resp:any) => {

          //grabamos usuario actual conectado
          const { email, google, nombre, role, img, uid } = resp.usuarioDB; 
          
          this.usuarioDB = new Usuario(nombre, email,'', img, google, role, uid )
          
          localStorage.setItem('token', resp.token)
        }),
        map( resp => true),
        catchError( error => of(false) )
      )
    }


    logout() {
      localStorage.removeItem('token');
      
      //logout si ha entrado con Google
      google.accounts.id.revoke(this.usuarioDB.email, () => {
        
        this.router.navigateByUrl('/login');
      
      })

    }
  }