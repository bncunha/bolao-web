import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnviarResultadoDto } from '../requests/EnviarResultadoDto';
import { PartidaResponse } from '../responses/Partida.response';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http: HttpClient) { }

  atualizarResultadoPartidas(resultadoDto: EnviarResultadoDto[]) {
    return this.http.patch<PartidaResponse[]>('partidas/salvar-resultado', resultadoDto);
  }
}
