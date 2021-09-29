import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DateUtils } from 'src/app/utils/date.util';
import { CriarPalpiteDto } from '../requests/CriarPalpiteDto';

@Injectable({
  providedIn: 'root'
})
export class PalpiteService {

  constructor(
    private http: HttpClient
  ) { }

  realizarPalpites(criarPalpiteDto: CriarPalpiteDto[]) {
    return this.http.post<any[]>('palpites', criarPalpiteDto);
  }

  isPalpiteBonusDisponivel(idBolao: number): Observable<boolean> {
    return this.http.get<boolean>('palpites/bonus/disponibilidade/' + idBolao);
  }

  getPalpitesParticipantes(idBolao: number) {
    return this.http.get<boolean>('palpites/' + idBolao);
  }
}
