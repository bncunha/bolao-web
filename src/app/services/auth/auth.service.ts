import { Injectable, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/pages/login/dto/LoginDto';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../responses/Login.response';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario?: LoginResponse;

  constructor(
    private http: HttpClient
  ) {
    this.recuperarInformacoesUsuario();
  }

  recuperarInformacoesUsuario() {
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : null;
    this.usuario = user;
  }

  salvarInformacoesUsuario(usuario: any) {
    localStorage.setItem('user', JSON.stringify(usuario));
  }

  logout() {
    this.usuario = undefined;
    localStorage.removeItem('user');
  }

  login(login: LoginDto) {
    return this.http.post<LoginResponse>('auth/login', login).pipe(
      tap((result) => {
        this.usuario = result;
        this.salvarInformacoesUsuario(result);
      })
    );
  }

}
