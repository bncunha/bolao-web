import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroDto } from 'src/app/pages/cadastro/dto/CadastroDto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cadastro: CadastroDto) {
    return this.http.post('usuarios/cadastrar', cadastro);
  }
}
