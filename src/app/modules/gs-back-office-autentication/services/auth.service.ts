import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '../../../assets/mock/login.json';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      sessionStorage.getItem('currentUser') || '{}'
    );
  }

  login(credenciales: any): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        if (
          data.email === credenciales.email &&
          data.password === credenciales.password
        ) {
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          return data;
        } else {
          throw new Error('Credenciales incorrectas');
        }
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
