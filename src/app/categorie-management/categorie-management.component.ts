import {Component, OnInit} from '@angular/core';
import {Categorie} from '../CategorieService';
import {CategorieService} from '../categorie.service';
import {Router} from '@angular/router';
import {CategorieBienService} from '../categorie-bien.service';
import {CategorieBien} from '../CategorieBien';

@Component({
  selector: 'app-categorie-management',
  templateUrl: './categorie-management.component.html',
  styleUrls: ['./categorie-management.component.css']
})
export class CategorieManagementComponent implements OnInit {
  categorie: Categorie = new Categorie();
  public click: boolean = true;
  categorieBien: CategorieBien = new CategorieBien();

  constructor(private categorieService: CategorieService, private router: Router, private categorieBienService: CategorieBienService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('categorie:', this.categorie);
    this.categorieService.saveCategoriService(this.categorie).subscribe(result => this.gotoListCategorie());
  }

  gotoListCategorie() {
    this.router.navigate(['/listeCategorieService']);
  }

  onSubmitBien() {
    console.log('categorieBien :', this.categorieBien);
    this.categorieBienService.saveCategorieBien(this.categorieBien).subscribe(result => this.gotoListCategorieBien());
  }

  gotoListCategorieBien() {
    this.router.navigate(['/listeCategorieBien']);
  }
}
