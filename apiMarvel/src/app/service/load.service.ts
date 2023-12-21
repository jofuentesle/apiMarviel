import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

//import { Md5 } from "md5-typescript";

import { Md5 } from 'ts-md5';



//definimos variables
//const puk = environment.API_KEY;
//const pk  = environment.PRIVATE_KEY;
//const url = environment.BASE_URL;
//const md5 = new Md5();

//Declaramos url
//const base_url = environment.API_KEY;

//Declaramos url
const base_url2 = environment.BASE_URL; 

@Injectable({
  providedIn: 'root'
})
export class LoadService {
;
 

  loadContent = () => {

    let publickey: string = '4f9a355e818b2149ba13bcbecd2cc118';
    let privatekey:string = 'd27b58c6068ecae8a6161358084d2b8fd9ae169c';
    let times:string = "1";
    //let url:string = environment.API_URL;

    //console.log('esto es la url', url);

//  console.log(Md5.init('test'));
    //console.log(base_url);
   // const has = Md5.init('1' + `${privatekey}`+  `${publickey}`);
    //console.log(logHash);
    //console.log(Md5.init(`${times}` +  + `${privatekey}`+  `${publickey}`));
    //let has = '359cb361c0a0717009b9228c9656015a';

    fetch(`${""}`)
    .then((url => url.json()))
    .then( json => console.log(json));

  const md5 = new Md5();
  console.log(md5.appendStr((`${times}` +  + `${privatekey}`+  `${publickey}`)).end());
  
  }

  constructor() { }
}
