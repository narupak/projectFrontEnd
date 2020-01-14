import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http : HttpClient) { }
  public token : string;
  public program : string = 'home';

  register(payload){
    payload = {
        username: payload.username,
        password: payload.password,
        email: payload.email,
        tel: payload.tel,
        firstname: payload.firstName,
        lastname: payload.lastName,
        genderId: +payload.gender,
        statusUserId: 1
    }
    return this.http.post('/api/register' , payload).pipe(rs=>{
      return rs;
    });
  }

  login(payload){
    return this.http.post('/api/authenticate' , payload).pipe();
  }

  getRoleWithToken(token){
    const payload = {
      token : localStorage.getItem('access-token')
    }
    return this.http.post('/api/getRoleWithToken' , payload , { headers : {
      'Authorization': `Bearer ${localStorage.getItem('access-token')}`
    }}).pipe();
  }
}
