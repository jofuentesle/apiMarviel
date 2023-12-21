import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/service/load.service';

import { environment } from '../../../environments/environment';

import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

test:any;
  currentUser: Usuario;

  constructor( private loadService: LoadService ){}

  
  load() {
    //console.log(environment.API_KEY);
    this.loadService.loadContent();


  }

  load2() {
    this.loadService.loadContent2().subscribe((res => {
      console.log(res);
    }))
  }

  ngOnInit(): void {
    //this.test = environment.API_KEY;
    this.load();
    this.load2();

  }

}