import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {QuartierService} from '../quartier.service';
import {Quartier} from '../quartier';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  quartiers: Quartier[];
  quartier: Quartier;
  user: User;
  selectedQuartier: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quartierService: QuartierService,
    private userServiceService: UserServiceService) {
    this.user = new User();
    this.quartier = new Quartier();
  }

  ngOnInit(): void {
    this.quartierService.findAllQuartier().subscribe(data => {
      console.log(data);
      this.quartiers = data;
    });
  }

  onSubmit() {
    console.log('selectedQuartier : ', this.selectedQuartier);
    console.log(this.user);
    console.log('ca marche');
    this.user.note = '5';
    this.userServiceService.save(this.user).subscribe(result => this.gotoUserList());

  }

  gotoUserList() {
    this.router.navigate(['/connexion']);
  }

  remove() {
    console.log('user-form entrer ou nn');
  }


}



