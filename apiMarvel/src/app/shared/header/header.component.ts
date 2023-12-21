import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Variable para guardar usuario
  public currentUser:Usuario;

  constructor( private authService: AuthService ) {
    this.getUser();
  }

  getUser = () => {

     this.currentUser = this.authService.usuarioDB;
  
    }

  logOut() {

    this.authService.logout();
  
  }
}
