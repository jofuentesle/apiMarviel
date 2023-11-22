import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

/*servicios*/
import { AuthService } from '../service/auth.service';
import { RegisterForm } from '../../interficies/register-form.interface.ts'

import { ValidacionesPropias } from '../customValidators/validaciones-propias';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm: FormGroup;

  public formSubmitted = false;

  constructor(  private fb: FormBuilder, 
                private authService: AuthService, 
                private router:Router ) {}

  ngOnInit(): void { 
    this.registerForm = new FormGroup({
      email: new FormControl(null, [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)] ),
      password: new FormControl( null, [ Validators.required, Validators.minLength(6)] ),
      password2: new FormControl( null, [ Validators.required, Validators.minLength(6)]),
      terminos: new FormControl( null, Validators.required )
    })
  }

 
  //Create user
  createUser() {
    this.formSubmitted = true;

    if( this.registerForm.valid ) {
      console.log('Posteando formulario');
    } else {
      console.log("no es correcto")
    }
    console.log(this.registerForm.value);
    /*console.log(ValidacionesPropias.mustBeEquals(this.registerForm.get('password')?.value, this.registerForm.get('password2')?.value))*/
    //this.authService.createUser());  

  }


  //Validaciones del formulario
  mustBeEquals() {
      const pass1 = this.registerForm.get('password')?.value;
      const pass2 = this.registerForm.get('password2')?.value;

      (pass1 == pass2)? false: true;      
  }

  aceptaTerminos() {

    return !this.registerForm.get('terminos')?.value && this.registerForm.get('terminos')?.touched;

  }
}




