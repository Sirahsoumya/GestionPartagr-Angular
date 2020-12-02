import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  private id_user: string;


  constructor(private userServiceService: UserServiceService) {
  }

  ngOnInit() {
    this.userServiceService.findAll().subscribe(data => {
      this.users=data.filter(item=>item.email.indexOf("admin")==-1);
    });
  }

  delUser(user: User): void {
     console.log('nom=' + user.nom);
     console.log('id=' + user.id_user);
     this.userServiceService.deleteUser(user).subscribe((response) => {
      console.log("deleted");
  });
}

}
