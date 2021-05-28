import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarBolaoDto } from '../requests/CriarBolaoDto';
import { BolaoResponse } from '../responses/Bolao.response';

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

  criarBolao(criarBolaoDto: CriarBolaoDto) {
    return this.http.post('boloes', criarBolaoDto);
  }
}
