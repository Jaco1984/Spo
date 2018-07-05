import { map } from 'rxjs/internal/operators';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class SpotiffyService {

  constructor(private http: HttpClient) {
    console.log("Servicio spotyfy listo");
   }

   getQuery(query : string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQD2Bt4Lr52LalnxGfOjeWBcrbntjZ5lqy9vsLACsC9RPNH8vBEBzHZXZ68s8wcCe4nFvL3UKfT5F0jmo9g'
    })

    return this.http.get(url, {headers});

   }

   getNewRelease(){
   
   return this.getQuery('browse/new-releases?litmit=5')
   .pipe(map (data=>  data['albums'].items ));
 }

   getArtistaBuscar(termino: string){

    return this.getQuery(`search?query=${ termino }&type=artist&market=US&offset=0&limit=10`)
    .pipe(map (data => data['artists'].items));
     
   }

   getArtista(id: string){

    return this.getQuery(`artists/${id}`);
    //.pipe(map (data => data['artists'].items));
     
   }

   getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map (data => data['tracks']));
     
   }
}
