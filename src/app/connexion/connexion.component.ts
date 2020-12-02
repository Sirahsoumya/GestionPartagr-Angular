import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {ActivatedRoute, Router} from '@angular/router';
//--------------------
import {LocalStorageService, SessionStorageService, LocalStorage, SessionStorage} from 'angular-web-storage';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: User;

  constructor(
    public local: LocalStorageService, public session: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private userServiceService: UserServiceService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  /*onClick(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }*/
  connectUser(user: User) {

    console.log('connect user email', this.user.email);
    this.userServiceService.checkUser(user).subscribe(
      result => {
        console.log(result);
        if (result == null) {
          console.log('entrer votre email et password');
        } else {
          this.local.set('stockedIdUser', result.id_user);
          this.local.set('stockedNameUser', result.nom);
          if (result.email == 'admin@gmail.com') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user-management']);
          }
        }
      });
  }
}
