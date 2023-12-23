import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/service/load.service';

import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

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
  urlThumnails:string;
  extThumnails:string;

  constructor( private loadService: LoadService ){}


  //Cargamos los superheroes
  async load() {
    await this.loadService.loadContent().subscribe((res => {
    this.allCharacters = res.data.results;
    console.log(res.data.results)
    }))
  }

  ngOnInit(): void {
    //Cargamos contenido
    this.load();

  }

}