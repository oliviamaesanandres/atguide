// import { Component } from '@angular/core';
import { PlaceService } from './place.service';
import { Place } from './place';
// import { SrvRecord } from 'dns';
// import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
// import { AuthenticationService } from './_services';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tguide';


    currentUser: User;
    // users = [];
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
    // this.loadAllUsers();
  }
//   private loadAllUsers() {
//     this.userService.getAll()
//         .pipe(first())
//         .subscribe(users => this.users = users);
// }
  constructor(private placeService: PlaceService,
    private router: Router,

    // private router: Router,
    private authenticationService: AuthenticationService
    // private authenticationService: AuthenticationService,
    // private userService: UserService
) 
{
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/homeguest']);
}


}
