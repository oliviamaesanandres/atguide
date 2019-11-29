import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomeguestComponent } from './homeguest/homeguest.component';
import { LocationComponent } from './location/location.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

// import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
// import { AccountComponent } from './account';
// import { AboutComponent } from './about';
// import { AdminComponent } from './admin';
// import { LocationComponent } from './location';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// import { GuestComponent } from './guest';
import { AlertComponent } from './_components';
import { HomeaccountComponent } from './homeaccount/homeaccount.component';
import { LocationaccountComponent } from './locationaccount/locationaccount.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LocationadminComponent } from './locationadmin/locationadmin.component';
import { CommentComponent } from './comment/comment.component';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeguestComponent,
    LocationComponent,
    AccountComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    LocationComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    //GuestComponent,
    AlertComponent,
    HomeaccountComponent,
    LocationaccountComponent,
    HomeadminComponent,
    LocationadminComponent,
    CommentComponent,
    RatingComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
     fakeBackendProvider
],
bootstrap: [AppComponent]
})
export class AppModule { }
