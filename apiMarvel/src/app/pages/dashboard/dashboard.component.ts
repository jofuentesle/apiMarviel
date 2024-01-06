import { Component, OnInit } from '@angular/core';

import { LoadService } from 'src/app/service/load.service';

import { Usuario } from 'src/app/models/usuario.model';
import { Characters } from 'src/app/models/character.model';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //Definimos variables
  currentUser: Usuario;
  allCharacters:any;
  urlThumnails:string;
  extThumnails:string;
  data$:any;

  constructor( private loadService: LoadService
              )
              { }

  //Cargamos los superheroes
  async load() {
    await this.loadService.loadContent().subscribe((res => {
    //this.allCharacters = ;
    //this.allCharacters = res
    console.log(res);
    }))
  }

  ngOnInit(): void {
    //Cargamos contenido
    this.load();

    this.data$ = this.load(); 
  }

}