import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeguestComponent } from './homeguest/homeguest.component';
import { HomeComponent } from './home/home.component';
import { HomeaccountComponent } from './homeaccount/homeaccount.component';
import { LocationComponent } from './location/location.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// import { GuestComponent } from './guest';
import { AuthGuard } from './_helpers';
import { LocationaccountComponent } from './locationaccount/locationaccount.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LocationadminComponent } from './locationadmin/locationadmin.component';

const routes: Routes = [
  // {
  //   path: 'homeguest',
  //   component: HomeguestComponent
  // },
  // {
  //   path: 'location',
  //   component: LocationComponent
  // },
  
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  // {
  //   path: "", redirectTo: '/homeguest',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "", redirectTo: '/location',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "", redirectTo: '/account',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "", redirectTo: '/about',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "", redirectTo: '/admin',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }

  // { path: '', component: HomeaccountComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },   //account
  { path: 'location', component: LocationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeguest', component: HomeguestComponent },
  { path: '', component: HomeguestComponent },
  { path: 'homeaccount', component: HomeaccountComponent },
  { path: 'locationaccount', component: LocationaccountComponent },
  { path: 'homeadmin', component: HomeadminComponent },
  { path: 'locationadmin', component: LocationadminComponent },



  // otherwise redirect to home
  { path: '**', component: HomeguestComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export const appRoutingModule = RouterModule.forRoot(routes);
export class AppRoutingModule { }
