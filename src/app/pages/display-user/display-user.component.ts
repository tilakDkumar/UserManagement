import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserFormService } from 'src/app/services/user-form.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  admin=true
  userData : User[]=[];
  constructor(private authservice : AuthService,private userFormServices:UserFormService,private router:Router) { }

  ngOnInit(): void {
    this.userFormServices.getUserData().subscribe((res:any)=>{
     this.userData =res.data
    })
  }

  deleteData(id:any){
    this.userFormServices.deleteUserdata(id).subscribe((res:any)=>{
      this.router.navigate(['/user-info'])
    })
  }

  logout(){
    this.authservice.logout()
  }
}
