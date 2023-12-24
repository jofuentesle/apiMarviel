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

  apiUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash=359cb361c0a0717009b9228c9656015a'
  storiesUrl = 'http://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash=359cb361c0a0717009b9228c9656015a'


  loadContent(): Observable<any> {
     return this.http.get<any>(this.apiUrl);
  }
  
  loadStories( ): Observable<any> {
    return this.http.get<any>(this.storiesUrl);
  }
}
