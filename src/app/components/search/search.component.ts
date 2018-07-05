import { Component, OnInit } from '@angular/core';
import { SpotiffyService } from '../../services/spotiffy.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean ;

  constructor(private spotiffyService: SpotiffyService ) { }
    
 buscar(termino : string){
 this.loading = true;
 this.spotiffyService.getArtistaBuscar(termino).subscribe((data: any) =>{
   this.artistas = data;
   this.loading = false;
  
 });
  
 }

}
