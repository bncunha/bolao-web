import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { DataTransferService } from 'src/app/services/core/data-transfer.service';
import { RouterService } from 'src/app/services/core/router.service';
import { SeoService } from 'src/app/services/core/seo.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { BolaoResponse } from 'src/app/services/responses/Bolao.response';

@Component({
  selector: 'app-menu-bolao',
  templateUrl: './menu-bolao.component.html',
  styleUrls: ['./menu-bolao.component.scss']
})
export class MenuBolaoComponent implements OnInit {
  loding = false;
  bolao?: BolaoResponse;
  isAdm = false;

  menus: any[] = [{
    icone: 'fa-futbol',
    link: 'proximas',
    texto: 'Apostas'
  }, {
    icone: 'fa-chart-line',
    link: 'ranking',
    texto: 'Ranking'
  }, {
    icone: 'fa-star',
    link: 'palpite-bonus',
    texto: 'Palpite Bônus',
  }, 
  // {
  //   icone: 'fa-trophy',
  //   link: 'informar-resultados',
  //   texto: 'Informar resultados',
  //   onlyAdm: true
  // },
   {
    icone: 'fa-sign-out-alt',
    texto: 'Sair',
    logout: true
  }]

  constructor(
    private route: ActivatedRoute,
    private dataTransfer: DataTransferService,
    private bolaoService: BolaoService,
    private routerService: RouterService,
    private toastService: ToastService,
    seoService: SeoService
  ) {
    const id = this.route.snapshot.params.id;
    seoService.changeTitle('Bolão ' + id);
  }

  ngOnInit(): void {
    this.verificarParticipacaoBolao();
  }

  verificarParticipacaoBolao() {
    this.loding = true;
    this.bolaoService.getParticipando().subscribe(r => {
      this.loding = false;
      const id = this.route.snapshot.params.id;
      this.bolao = r.find(bolao => bolao.id == id);
      if (this.bolao) {
        this.isAdm = this.bolao?.participantes[0].isAdministrador
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

  get linkbolao() {
    return this.bolao && (document.location.protocol + '//' + document.location.host + '/boloes/participar/' + this.bolao.id);
  }

  sair() {
    this.routerService.toLogin();
  }


}
