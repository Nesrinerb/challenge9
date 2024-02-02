import { Component, Input, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { Router } from '@angular/router';
import { SallesService } from '../salles.service';

@Component({
  selector: 'app-salles-list-component',
  templateUrl: './salles-list-component.component.html',
  styleUrls: ['./salles-list-component.component.css'],
})
export class SallesListComponentComponent implements OnInit {
  salles: Salle[] = [];
  constructor(private _router: Router, private _sallesService: SallesService) {}

  ngOnInit() {
    this.salles = this._sallesService.getSalle();
  }

  select(salle: Salle) {
    this._router.navigate(['/salles', salle.id]);
  }
}
