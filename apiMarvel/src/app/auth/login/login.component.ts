import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/*Sweetalert*/
import Swal from 'sweetalert2'
//Servicios
import { AuthService } from 'src/app/service/auth.service';
//Modelos
import { Usuario } from 'src/app/models/usuario.model';
//Interfaces
import {} from 'src/app/interficies/login-form.interface';

declare const google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn: ElementRef;
  loginForm:FormGroup
  isLoogin = false;
  
  constructor(  private authService:AuthService, 
                private router: Router ) 
            {
              
    this.loginForm = new FormGroup({ 
      email:    new FormControl(localStorage.getItem( 'email' ) || '', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false)
    })
   }

  //Iniciamos formulario
  ngOnInit(): void {
 
  }
  ngAfterViewInit(): void {
    this.googleInit()
  }

  async googleInit() {
    await google.accounts.id.initialize({
      client_id: "1037885035266-qe2e6rgof6k4n8nnqeo0a3i902s6v2d8.apps.googleusercontent.com",
      callback: (response:any) => this.handleCredentialResponse(response)
    });
    await google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  //autentificación token google
  handleCredentialResponse( response: any ) {
    this.authService.loginGoogle( response.credential )
    .subscribe( resp => {
      this.router.navigateByUrl('/')
    });
  }
  
  get emailField(): any {
    return this.loginForm.get('email');
  }

  get passwordField(): any {
    return this.loginForm.get('password');
  }
  
  loginFormSubmit(): void {
    
    this.authService.loginUserService(this.loginForm.value)
    .subscribe({
      next: res => {
        if( this.loginForm.get('remember')?.value === true ) {
          //guardamos email localSorage y dirigimos home
          localStorage.setItem( 'email',this.loginForm.get('email')?.value);
          this.router.navigateByUrl('/')
          this.isLoogin = true;
        } else {
          localStorage.removeItem( 'email');
          this.router.navigateByUrl('/')
          this.isLoogin = true;
        }


      },
      error: err => {
        Swal.fire('Error', err.error.msg, 'error')
      } 
    });
  }
}
