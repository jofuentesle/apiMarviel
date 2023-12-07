import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Md5 } from 'ts-md5';



//definimos variables
//const puk = environment.API_KEY;
//const pk  = environment.PRIVATE_KEY;
//const url = environment.BASE_URL;
//const md5 = new Md5();

//Declaramos url
const base_url = environment.API_KEY;

//Declaramos url
const base_url2 = environment.BASE_URL; 

@Injectable({
  providedIn: 'root'
})
export class LoadService {
;
 

  loadContent = () => {

    console.log(base_url);
    //const logHash = md5.appendStr( '1' + `${puk}` + `${pk}`);

    //fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=4f9a355e818b2149ba13bcbecd2cc118&hash='+`${logHash}`)
    //.then((resp => resp.json()))
    //.then( json => console.log(json));
  
  }

  constructor() { }
}
