import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarBolaoDto } from '../requests/CriarBolaoDto';
import { BolaoResponse } from '../responses/Bolao.response';
import { PartidaResponse } from '../responses/Partida.response';
import { RankingResponse } from '../responses/Ranking.response';

@Injectable({
  providedIn: 'root'
})
export class BolaoService {

  constructor(private http: HttpClient) { }

  getParticipando(): Observable<BolaoResponse[]> {
    return this.http.get<BolaoResponse[]>('boloes/participando');
  }

  getById(idBolao: number): Observable<BolaoResponse> {
    return this.http.get<BolaoResponse>('boloes/' + idBolao);
  }

  participarBolao(idBolao: number) {
    return this.http.post('boloes/' + idBolao + '/participar', {});
  }

  getPartidasAtivas(idBolao: number) {
    return this.http.get('boloes/partidas-ativas/' + idBolao);
  }

  getHistoricoPartidas(idBolao: number): Observable<PartidaResponse[]> {
    return this.http.get<PartidaResponse[]>('boloes/historico-partidas/' + idBolao);
  }

  getRanking(idBolao: number): Observable<RankingResponse[]> {
    return this.http.get<RankingResponse[]>('boloes/' + idBolao + '/ranking');
  }

  criarBolao(criarBolaoDto: CriarBolaoDto) {
    return this.http.post('boloes', criarBolaoDto);
  }
}
