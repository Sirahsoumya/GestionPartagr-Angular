import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Categorie} from './CategorieService';
import {CategorieBien} from './CategorieBien';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private http: HttpClient) {
    //this.categorie = 'http://localhost:8081/';
  }
  public findAllService(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('http://localhost:8081/serviceCat/all');
  }
  public saveCategoriService(categorieService: Categorie) {
    return this.http.post<CategorieBien>('http://localhost:8081/serviceCat/save',categorieService);
  }
  public DeleteCategorieS( id_catServ: string) {
    return this.http.delete('http://localhost:8081/serviceCat/Delete/' + id_catServ);
  }
  deleteCategorieService(categorieService: Categorie) {
    return this.http.delete('http://localhost:8081/serviceCat/Delete/' + categorieService.id_catServ);
  }

}
