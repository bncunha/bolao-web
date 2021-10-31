import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidasService } from 'src/app/services/api/partidas.service';
import { PartidaResponse } from 'src/app/services/responses/Partida.response';
import { PartidaAoVivoResponse } from 'src/app/services/responses/PartidaAoVivo.response';

@Component({
  selector: 'app-partidas-aovivo',
  templateUrl: './partidas-aovivo.component.html',
  styleUrls: ['./partidas-aovivo.component.scss']
})
export class PartidasAovivoComponent implements OnInit {
  aoVivo$!: Observable<PartidaAoVivoResponse[]>;

  constructor(
    private partidaService: PartidasService
  ) { }

  ngOnInit(): void {
    this.getAovivo();
  }

  getAovivo() {
    this.aoVivo$ = this.partidaService.getPartidasAoVivo();
  }

}
