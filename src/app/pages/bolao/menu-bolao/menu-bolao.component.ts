import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { DataTransferService } from 'src/app/services/core/data-transfer.service';
import { RouterService } from 'src/app/services/core/router.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { BolaoResponse } from 'src/app/services/responses/Bolao.response';

@Component({
  selector: 'app-menu-bolao',
  templateUrl: './menu-bolao.component.html',
  styleUrls: ['./menu-bolao.component.scss']
})
export class MenuBolaoComponent implements OnInit {
  loding = false;
  bolao!: BolaoResponse;
  isAdm = false;

  menus: any[] = [{
    icone: 'fa-futbol',
    link: 'proximas',
    texto: 'Próximas Partidas'
  }, {
    icone: 'fa-chart-line',
    link: '',
    texto: 'Ranking'
  }, {
    icone: 'fa-history',
    link: '',
    texto: 'Histórico de Partidas'
  }]

  constructor(
    private route: ActivatedRoute,
    private dataTransfer: DataTransferService,
    private bolaoService: BolaoService,
    private routerService: RouterService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.bolao = this.dataTransfer.get();
    if (!this.bolao) {
      this.verificarParticipacaoBolao();
    }
  }

  verificarParticipacaoBolao() {
    this.loding = true;
    this.bolaoService.getParticipando().subscribe(r => {
      this.loding = false;
      const id = this.route.snapshot.params.id;
      this.bolao = r[0];
      this.isAdm = r[0] && r[0].participantes[0].isAdministrador
      if (id && r.find(bolao => bolao.id == id) !== undefined) {
        return;
      }
      this.toastService.erro('Você não está participando deste bolão!')
      this.routerService.toInicio();
    }, err => {
      this.loding = false;
      this.routerService.toInicio();
      throw err;
    })
  }

}
