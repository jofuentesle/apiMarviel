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

                @Input () value: string;
  currentId:any;
  currentCharacter: any = [];
  showData2: Observable<any>;
  showData: Observable<any>;

  async getChatarter () {
    
  await this.loadSrv.loadCharacter(this.currentId)
    .subscribe((res:Characters) => {
      if(res) {
  
        this.currentCharacter = res.data.results[0];
  
      }
    })
  }


  ngOnInit(): void {
    //Cargamos id
    this.currentId =  this._route.snapshot.paramMap.get('id');

    //Cargamos HeroebyId
    this.getChatarter();
  } 
    
}