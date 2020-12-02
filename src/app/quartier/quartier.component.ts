import {Component, OnInit} from '@angular/core';
import {QuartierService} from '../quartier.service';
import {Quartier} from '../quartier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.component.html',
  styleUrls: ['./quartier.component.css']
})
export class QuartierComponent implements OnInit {
  quartier: Quartier = new Quartier();

  constructor(private quartierService: QuartierService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('le quartier :', this.quartier);
    this.quartierService.saveQuartier(this.quartier).subscribe(result => this.gotoListQuartier());
  }

  private gotoListQuartier() {
    this.router.navigate(['/listeQuartier']);
  }
}
