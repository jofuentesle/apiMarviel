import { CommonModule } from '@angular/common';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { Characters } from 'src/app/models/character.model';
import { LoadService } from 'src/app/service/load.service';
import { ComicsComponent } from './comics/comics.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  standalone:true,
  imports:[ CommonModule, ComicsComponent ],
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {


  constructor(  private loadSrv: LoadService,
                private _route: ActivatedRoute ){
                }

  currentId:any;
  currentCharacter: any = [];


  getChatarter () {
    this.loadSrv.loadCharacter(this.currentId).subscribe((res => {

        this.currentCharacter = res.data.results;
        console.log('details', res);
  
    }))
  }
  
  ngOnInit(): void {
    //Cargamos id
    this.currentId =  this._route.snapshot.paramMap.get('id');
    //Cargamos HeroebyId
    this.getChatarter();
  } 
    
}