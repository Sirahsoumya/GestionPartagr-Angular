import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quartier} from './quartier';
import {Categorie} from './CategorieService';
import {CategorieBien} from './CategorieBien';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class QuartierService {
  constructor(private http: HttpClient) { }

  public findAllQuartier(): Observable<Quartier[]>{
    console.log('quartier recupere ou ps !!');
    return this.http.get<Quartier[]>('http://localhost:8081/quartiers/all');
  }
  public saveQuartier(quartier: Quartier) {
    return this.http.post<Quartier>('http://localhost:8081/quartiers/save',quartier);
  }
  public DeleteQ( id_quartier: string) {
    return this.http.delete('http://localhost:8081/quartiers/Delete/' + id_quartier);
  }
  deleteQuartier(quartier: Quartier) {
    return this.http.delete('http://localhost:8081/quartiers/Delete/' + quartier.id_quartier);
  }
}
