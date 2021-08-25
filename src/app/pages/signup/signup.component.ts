import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from '../models/auth-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  fromModel = { } as Auth
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  signup(){
    console.log(this.fromModel)
    this.authService.signup(this.fromModel).subscribe((res:HttpResponse<any>)=>{
      if(res.status===200){
        this.router.navigate(['/user-info'])
      }else{
        alert("User Already exits")
      }
      
    })

  }
}
