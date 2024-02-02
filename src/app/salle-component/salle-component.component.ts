import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from '../salle';
import { SallesService } from '../salles.service';

@Component({
  selector: 'app-salle-component',
  templateUrl: './salle-component.component.html',
  styleUrls: ['./salle-component.component.css'],
})
export class SalleComponentComponent implements OnInit {
  salleId = 0;
  salleDetail: any;

  constructor(
    private _route: ActivatedRoute,
    private _sallesService: SallesService
  ) {}
  ngOnInit() {
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '');
    this.salleId = id;
    this.salleDetail = this._sallesService.getSalle().find((el) => el.id == id);
    console.log(this.salleDetail);
  }
}
