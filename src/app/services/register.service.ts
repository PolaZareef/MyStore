import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users:Users[]=[];

  constructor() { }
  addUser(user:Users){
    this.users.push(user);
  }
}
