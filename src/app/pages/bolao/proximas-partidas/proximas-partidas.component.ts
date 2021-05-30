import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { PalpiteService } from 'src/app/services/api/palpite.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { CriarPalpiteDto } from 'src/app/services/requests/CriarPalpiteDto';

@Component({
  selector: 'app-proximas-partidas',
  templateUrl: './proximas-partidas.component.html',
  styleUrls: ['./proximas-partidas.component.scss']
})
export class ProximasPartidasComponent implements OnInit {
  loading = false;
  id!: number;
  partidas: any[] = [];

  constructor(
    private bolaoService: BolaoService,
    private route: ActivatedRoute,
    private palpitesService: PalpiteService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.buscarPartidasAtivas();
  }

  buscarPartidasAtivas() {
    this.loading = true;
    this.partidas = [];
    this.bolaoService.getPartidasAtivas(this.id).subscribe((r: any) => {
      this.loading = false;
      this.partidas = this.tratarPalpitesNulos(r);
    }, err => {
      this.loading = false;
      throw err;
    })
  }

  tratarPalpitesNulos(r: any) {
    return r.map((item: any) => {
      if (!item.palpites.length) {
        item.palpites = [{
          resultadoMandante: null,
          resultadoVisitante: null
        }]
      }
      return item;
    }) as any;
  }

  salvarPalpites(palpitesHabilitados: any[]) {
    const palpites = palpitesHabilitados.map(p => ({partida: p.id, resultadoMandante: p.palpites[0].resultadoMandante, resultadoVisitante: p.palpites[0].resultadoVisitante}))
    .filter(p => p.resultadoMandante != undefined && p.resultadoVisitante != undefined )
    .map(p => ({
      idBolao: this.id,
      idPartida: p.partida,
      resultadoMandante: p.resultadoMandante,
      resultadoVisitante: p.resultadoVisitante
    }) as CriarPalpiteDto);

    if (palpites.length) {
      this.palpitesService.realizarPalpites(palpites).subscribe(r => {
        this.toastService.sucesso('Palpites realizados. Boa sorte! 😉')
        this.buscarPartidasAtivas();
      }, err => {
        throw err;
      })
    }
  }


}
