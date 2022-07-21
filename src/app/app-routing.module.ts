import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchLawComponent } from './components/search-law/search-law.component';
import { AddLawComponent } from './components/add-law/add-law.component';
import { HomeComponent } from './components/home/home.component';
import { AssignLawComponent } from './components/assign-law/assign-law.component';
import { ConfigEmployeeComponent } from './components/config-employee/config-employee.component';
import { ConfigLocationComponent } from './components/config-location/config-location.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'searchlaw', component: SearchLawComponent },
  { path: 'addlaw', component: AddLawComponent},
  { path: '', component: HomeComponent},
  { path: 'assignlaw', component: AssignLawComponent},
  { path: 'configemployee', component: ConfigEmployeeComponent},
  { path: 'configlocation', component: ConfigLocationComponent},
  { path: 'signin', component: SignInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
