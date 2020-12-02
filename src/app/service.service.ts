import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieBien} from './CategorieBien';
import {Service} from './Service';
import {Bien} from './Bien';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public findServiceByIdCategorie(idCategorie): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/services/searchService/'+ idCategorie);
  }
//services/save
  public save(service: Service) {
    return this.http.post<Service>('http://localhost:8081/services/save/', service);
  }



}
