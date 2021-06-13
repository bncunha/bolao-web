import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateUtils } from 'src/app/utils/date.util';
import { EnviarResultadoDto } from '../requests/EnviarResultadoDto';
import { PartidaResponse } from '../responses/Partida.response';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  constructor(private http: HttpClient) { }

  isPartidaDisabled(partida: any) {
    return DateUtils.compare(new Date(), DateUtils.subtract(new Date(partida.data), {minutes: 30})) >= 0;
  }

  atualizarResultadoPartidas(resultadoDto: EnviarResultadoDto[]) {
    return this.http.patch<PartidaResponse[]>('partidas/salvar-resultado', resultadoDto);
  }
}
