import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Plainte} from './Plainte';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlainteService {
  private plainteUrl:string;

  constructor(private http: HttpClient) {
    this.plainteUrl = 'http://localhost:8081/plainte/';
  }

  public save(plainte: Plainte) {
    return this.http.post<Plainte>('http://localhost:8081/plainte/save', plainte);
  }
  public findAllPlainte(): Observable<Plainte[]>{
    return this.http.get<Plainte[]>('http://localhost:8081/plainte/all')
  }






}
