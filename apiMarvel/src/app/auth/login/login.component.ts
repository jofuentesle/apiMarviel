import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  
  constructor() { }

  //Iniciamos formulario

  ngOnInit(): void {

    this.loginForm = new FormGroup({ 
      email:    new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log("hola" + this.loginForm.value);
    // Call Api
  }


}
