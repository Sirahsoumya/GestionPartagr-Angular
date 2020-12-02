import {Component, OnInit} from '@angular/core';
import {CategorieBienService} from '../categorie-bien.service';
import {CategorieBien} from '../CategorieBien';

@Component({
  selector: 'app-categorie-bien-list',
  templateUrl: './categorie-bien-list.component.html',
  styleUrls: ['./categorie-bien-list.component.css']
})
export class CategorieBienListComponent implements OnInit {
  categoriBiens: CategorieBien[];

  constructor(private categorieBienService: CategorieBienService) {
  }

  ngOnInit(): void {
    this.categorieBienService.findAllBien().subscribe(data => {
      this.categoriBiens = data;
    });
  }

  delCategorieBien(categoriebien: CategorieBien): void {
    this.categorieBienService.deleteCategorieBien(categoriebien).subscribe((response) => {
      console.log('deleted');
    });
  }
}
