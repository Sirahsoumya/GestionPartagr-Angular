import {Quartier} from './quartier';

export class User {
  id_user: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  tel: string;
  quartier: Quartier=new Quartier();
  note:string;

}


