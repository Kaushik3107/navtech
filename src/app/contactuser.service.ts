import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactuserService {
  constructor(private http: HttpClient) {}

  postUser(val: any) {
    this.http.post('http://localhost:3000/users', val);
  }

  getUSer() {
    return this.http.get('http://localhost:3000/users');
  }
}
