import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public stockedIdUser:number;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  public Delete( id_user: string) {
    console.log('le fonction delete??');
     return this.http.delete('http://localhost:8081/Delete/' + id_user);
  }

  deleteUser(user: User) {
    console.log('user-service');
    console.log(user.id_user);
    return this.http.delete('http://localhost:8081/Delete/' + user.id_user);
  }

  checkUser(user: User): Observable<User>{
    console.log('checkuser methode');
    console.log('test' + user.email);
    return this.http.post<User>('http://localhost:8081/checkUser' , user);
  }
}
