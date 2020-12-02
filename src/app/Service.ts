import {Categorie} from './CategorieService';

export class Service {
  id_serv : number;
  type_service : string;
  cout : string;
  status : boolean;
  date_debut:Date=new Date();
  date_fin:Date=new Date();
  categorie:Categorie=new Categorie();

}
