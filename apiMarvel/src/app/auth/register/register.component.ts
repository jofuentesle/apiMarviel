import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

/*servicios*/
import { UserService } from 'src/app/service/user.service';
/*validaciones propias*/
import { matchPassword } from '../customValidators/validaciones-propias';
/*modelos e interficies*/
import { RegisterForm } from '../../interficies/register-form.interface.ts'
/*sweetalert*/
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  regForm: FormGroup
  public formSubmitted = false;


  constructor(  private fb: FormBuilder, 
                private userService: UserService,
                private router:Router ) {

                  this.regForm = this.fb.group({
                    nombre: new FormControl('jordi', [ Validators.required] ),
                    email: new FormControl('jfuentesleiva@gmail.com', [ Validators.required, Validators.pattern(/\S+@\S+\.\S+/)] ),
                    password: new FormControl( '111111', [ Validators.required, Validators.minLength(6)] ),
                    password2: new FormControl( '111111', [ Validators.required, Validators.minLength(6)] ),
                    terminos: new FormControl( false, [Validators.requiredTrue] ),
                  },
                    {
                      validators:matchPassword
                    }
                  )
                }
             

  ngOnInit(): void { 
   
  }

  get f() { return this.regForm.controls; }

  get email() {
    return this.regForm.controls['email'];
} 

  get password() {
    return this.regForm.controls['password'];
}

  //Create user
  createUser() {

    if( this.regForm.valid) {
      this.formSubmitted = true;
      this.userService.createUserBBDD(this.regForm.value)
      .subscribe (
        {
          next: res => {
          console.log(res);
          console.log('usuario creado');
          },
          error: err => {
            Swal.fire('Error', err.error.msg, 'error')
          } 
        })
      } else {
      // stop here if form is invalid
      return;
    }
  }
  //Reset form
  onReset() {
    this.formSubmitted  = false;
    this.regForm.reset();
}
}
