import { Component, OnInit } from '@angular/core';
//----------------------
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
  user: any;
  nomUtilisateur : string;
  constructor(public local: LocalStorageService, public session: SessionStorageService) {}

  ngOnInit(): void {
    this.nomUtilisateur= this.local.get("stockedNameUser");
  }

}
