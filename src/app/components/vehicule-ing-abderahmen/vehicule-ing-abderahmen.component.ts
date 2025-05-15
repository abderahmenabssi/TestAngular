import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { Vehicule } from 'src/app/models/vehicule.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicule-ing',
  templateUrl: './vehicule-ing-abderahmen.component.html'
})
export class VehiculeIngAbderahmenComponent implements OnInit {
vehicule: any[] = [];  
 constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/vehicule').subscribe((data: any[]) => {
      this.vehicule = data;
    });
  }

  supprimerVehicule(id: number): void {
    this.http.delete(`http://localhost:3000/vehicule/${id}`).subscribe(() => {
      this.vehicule = this.vehicule.filter(vehicule => vehicule.id !== id);
    });
  }
}