import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormService } from 'src/app/services/user-form.service';

import { User } from '../models/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form = {} as User
  submitted = false;
  constructor(private fb :FormBuilder,private userFormService:UserFormService,private router:Router) { }

  registrationForm = this.fb.group({
    firstname: [this.form.firstname,Validators.required],
    lastname: [this.form.lastname, Validators.required],
    email: [this.form.email, Validators.required],
    phone: [this.form.phone, Validators.required, ],
    about: [this.form.about, Validators.required],
    role: [this.form.role, Validators.required],
    organization: [this.form.organization, Validators.required],
    start_date: [this.form.start_date, Validators.required],
    end_date: [this.form.end_date, Validators.required],
    status: [this.form.status, Validators.required]
  });
  get registerFormControl() {
    return this.registrationForm.controls;
  }
  ngOnInit(): void {
  }


  onSubmit(){
    this.form =this.registrationForm.value
    console.log(this.form)
    this.userFormService.AddUser(this.form).subscribe(()=>{
      this.router.navigate(['/user-info'])
    })
  }
}
