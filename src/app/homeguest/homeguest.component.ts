import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-homeguest',
  templateUrl: './homeguest.component.html',
  styleUrls: ['./homeguest.component.css']
})
export class HomeguestComponent {
  title = 'tguide';

  
  private places: Place[]; //array na lalagyan ng data
  private placeName: String;
  private Location: String;
  private Nearby: String;
  private Price: Number;


  private comments: Comment[]; //array na lalagyan ng data
  // private Name: String;
  private Comment: String;
  private Rating: Number;

  getComments() {
    this.commentService.getComments()
      .subscribe((data) => {
        this.comments = data;
      }
      );
  }

  getPlaces() {
    this.placeService.getPlaces()
      .subscribe((data) => {
        this.places = data;
      }
      );
  }

  ngOnInit() {
    this.getPlaces();
    this.getComments();

  }
  constructor(private placeService: PlaceService,
    private commentService: CommentService) {

  }
}
