import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  public url: string = "";
 // private url: string = "https://tguide0727.herokuapp.com/";
  public headers = new HttpHeaders().set('Content-Type','application/json');
  //para ma specify yung value ng header ng hhtp req
  //set content type
  // add_header 'Access-Control-Allow-Origin' 'http://localhost:4200' always;
// public place;
  
  constructor( public http:HttpClient ) { }
  


  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(
      this.url + "/comment"
    );
  }

  addComment(comment:Comment):Observable<any>{ //any
    return this.http.post<any>( //any din dito
        this.url + "/comment",
        comment,

        { headers:this.headers }
    );
  }


  updateComment(comment:Comment, id:string):Observable<Comment>{
    return this.http.put<Comment>(
      this.url + '/comment/' + id,
      comment,{
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        })
    });
  }

  deleteComment(id:string){
    return this.http.delete(
      this.url + '/comment/' + id);
  }
}




