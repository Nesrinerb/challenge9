import { Injectable } from '@angular/core';
import { Salle } from './salle';

@Injectable({
  providedIn: 'root',
})
export class SallesService {
  constructor() {}
  getSalle() {
    return [
      { id: 1, nom: 'éléctro mecanique', capacite: 30 },
      { id: 2, nom: 'Genie civile', capacite: 50 },
      { id: 3, nom: 'IOT', capacite: 100 },
      { id: 4, nom: 'Informatique mecanique', capacite: 10 },
      { id: 5, nom: 'BI', capacite: 50 },
    ];
  }
}
