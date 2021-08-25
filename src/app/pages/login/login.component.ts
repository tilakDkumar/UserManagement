import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from '../models/auth-model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  fromModel ={} as Auth
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.fromModel)
    this.authservice.login(this.fromModel).subscribe((res:HttpResponse<any>)=>{
      if(res.status ===200){
        console.log(res.body)
        this.fromModel =res.body
        this.router.navigate(['/user-info'])
      }
 
    })
  }
}
