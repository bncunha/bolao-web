import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidasService } from 'src/app/services/api/partidas.service';
import { PartidasPorCampeonatoResponse } from 'src/app/services/responses/PartidasPorCampeonato.response';

@Component({
  selector: 'app-partidas-filter',
  templateUrl: './partidas-filter.component.html',
  styleUrls: ['./partidas-filter.component.scss']
})
export class PartidasFilterComponent implements OnInit {
  partidas$!: Observable<PartidasPorCampeonatoResponse[]>;

  constructor(
    private partidasService: PartidasService
  ) { }

  ngOnInit(): void {
    this.partidas$ = this.partidasService.getPartidas(undefined);
  }

}
