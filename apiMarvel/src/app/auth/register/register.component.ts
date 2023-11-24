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


  regForm: FormGroup
  public formSubmitted = false;

  constructor(  private fb: FormBuilder, 
                private authService: AuthService, 
                private router:Router ) {

                  this.regForm = this.fb.group({

                  })


                }

  ngOnInit(): void { 
    this.regForm = this.fb.group({
      email: new FormControl(null, [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)] ),
      password: new FormControl( null, [ Validators.required, Validators.minLength(6)] ),
      password2: new FormControl( null, [ Validators.required, Validators.minLength(6) ]),
      terminos: new FormControl( null, Validators.required )
    })
  }



  get email() {
    return this.regForm.controls['email'];
} 

  get password() {
    return this.regForm.controls['password'];
}

  //Create user
  createUser() {
    /*console.log(this.regForm);
    if( this.regForm.valid && this.regForm.get('terminos')?.value === true ) {
      this.formSubmitted = true;
      console.log('Posteando formulario');
    } else {
      console.log("no es correcto")
    }*/
    console.log('submitted from ' , this.regForm.value, this.regForm.invalid);
    this.formSubmitted = true;
  }

  //Validaciones del formulario
 

  aceptaTerminos() {

    return !this.regForm.get('terminos')?.value && this.regForm.get('terminos')?.touched;
  }
}
