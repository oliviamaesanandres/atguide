import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from './place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {


  public url: string = "";
 // private url: string = "https://tguide0727.herokuapp.com/";
  public headers = new HttpHeaders().set('Content-Type','application/json');
  //para ma specify yung value ng header ng hhtp req
  //set content type
  // add_header 'Access-Control-Allow-Origin' 'http://localhost:4200' always;
// public place;
  
  constructor( public http:HttpClient ) { }
  


  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(
      this.url + "/place"
    );
  }

  addPlace(place:Place):Observable<any>{ //any
    return this.http.post<any>( //any din dito
        this.url + "/place",
        place,

        { headers:this.headers }
    );
  }


  updatePlace(place:Place, id:string):Observable<Place>{
    return this.http.put<Place>(
      this.url + '/place/' + id,
      place,{
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        })
    });
  }

  deletePlace(id:string){
    return this.http.delete(
      this.url + '/place/' + id);
  }
}




