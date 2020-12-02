import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Categorie} from './CategorieService';
import {HttpClient} from '@angular/common/http';
import {CategorieBien} from './CategorieBien';
import {Bien} from './Bien';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private http: HttpClient) { }

  public findBienByIdCategorie(idCategorieBien): Observable<Bien[]> {
    console.log('bien service entrer ou nn!!');
    return this.http.get<Bien[]>('http://localhost:8081/biens/searchBien/' + idCategorieBien);
  }

  public save(bien: Bien) {
    return this.http.post<Bien>('http://localhost:8081/biens/save/', bien);
  }
}
