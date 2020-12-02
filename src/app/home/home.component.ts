import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../user';
import {LocalStorageService, SessionStorageService, LocalStorage, SessionStorage} from 'angular-web-storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();
  nomUtilisateur: string;

  constructor(public local: LocalStorageService, public session: SessionStorageService) {
  }

  ngOnInit(): void {
    console.log('nom utilisateur :', this.local.get('stockedNameUser'));
    this.nomUtilisateur = this.local.get('stockedNameUser');
    console.log('id utilisateur :', this.local.get('stockedIdUser'));

  }

}
