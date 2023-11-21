import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from '../../../environments/environment';

import { RegisterForm } from '../../interficies/register-form.interface.ts';
import { Usuario } from 'src/app/models/usuario.model';


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

  createUser ( formData: RegisterForm ) {

    return this.http.post(`${ base_url }/usuarios`, formData )
            .pipe(
              tap( (resp: any) => {
                localStorage.setItem('token', resp.token)
              })
            )

  }

}