import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnviarResultadoDto } from '../requests/EnviarResultadoDto';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http: HttpClient) { }

  atualizarResultadoPartidas(resultadoDto: EnviarResultadoDto[]) {
    return this.http.patch('partidas/salvar-resultado', resultadoDto);
  }
}
