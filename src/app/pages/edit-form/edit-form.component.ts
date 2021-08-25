import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserFormService } from 'src/app/services/user-form.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  form = {} as User
  submitted = false;
 
  userId :any
  constructor( private fb:FormBuilder,private userFormService:UserFormService,private route:ActivatedRoute,private router:Router) { }
  registrationForm = this.fb.group({
    firstname: [this.form.firstname, Validators.required],
    lastname: [this.form.lastname, Validators.required],
    email: [this.form.email, Validators.required],
    phone: [this.form.phone, Validators.required,],
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

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        if(params.id){
          this.userId =params.id
          this.userFormService.getSingleUserDta(params.id).subscribe((userData:any)=>{
            this.form= userData.data
            this.registrationForm = this.fb.group({
              id:[this.form._id],
              firstname: [this.form.firstname, Validators.required],
              lastname: [this.form.lastname, Validators.required],
              email: [this.form.email, Validators.required],
              phone: [this.form.phone, Validators.required,],
              about: [this.form.about, Validators.required],
              role: [this.form.role, Validators.required],
              organization: [this.form.organization, Validators.required],
              start_date: [this.form.start_date, Validators.required],
              end_date: [this.form.end_date, Validators.required],
              status: [this.form.status, Validators.required]
            });
          
          })
        }
      }
    )

    
  }

  update() {
    this.form = this.registrationForm.value
    console.log(this.form)
    this.userFormService.updateUserData(this.form).subscribe(()=>{
      this.router.navigate(['/user-info'])
    })
  }

}
