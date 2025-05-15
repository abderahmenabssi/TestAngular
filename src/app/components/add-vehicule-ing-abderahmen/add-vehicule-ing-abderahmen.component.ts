import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicule-ing',
  templateUrl: './add-vehicule-ing-abderahmen.component.html'
})
export class AddVehiculeIngAbderahmenComponent implements OnInit{
  newVehicule: Vehicule = {
    id: 0,
    matricule: '',
    description: '',
    marque: '',
    disponible: true,
    nbrInteresse: 0
  };

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      matricule: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      marque: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
      disponible: [true],
      nbrInteresse: [0]
    });
  }

  onSubmit() {
  if (this.form.valid) {
    fetch('http://localhost:3000/vehicule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.form.value)
    })
    .then(() => alert('Vehicule ajouté avec succès'));
  }
}
}