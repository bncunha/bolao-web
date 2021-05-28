import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarPalpiteDto } from '../requests/CriarPalpiteDto';

@Injectable({
  providedIn: 'root'
})
export class PalpiteService {

  constructor(
    private http: HttpClient
  ) { }

  realizarPalpites(criarPalpiteDto: CriarPalpiteDto[]) {
    return this.http.post('palpites', criarPalpiteDto);
  }
}
