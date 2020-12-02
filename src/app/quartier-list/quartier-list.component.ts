import { Component, OnInit } from '@angular/core';
import {QuartierService} from '../quartier.service';
import {Quartier} from '../quartier';
import {User} from '../user';
@Component({
  selector: 'app-quartier-list',
  templateUrl: './quartier-list.component.html',
  styleUrls: ['./quartier-list.component.css']
})
export class QuartierListComponent implements OnInit {
  quartiers:Quartier[];
  private id_quartier: string;
  constructor(private quartierService:QuartierService) { }
  ngOnInit(): void {
    this.quartierService.findAllQuartier().subscribe(data => {
      this.quartiers=data;
    });
  }
  delQuartier(quartier: Quartier): void {
    console.log("la methose delete Quartier");
    this.quartierService.deleteQuartier(quartier).subscribe((response) => {
      console.log("deleted");
    });
  }
}
