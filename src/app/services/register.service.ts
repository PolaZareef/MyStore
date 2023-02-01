import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users:Users[]=[];
  user={} as Users;
  constructor(private http:HttpClient) { 

   }
  addUser(user:Users){
    this.users.push(user);
  }
  postUser(user:Users){
    return this.http.post('https://users-api-production-e5aa.up.railway.app/users',user)
  }
}
