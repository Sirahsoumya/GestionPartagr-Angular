import { Injectable } from '@angular/core';
import {DemandeService} from './DemandeService';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeServiceService {

  constructor(private http: HttpClient) { }


  public saveDemandeService(demandeService:DemandeService){
    return this.http.post<DemandeService>('http://localhost:8081/demandeService/save',demandeService);
  }

}
