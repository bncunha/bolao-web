import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CampeonatoResponse } from '../responses/Campeonato.response';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(
    private http: HttpClient
  ) { }

  getCampeonatosCorrentesPorPais(pais: string): Observable<CampeonatoResponse[]> {
    return this.http.get<CampeonatoResponse[]>(`campeonatos/source/ativos/${pais}`).pipe(
      map(resultado => {
        return resultado.sort((a, b) => a.nome.localeCompare(b.nome))
      })
    );
  }
}
