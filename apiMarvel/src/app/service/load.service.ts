import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Result } from '../models/result.model'
import { Characters } from '../models/character.model';





@Injectable({
  providedIn: 'root'
})
export class LoadService {

 
  public charactersBD: Characters;

  constructor( public http: HttpClient) { }
  

  //Cargamos todos los heroes
  loadContent(): Observable<Result> {
    const url = environment.API_URL;
     return this.http.get<Result>(url);
  }
  

  
  //Cargamos heroe por ID
  loadCharacter( id: string ): Observable<Characters> {
    const urlData = 'http://gateway.marvel.com/v1/public/characters/'+id+'?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash=359cb361c0a0717009b9228c9656015a'
    return this.http.get<Characters>(urlData); 

  }


}
