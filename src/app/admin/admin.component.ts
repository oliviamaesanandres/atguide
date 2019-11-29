import { Component, OnInit } from '@angular/core';

import { PlaceService } from '../place.service';
import { Place } from '../place';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'tguide';

  
  public places: Place[]; //array na lalagyan ng data
  public placeName: String;
  public Location: String;
  public Nearby: String;
  public Price: Number;



  
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
