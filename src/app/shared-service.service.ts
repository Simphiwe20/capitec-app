import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  
  genericPost(endpoint: any, body: any) {
    return this.http.post(this.serverUrl + endpoint, body)
  }

  genericGet(endpoint: string){
    return this.http.get(this.serverUrl+endpoint)
  }

  // genericDelete(endpoint: string){
  //   return this.http.delete(this.serverUrl+endpoint)
  // }

  genericUpdate(endpoint: any, body: any){
    return this.http.post(this.serverUrl + endpoint, body)
  }

  get(key: string, sessionType: string): any {
    let data = sessionType === 'session' ? sessionStorage.getItem(key) : localStorage.getItem(key);
    return data ? JSON.parse(data) : data;
  }
}
