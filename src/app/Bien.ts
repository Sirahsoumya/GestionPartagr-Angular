import {DemandeBien} from './DemandeBien';
import {CategorieBien} from './CategorieBien';

export class Bien {
  id_bien : number;
  type_bien : string;
  cout : string;
  image : string;
  status : boolean;
  date_fin : Date=new Date();
  date_debut : Date=new Date();
  demandebien:DemandeBien[];
  //private CategorieBien categorieBien;
  categorieBien:CategorieBien=new CategorieBien();
}
