import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  venue: any;
  availability: any;

  constructor(private http: Http, public jwtHelper: JwtHelper) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete('http://localhost:3000/users/user/'+id)
    .map(res => res.json());
}

  updateUser(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/update/'+id,{headers:headers})
      .map(res => res.json());
}

  deleteVenue(id){
    return this.http.delete('http://localhost:3000/venues/venue/'+id)
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users/usersList')
      .map(res => res.json());
  }


  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  addVenue(venue){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/venues/addVenue', venue, {headers: headers})
      .map(res => res.json());
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
