import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

import { CreateHoodieComponent } from './create-hoodie/create-hoodie.component';
import { ListHoodieComponent } from './list-hoodie/list-hoodie.component';
import { EditHoodieComponent } from './edit-hoodie/edit-hoodie.component';

import { AppComponent } from './app.component'


const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  // { path: '', redirectTo: '/createUser', pathMatch: 'full' },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
  // { path: '', redirectTo: '/createPatient', pathMatch: 'full' },
  { path: 'createPatient', component: CreatePatientComponent },
  { path: 'list-patients', component: ListPatientComponent },
  { path: 'update-patient/:id', component: EditPatientComponent },
  // { path: '', redirectTo: '/createHoodie', pathMatch: 'full' },
  { path: 'createHoodie', component: CreateHoodieComponent },
  { path: 'list-hoodies', component: ListHoodieComponent },
  { path: 'update-hoodie/:id', component: EditHoodieComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
