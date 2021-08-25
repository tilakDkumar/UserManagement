import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../pages/models/auth-model';
import { User } from '../pages/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class WebReqService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000"
  }


  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  post(uri: string, playload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, playload)
  }

  put(uri: string, playload: Object) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, playload)
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }

  login(formModel:Auth){
    return this.http.post(`${this.ROOT_URL}/user-login`,
      formModel
    ,{
      observe:'response'
    })
  }

  signup(formModel: Auth) {
    console.log(formModel)
    return this.http.post(`${this.ROOT_URL}/user-signup`, 
      formModel
    , {
      observe: 'response'
    })
  }
  


}
