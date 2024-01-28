import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  loadContent(): Observable<Characters> {
    const url = environment.API_URL;
     return this.http.get<Characters>(url)
     .pipe(
      map( res => {
        let results = res;
        return results      
      }));
  }
  

  
  //Cargamos heroe por ID
  loadCharacter( id: string ): Observable<Characters> {
    const urlData = environment.API_CHARACTER+id+environment.API_REST;
    console.log(urlData)
    return this.http.get<Characters>(urlData)
    .pipe((
      map( res => {
        let results = res;
        return results
      })
    ))

  }


}
