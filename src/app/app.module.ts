import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchLawComponent } from './components/search-law/search-law.component';
import { AddLawComponent } from './components/add-law/add-law.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchLawComponent,
    AddLawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
