import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { PartidasService } from 'src/app/services/api/partidas.service';
import { RouterService } from 'src/app/services/core/router.service';
import { ToastService } from 'src/app/services/core/toast.service';
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
    private toastService: ToastService
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

  onSubmit(partidasHabilitadas: any[]) {
    const partidas = partidasHabilitadas.filter(p => p.resultadoMandante != undefined && p.resultadoVisitante != undefined )
    .map(p => ({
      idPartida: p.id,
      resultadoMandante: p.resultadoMandante,
      resultadoVisitante: p.resultadoVisitante
    }) as EnviarResultadoDto);

    if (partidas.length) {
      this.loading = true;
      this.partidasService.atualizarResultadoPartidas(partidas).subscribe(r => {
        this.loading = false;
        const rodada = r?.[0]?.rodada;
        this.buscarHistoricoPartidas();
        this.toastService.sucesso(rodada ? `Rodada ${rodada} salvo!` : 'Salvo com sucesso!');
      }, err => {
        this.loading = false;
        throw err;
      })
    }
  }

}
