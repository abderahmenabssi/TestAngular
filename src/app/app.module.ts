import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAbderahmenComponent } from './components/navbar-abderahmen/navbar-abderahmen.component';
import { VehiculeIngAbderahmenComponent} from './components/vehicule-ing-abderahmen/vehicule-ing-abderahmen.component';
import { NotFoundAbderahmenComponent } from './components/not-found-abderahmen/not-found-abderahmen.component';
import { VehiculeDetailsAbderahmenComponent } from './components/vehicule-details-abderahmen/vehicule-details-abderahmen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestAbderahmenComponent } from './components/test-abderahmen/test-abderahmen.component';
import { AddVehiculeIngAbderahmenComponent } from './components/add-vehicule-ing-abderahmen/add-vehicule-ing-abderahmen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAbderahmenComponent,
    VehiculeIngAbderahmenComponent,
    AddVehiculeIngAbderahmenComponent,
    NotFoundAbderahmenComponent,
    VehiculeDetailsAbderahmenComponent,
    TestAbderahmenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
