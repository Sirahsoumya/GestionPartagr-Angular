import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../categorie.service';
import {Categorie} from '../CategorieService';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories: Categorie[];

  constructor(private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.categorieService.findAllService().subscribe(data => {
      this.categories = data;
    });

  }

  delCategorieService(categorieService: Categorie): void {
    this.categorieService.deleteCategorieService(categorieService).subscribe((response) => {
      console.log('deleted');
    });
  }
}

