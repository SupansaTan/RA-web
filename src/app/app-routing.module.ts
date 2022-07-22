import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchLawComponent } from './components/search-law/search-law.component';
import { AddLawComponent } from './components/add-law/add-law.component';
import { HomeComponent } from './components/home/home.component';
import { AssignLawComponent } from './components/assign-law/assign-law.component';
import { AssignDetailComponent } from './components/assign-law/assign-detail/assign-detail.component';
import { ConfigEmployeeComponent } from './components/config-employee/config-employee.component';
import { ConfigLocationComponent } from './components/config-location/config-location.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'searchlaw', component: SearchLawComponent },
  { path: 'addlaw', component: AddLawComponent},
  { path: 'assignlaw', component: AssignLawComponent},
  { path: 'assignlaw/:id', component: AssignDetailComponent},
  { path: 'configemployee', component: ConfigEmployeeComponent},
  { path: 'configlocation', component: ConfigLocationComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'assignlaw/:id', component: AssignDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
