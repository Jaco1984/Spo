import { SpotiffyService } from './../../services/spotiffy.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista : any = {};
  topTraks: any = [];
  loadingArtist : boolean;

  constructor(private router: ActivatedRoute,
              private spotiffyService: SpotiffyService) { 
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotiffyService.getArtista(id).subscribe(data =>{
      console.log(data);
      this.artista = data;
      this.loadingArtist = false;
    });
  }

  getTopTrack(id: string){
    this.spotiffyService.getTopTracks(id).subscribe(data =>{
      console.log(data);
      this.getTopTrack = data;
    });
  }

}
