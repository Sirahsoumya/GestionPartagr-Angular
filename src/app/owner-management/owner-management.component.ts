import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service.service';
import {BienService} from '../bien.service';
import {CategorieService} from '../categorie.service';
import {CategorieBienService} from '../categorie-bien.service';
import {CategorieBien} from '../CategorieBien';
import {Categorie} from '../CategorieService';
import {Bien} from '../Bien';
import {Service} from '../Service';
import {DemandeBien} from '../DemandeBien';

@Component({
  selector: 'app-owner-management',
  templateUrl: './owner-management.component.html',
  styleUrls: ['./owner-management.component.css']
})
export class OwnerManagementComponent implements OnInit {
  public mode: boolean = true;
  categories: Categorie[];
  services: Service[];
  biens: Bien[];
  bien: Bien = new Bien();
  service: Service = new Service();
  selectedCategorie: any;
  selectedCategorieBien: any;
  selectedBien: any = -1;
  selectedService: any = -1;
  categorieBiens: CategorieBien[];
  demandeBien: DemandeBien = new DemandeBien();

  constructor(private router: Router, private serviceService: ServiceService, private bienService: BienService, private categorieService: CategorieService, private categorieBienService: CategorieBienService) {
  }

  ngOnInit(): void {
    this.categorieService.findAllService().subscribe(data => {
      console.log(data);

      this.categories = data;
      this.selectedCategorie = this.categories[0];
      return data;
    });
    this.categorieBienService.findAllBien().subscribe(data => {
      console.log(data);

      this.categorieBiens = data;

    });

  }

  setCategorie(status: string) {
    console.log('set Radio methode??' + status);
    if (status == 'Bien') {
      console.log('bien');
      this.mode = true;
      this.categorieBienService.findAllBien().subscribe(data => {
        console.log(data);
        this.categorieBiens = data;
        return data;
      });
    } else {
      console.log('service');
      this.mode = false;
      this.categorieService.findAllService().subscribe(data => {
        console.log(data);

        this.categories = data;
        this.selectedCategorie = this.categories[0];
        return data;
      });
    }
  }

  getSelectedBiens(selectedCategorieBien) {
    console.log('la methode de categorie bien??');
    console.log('getselected service methode??,', selectedCategorieBien);
    this.bienService.findBienByIdCategorie(selectedCategorieBien).subscribe(data => {
      console.log(data);
      this.biens = data;
    });
  }

  getSelectedServices(selectedCategorie) {
    console.log('getselected service methode??,', selectedCategorie);
    this.serviceService.findServiceByIdCategorie(selectedCategorie).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    // save bien
    console.log('on submit owner!!!');
    console.log('le contenu du bien : ', this.bien);
    this.bien.status = true;
    this.bienService.save(this.bien).subscribe(result => this.gotoConfirmation());
    console.log('le cout :', this.bien.cout);
  }

  gotoConfirmation() {
    this.router.navigate(['/confirmation']);
  }

  onSubmitService() {
    //save service
    console.log('le service : ', this.service);
    this.service.status = true;
    this.serviceService.save(this.service).subscribe(result => this.gotoConfirmation());

  }

}
