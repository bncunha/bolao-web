import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { PartidasService } from 'src/app/services/api/partidas.service';
import { RouterService } from 'src/app/services/core/router.service';
import { EnviarResultadoDto } from 'src/app/services/requests/EnviarResultadoDto';
import { PartidaResponse } from 'src/app/services/responses/Partida.response';

@Component({
  selector: 'app-informar-resultados',
  templateUrl: './informar-resultados.component.html',
  styleUrls: ['./informar-resultados.component.scss']
})
export class InformarResultadosComponent implements OnInit {
  loading = false;
  partidas: PartidaResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private bolaoService: BolaoService,
    private partidasService: PartidasService,
    private routesService: RouterService
  ) { }

  ngOnInit(): void {
    this.buscarHistoricoPartidas();
  }

  buscarHistoricoPartidas() {
    this.loading = true;
    const id = this.route.snapshot.params.id;
    this.partidas = [];
    this.bolaoService.getHistoricoPartidas(id).subscribe(r => {
      this.loading = false;
      this.partidas = r;
    }, err => {
      this.loading = false;
      throw err;
    })
  }

  onSubmit() {
    const partidas = this.partidas.filter(p => p.resultadoMandante != undefined && p.resultadoVisitante != undefined )
    .map(p => ({
      idPartida: p.id,
      resultadoMandante: p.resultadoMandante,
      resultadoVisitante: p.resultadoVisitante
    }) as EnviarResultadoDto);

    if (partidas.length) {
      this.partidasService.atualizarResultadoPartidas(partidas).subscribe(r => {
        console.log(r)
      }, err => {
        throw err;
      })
    }
  }

}
