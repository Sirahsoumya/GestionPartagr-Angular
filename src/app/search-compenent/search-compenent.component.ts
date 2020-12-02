import {Component, Inject, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Categorie} from '../CategorieService';
import {CategorieService} from '../categorie.service';
import {CategorieBienService} from '../categorie-bien.service';
import {CategorieBien} from '../CategorieBien';
import {Service} from '../Service';
import {ServiceService} from '../service.service';
import {BienService} from '../bien.service';
import {Bien} from '../Bien';
import {DemandeBien} from '../DemandeBien';
import {DemandeBienService} from '../demande-bien.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
//--------------------
import {LocalStorageService, SessionStorageService, LocalStorage, SessionStorage} from 'angular-web-storage';
import {DemandeServiceService} from '../demande-service.service';
import {DemandeService} from '../DemandeService';

@Component({
  selector: 'app-search-compenent',
  templateUrl: './search-compenent.component.html',
  styleUrls: ['./search-compenent.component.css']
})
export class SearchCompenentComponent implements OnInit {
  public mode: boolean = true;
  categories: Categorie[];
  services: Service[];
  biens: Bien[];
  selectedCategorie: any;
  selectedCategorieBien: any;
  selectedBien: any = -1;
  selectedService: any = -1;
  categorieBiens: CategorieBien[];
  demandeBien: DemandeBien = new DemandeBien();
  demandeService: DemandeService = new DemandeService();

  constructor(public local: LocalStorageService, public session: SessionStorageService, private router: Router, private categorieService: CategorieService, private userServiceService: UserServiceService, private categorieBienService: CategorieBienService, private serviceService: ServiceService, private bienService: BienService, private demandeBienService: DemandeBienService, private demandeServiceService: DemandeServiceService) {
  }

  ngOnInit(): void {
    this.categorieService.findAllService().subscribe(data => {
      console.log(data);
      this.categories = data;
      return data;
    });
    this.categorieBienService.findAllBien().subscribe(data => {
      console.log(data);
      this.categorieBiens = data;
      return data;
    });
    this.demandeBien.userB.id_user = 1;
    this.demandeBien.date_demande = new Date('2000-01-01');
    this.demandeBien.date_retour = new Date('2000-01-01');
  }

  setCategorie(status: string) {
    console.log('set Radio methode??' + status);
    if (status == 'Bien') {
      console.log('bien');
      this.selectedService = -1;
      this.mode = true;
      this.categorieBienService.findAllBien().subscribe(data => {
        console.log(data);
        this.categorieBiens = data;
        return data;
      });
    } else {
      console.log('service');
      this.selectedBien = -1;
      this.mode = false;
      this.categorieService.findAllService().subscribe(data => {
        console.log(data);
        this.categories = data;
        this.selectedCategorie = this.categories[0];
        return data;
      });
    }
  }

  getSelectedServices(selectedCategorie) {
    console.log('getselected service methode??,', selectedCategorie);
    this.serviceService.findServiceByIdCategorie(selectedCategorie).subscribe(data => {
      console.log(data);
      this.services = data;
    });
  }

  getSelectedBiens(selectedCategorieBien) {
    console.log('la methode de categorie bien??');
    console.log('getselected service methode??,', selectedCategorieBien);
    this.bienService.findBienByIdCategorie(selectedCategorieBien).subscribe(data => {
      console.log(data);
      this.biens = data;
    });
  }

  getSelectedBien(selectedBien) {
    console.log('getselectBien', selectedBien);
    this.demandeBien.bienB.id_bien = selectedBien;
  }

  getSelectedService(selectedService) {
    console.log('service selectionee!!', selectedService);
    this.demandeService.service.id_serv = selectedService;
  }

//DemandeBien
  onSubmit() {
    this.demandeBien.userB.id_user = this.local.get('stockedIdUser');
    console.log('le id de user de demande bien : ', this.demandeBien.userB.id_user);
    console.log('DemandeService ca marche ou pas!!!');
    console.log('le id du bien :', this.demandeBien.bienB.id_bien);
    this.demandeBienService.save(this.demandeBien).subscribe(result => this.gotoDemandeConfirmation());
  }

  onSubmitService() {
    this.demandeService.user.id_user = this.local.get('stockedIdUser');
    console.log('le id de user du service  : ', this.demandeService.user.id_user);
    console.log('DemandeService ca marche ou pas!!!');
    console.log('le id du service :', this.demandeService.service.id_serv);
    this.demandeServiceService.saveDemandeService(this.demandeService).subscribe(result => this.gotoDemandeConfirmation());
  }

  private gotoDemandeConfirmation() {
    this.router.navigate(['/confirmation']);
  }
}
