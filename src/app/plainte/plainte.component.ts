import {Component, OnInit} from '@angular/core';
import {PlainteService} from '../plainte.service';
import {Plainte} from '../Plainte';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-plainte',
  templateUrl: './plainte.component.html',
  styleUrls: ['./plainte.component.css']
})
export class PlainteComponent implements OnInit {
  plainte: Plainte = new Plainte();
  users: User[];
  user: User;


  constructor(private router: Router, private plainteService: PlainteService, private userServiceService: UserServiceService) {
    this.user = new User();
    this.plainte = new Plainte();


  }

  ngOnInit(): void {
    this.userServiceService.findAll().subscribe(data => {
      console.log(data);
      this.users = data.filter(item => item.email.indexOf('admin') == -1);

    });
  }

  onSubmit() {
    console.log('on submit de la plainate!!');
    console.log('la plainte:', this.plainte);
    console.log('la nouvelle note :', this.plainte.user1.note);
    this.plainteService.save(this.plainte).subscribe(result => this.gotoPlainteConfirmation());
  }

  gotoPlainteConfirmation() {
    this.router.navigate(['/home']);

  }

}
