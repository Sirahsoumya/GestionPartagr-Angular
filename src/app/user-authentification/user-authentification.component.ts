import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-authentification',
  templateUrl: './user-authentification.component.html',
  styleUrls: ['./user-authentification.component.css']
})
export class UserAuthentificationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('user-auhthentification');
  }

}
