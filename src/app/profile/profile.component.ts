import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwordVisibility:string='password';
  constructor(public registerSer:RegisterService) { }

  ngOnInit(): void {
  }
  showPass(){
    this.passwordVisibility="text";
  }
}
