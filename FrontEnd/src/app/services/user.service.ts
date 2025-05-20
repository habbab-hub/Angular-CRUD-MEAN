import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000"
  http = inject(HttpClient)
  constructor() { }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  getUser(id:string){
    return this.http.get<User>(this.baseUrl + '/users/' + id);
  }

  addUser(model:User){
    return this.http.post(this.baseUrl + '/users', model);
  }

  updateUser(id:string, model:User){
    return this.http.put(this.baseUrl + '/users/' + id, model)
  }

  deleteUser(id:string){
    return this.http.delete(this.baseUrl + '/users/' + id)
  }
}
