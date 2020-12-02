import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from './CategorieService';
import {CategorieBien} from './CategorieBien';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class CategorieBienService {
  constructor(private http: HttpClient) { }
  public findAllBien(): Observable<CategorieBien[]> {
    console.log('categorieBien!!');
    return this.http.get<CategorieBien[]>('http://localhost:8081/biencateg/all');
  }
  public saveCategorieBien(categorieBien: CategorieBien) {
    return this.http.post<CategorieBien>('http://localhost:8081/biencateg/save', categorieBien);
  }
  public DeleteCategorieB( id_catBien: string) {
    return this.http.delete('http://localhost:8081/biencateg/Delete/' + id_catBien);
  }
  deleteCategorieBien(categorieBien: CategorieBien) {
    return this.http.delete('http://localhost:8081/biencateg/Delete/' + categorieBien.id_catBien);
  }

}
