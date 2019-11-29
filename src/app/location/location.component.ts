import { Component, OnInit } from '@angular/core';

import { PlaceService } from '../place.service';
import { Place } from '../place';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  title = 'tguide';

  
  private places: Place[]; //array na lalagyan ng data
  private placeName: String;
  private Location: String;
  private Nearby: String;
  private Price: Number;


  getPlaces() {
    this.placeService.getPlaces()
      .subscribe((data) => {
        this.places = data;
      }
      );
  }

  addPlace() {

    
    var place = new Place();

    place.name = this.placeName;
    place.location = this.Location;
    place.nearby = this.Nearby;
    place.price = this.Price;

    this.placeService.addPlace(place)
      .subscribe((data) => {
        console.log(data);
        this.getPlaces();
      }
      );
  }


  updatePlace(id: string) {
    var place = new Place();

    place.name = this.placeName;
    place.location = this.Location;
    place.nearby = this.Nearby;
    place.price = this.Price;
    this.placeService.updatePlace(place, id).
      subscribe((data) => {
        console.log(data);
        this.getPlaces();
      })
  }


  deletePlace(id: string) {
    this.placeService.deletePlace(id).
      subscribe((data) => {
        console.log(data);
        this.getPlaces();
      });
  }


  ngOnInit() {
    this.getPlaces();
  }
  constructor(private placeService: PlaceService) {

  }
}
