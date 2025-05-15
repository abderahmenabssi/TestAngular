import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeIngAbderahmenComponent } from './components/vehicule-ing-abderahmen/vehicule-ing-abderahmen.component';
import { NotFoundAbderahmenComponent } from './components/not-found-abderahmen/not-found-abderahmen.component';
import { VehiculeDetailsAbderahmenComponent } from './components/vehicule-details-abderahmen/vehicule-details-abderahmen.component';
import { AddVehiculeIngAbderahmenComponent } from './components/add-vehicule-ing-abderahmen/add-vehicule-ing-abderahmen.component';

const routes: Routes = [
  { path: 'vehicule', component: VehiculeIngAbderahmenComponent },
  { path: 'add-vehicule', component: AddVehiculeIngAbderahmenComponent },
  { path: '', redirectTo: 'vehicule', pathMatch: 'full' },
  { path: 'details/:id', component: VehiculeDetailsAbderahmenComponent },
  { path: '**', component: NotFoundAbderahmenComponent }  // toujours la dernière !
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }