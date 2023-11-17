import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidacionesPropias } from '../customValidators/validaciones-propias';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;


  constructor() {}

  /*Verificamos que coincidan las contraseñas
  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get("password");
    const password2= control.get("password2");

    if (password?.value === password2?.value)
    return null;
      else
    return { passwordCoincide: true }
    /*return password &&
      password2 &&
      password.value !== password2.value
      ? { passwordCoincide: true }
      : null;
  };*/

  ngOnInit(): void { 
    this.registerForm = new FormGroup({
      nombre: new FormControl('jordi', [ Validators.required ] ),
      email: new FormControl('jordi@gmail.com', [ Validators.required, Validators.email] ),
      password: new FormControl( '123456', [ Validators.required, Validators.minLength(6)] ),
      password2: new FormControl( '111111', [ Validators.required, Validators.minLength(6)]),
      terminos: new FormControl( false, Validators.required )
    })

  }


  createUser() {
    console.log(this.registerForm.value);
    console.log(this.mustBeEquals());
  }

  mustBeEquals() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

      if( pass1 === pass2 ) {
        return true;
      } else {
        return false
      }
  }
  /*public formSubmitted = false;

  //Reactive form
  public registerForm = this.fb.group<any>({

    nombre:['jordi', [ Validators.required, Validators.minLength(3) ] ],
    email: ['jordi@gmail.com', [ Validators.required, Validators.email] ],
    password: [ '123456', [ Validators.required, Validators.minLength(6)] ],
    password2: [ '123457', [ Validators.required, Validators.minLength(6)] ],
    terminos: [ true, Validators.required ]

  });
  

  
  constructor( private fb: FormBuilder) {}


  //metodo para crear usuario
  createUser() {
    
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if( this.registerForm.valid ) {
      console.log(' posteando formulario  ')
    } else {
      console.log("correcto")
    }

  }

  campoNoValido( campo:string ):boolean {

    if ( this.registerForm.get(campo)?.invalid && this.formSubmitted) {

      return true

    } else {

      return false
      
    }

  }

  aceptaTerminos() {

    return  !this.registerForm.get('terminos')!.value && this.formSubmitted

  }

  passwordNoValido():boolean {

    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    console.log(pass1);
    console.log(pass2);

    if ((pass1 !== pass2) && this.formSubmitted) {
        
      return true;

    } else {

        return false;
    
      }
  }


  passwordsIguales( pass1Name:string, pass2Name: string) {

    return (FormGroup: FormGroup) => {

      const pass1Control = FormGroup.get(pass1Name);
      const pass2Control = FormGroup.get(pass2Name);

      if ( pass1Control === pass2Control ) {

        pass2Control?.setErrors(null)

      } else{

        pass2Control?.setErrors({noEsIgual: true})
      }
    }
  }
*/
}
