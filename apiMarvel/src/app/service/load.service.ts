import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Characters } from '../models/character.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoadService {

 
  public charactersBD: Characters[];

  constructor( public http: HttpClient) { }

  loadContent = () => {
    

    fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash=359cb361c0a0717009b9228c9656015a')
    .then((resp => resp.json()))
    .then( json => this.charactersBD = json.data.results)
  }

  apiUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash=359cb361c0a0717009b9228c9656015a'
  
  loadContent2(): Observable<Characters[]> {
     return this.http.get<Characters[]>(this.apiUrl);
  }
  


  
}
