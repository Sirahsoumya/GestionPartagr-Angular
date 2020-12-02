import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DemandeBien} from './DemandeBien';
import {Observable} from 'rxjs';
import {Bien} from './Bien';

@Injectable({
  providedIn: 'root'
})
export class DemandeBienService {

  constructor(private http: HttpClient) {
  }


  public save(demandeBien: DemandeBien) {

    return this.http.post<DemandeBien>('http://localhost:8081/demandeBien/save', demandeBien);
  }
  public getDemandeBienByIdBien(id_bien) {
    return this.http.get<DemandeBien>('http://localhost:8081/demandeBien/findDemandeBien/'+id_bien);
  }


}
