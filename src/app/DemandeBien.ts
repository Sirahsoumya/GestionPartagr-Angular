import {Bien} from './Bien';
import {User} from './user';
import {DemandeBienKey} from './DemandeBienKey';

export class DemandeBien {

  //idDemandeBien:DemandeBienKey;
  user: number;
  bien:number;
  note : number;
  date_demande : Date=new Date();
  date_retour : Date=new Date();
  bienB :Bien = new Bien();
  commentaire:String;
  userB:User = new User();
}
