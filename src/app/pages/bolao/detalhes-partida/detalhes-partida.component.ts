import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { PartidasService } from 'src/app/services/api/partidas.service';
import { SeoService } from 'src/app/services/core/seo.service';

@Component({
  selector: 'app-detalhes-partida',
  templateUrl: './detalhes-partida.component.html',
  styleUrls: ['./detalhes-partida.component.scss']
})
export class DetalhesPartidaComponent implements OnInit {
  loading = false;
  detalhes: any;
  partidaAtiva = false;

  constructor(
    private route: ActivatedRoute,
    private bolaoService: BolaoService,
    private partidaService: PartidasService,
    seoService: SeoService
    ) {
      seoService.changeTitle('Detalhes partida')
  }

  ngOnInit(): void {
    const idBolao = this.route.snapshot.params.id;
    const idPartida = this.route.snapshot.params.idPartida;
    this.buscarDetalhesPartida(idBolao, idPartida);
  }

  buscarDetalhesPartida(idBolao: number, idPartida: number) {
    this.loading = true;
    this.bolaoService.getDetalhesPartida(idBolao, idPartida).subscribe(r => {
      this.loading = false;
      this.detalhes = r;
      this.partidaAtiva = !this.partidaService.isPartidaDisabled(r.partida);
    }, err => {
      this.loading = false;
      throw err;
    })
  }

}
