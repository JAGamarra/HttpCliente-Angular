import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserById(id: any) {
    return from(this.http.get(`http://localhost:3000/usuarios/${id}`));
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  createUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', user);
  }

  updateUser(user: any, id: string): Observable<any> {
    return this.http.put(`http://localhost:3000/usuarios/${id}`, user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/' + id);
  }
}
