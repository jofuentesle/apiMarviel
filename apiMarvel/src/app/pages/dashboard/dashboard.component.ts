import { Component, OnInit } from '@angular/core';

import { LoadService } from 'src/app/service/load.service';

import { Usuario } from 'src/app/models/usuario.model';
import { Characters } from 'src/app/models/character.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //Definimos variables
  currentUser: Usuario;
  allCharacters:Characters[];
  

  constructor( private loadService: LoadService
              )
              { }

  //Cargamos los superheroes
  load() {

    this.loadService.loadContent().subscribe((res => {
      this.allCharacters = res.data.results;
      console.log("characters", this.allCharacters)
      
    }))
  }
/*
  load() {
    this.loadService.loadContent()
      .pipe(
        map( (val)=> {
          return val.data;
        })
      )
      .subscribe(
        (val) => {
          this.allCharacters  = val;
        }
      )
  }*/

  ngOnInit(): void {
    //Cargamos contenido
    this.load();
    
  }

}