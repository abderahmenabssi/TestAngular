import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details-abderahmen.component.html',
  styleUrls: ['./vehicule-details-abderahmen.component.scss']
})
export class VehiculeDetailsAbderahmenComponent implements OnInit {
  vehicule: any;

  // ✅ Injecter ActivatedRoute et HttpClient
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/vehicule/${id}`).subscribe(data => {
      this.vehicule = data;
    });
  }
}
