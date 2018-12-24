import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  constructor(public http: HttpClient) { }

  baseUrl: string = "https://api.got.show/api";
  headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin','*');

}
