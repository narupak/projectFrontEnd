import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http : HttpClient) { }

  register(payload){
    return this.http.post('http://localhost:2017/api/register' , payload).pipe(rs=>{
      return rs;
    });
  }
}
