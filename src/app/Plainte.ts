import {User} from './user';

export class Plainte{

  id_plainte : number;
  date_plainte : Date=new Date();
  desc_plainte : string;
  user1 : User=new User();

}
