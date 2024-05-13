import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment.development';
@Injectable({
  providedIn: 'root'
})
export class SharedapiService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }
  // add
  genericPost(endPoint: String, payload: any) {
    return this.http.post(this.baseUrl + endPoint, payload)
  }

  //  Post
  genericPut(endpoint: string, payload: any) {
    return this.http.put(this.baseUrl + endpoint, payload)
  }

}
