import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName:string='';
  password:string='';
  isLogin:boolean=false;

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get('https://users-api-production-e5aa.up.railway.app/users');
  }
}
