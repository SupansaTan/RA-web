import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchLawComponent } from './components/search-law/search-law.component';
import { AddLawComponent } from './components/add-law/add-law.component';
import { HomeComponent } from './components/home/home.component';
import { AssignLawComponent } from './components/assign-law/assign-law.component';
import { ConfigEmployeeComponent } from './components/config-employee/config-employee.component';
import { ConfigLocationComponent } from './components/config-location/config-location.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchLawComponent,
    AddLawComponent,
    HomeComponent,
    AssignLawComponent,
    ConfigEmployeeComponent,
    ConfigLocationComponent,
    SignInComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
