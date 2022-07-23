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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { AssignDetailComponent } from './components/assign-law/assign-detail/assign-detail.component';
import { AddEmployeeComponent } from './components/config-employee/add-employee/add-employee.component';
import { AddLocationComponent } from './components/config-location/add-location/add-location.component';

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
    HeaderComponent,
    AssignDetailComponent,
    AddLocationComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapMultiselectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
