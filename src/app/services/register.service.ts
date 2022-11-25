import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users:Users[]=[];
  user={} as Users;
  constructor() { 

   }
  addUser(user:Users){
    this.users.push(user);
  }
}
