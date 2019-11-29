import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place';
import { first } from 'rxjs/operators';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { Router } from '@angular/router';


import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
@Component({
  selector: 'app-homeaccount',
  templateUrl: './homeaccount.component.html',
  styleUrls: ['./homeaccount.component.css']
})
export class HomeaccountComponent implements OnInit {
  private places: Place[]; //array na lalagyan ng data
  private placeName: String;
  private Location: String;
  private Nearby: String;
  private Price: Number;



  private comments: Comment[]; //array na lalagyan ng data
  // private Name: String;
  private Comment: String;
  private Rating: Number;


  currentUser: User;
  users = [];
  getPlaces() {
    this.placeService.getPlaces()
      .subscribe((data) => {
        this.places = data;
      }
      );
  }

  getComments() {
    this.commentService.getComments()
      .subscribe((data) => {
        this.comments = data;
      }
      );
  }


  
  addComment() {

    
    var comment = new Comment();

    comment.name = this.currentUser.username;
    comment.comment = this.Comment;
    comment.rating = this.Rating;

    this.commentService.addComment(comment)
      .subscribe((data) => {
        console.log(data);
        this.getComments();
      }
      );
  }


  updateComment(id: string) {
    var comment = new Comment();

   
    comment.name = this.currentUser.username;
    comment.comment = this.Comment;
    comment.rating = this.Rating;

    this.commentService.updateComment(comment, id).
      subscribe((data) => {
        console.log(data);
        this.getComments();
      })
  }


  deleteComment(id: string) {
    this.commentService.deleteComment(id).
      subscribe((data) => {
        console.log(data);
        this.getComments();
      });
  }


  constructor(private placeService: PlaceService,
    private commentService: CommentService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService) 
    {
      this.currentUser = this.authenticationService.currentUserValue;
  }
  ngOnInit() {
    this.getPlaces();
    this.getComments();
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}

}
