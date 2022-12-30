import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName:string='';
  password:string='';
  isLogin:boolean=false;

  constructor() { }
}
