import {DemandeServiceKey} from './DemandeServiceKey';
import {Service} from './Service';
import {User} from './user';
export class DemandeService {
  idDemServ: DemandeServiceKey = new DemandeServiceKey();
  date_demande: Date = new Date();
  date_retour: Date = new Date();
  commentaire: string;
  note: number;
  user: User = new User();
  service: Service = new Service();
}
