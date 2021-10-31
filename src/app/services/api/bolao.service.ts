import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CriarBolaoDto } from '../requests/CriarBolaoDto';
import { SalvarPalpiteBonusDto } from '../requests/SalvarPalpiteBonusDto';
import { BolaoResponse } from '../responses/Bolao.response';
import { PalpiteBonusResponse } from '../responses/PalpiteBonus.response';
import { PartidaResponse } from '../responses/Partida.response';
import { RankingResponse } from '../responses/Ranking.response';

@Injectable({
  providedIn: 'root'
})
export class BolaoService {
  private cache: any = {};

  constructor(private http: HttpClient) { }

  getParticipando(): Observable<BolaoResponse[]> {
    if (this.cache['PARTICIPANDO']) return of(this.cache['PARTICIPANDO']);
    return this.http.get<BolaoResponse[]>('boloes/participando').pipe(
      tap(r => this.cache['PARTICIPANDO'] = r)
    );
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

  salvarPalpiteBonus(idBolao: number, salvarPalpiteBonus: SalvarPalpiteBonusDto) {
    return this.http.post('boloes/palpite-bonus/' + idBolao, salvarPalpiteBonus);
  }

  getPalpiteBonus(idBolao: number): Observable<PalpiteBonusResponse> {
    return this.http.get<PalpiteBonusResponse>('boloes/palpite-bonus/' + idBolao);
  }

  getDetalhesPartida(idBolao: number, idPartida: number) {
    return this.http.get<any>(`boloes/detalhes-partida/${idBolao}/${idPartida}`);
  }
}
