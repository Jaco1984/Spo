import { SpotiffyService } from '../../services/spotiffy.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor( private spotiffyService: SpotiffyService) { 
    console.log("Constructor home hecho");
    this.loading = true;
    this.error = false;
    this.spotiffyService.getNewRelease().subscribe((data:any) => {
     
      this.nuevasCanciones = data;
      this.loading = false;
      
    }, (dataError) => {
      this.error = true;
      this.loading = false;
      console.log(dataError);
      this.mensaje = dataError.error.error.message;
    })
   
  }

  

}
