import { Injectable } from '@angular/core';
import { User } from '../pages/models/user.model';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private webReqService:WebReqService) { }

  AddUser(userForm:User){
    return this.webReqService.post('create-info',userForm)
  }

  getUserData(){
    return this.webReqService.get('user-info')
  }

  getSingleUserDta(id:string){
  return  this.webReqService.get(`user-info/${id}`)
  }

  updateUserData(editForm:User){
    return this.webReqService.put('edit-user', editForm)
  }

  deleteUserdata(id:string){

    return this.webReqService.delete(`delete-user/${id}`)
  }
}
