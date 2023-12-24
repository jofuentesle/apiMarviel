import { Component } from '@angular/core';
import { LoadService } from 'src/app/service/load.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor( private loadSrv: LoadService ){}

  getStories = () => {
    this.loadSrv.loadStories().subscribe((res => {
      console.log('hola desde de',res);
    }));
  }

  ngOnInit(): void {
    //Cargamos contenido
    this.getStories();
  }
}
