import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { RouterService } from 'src/app/services/core/router.service';
import { SeoService } from 'src/app/services/core/seo.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { BolaoResponse } from 'src/app/services/responses/Bolao.response';

@Component({
  selector: 'app-participar-bolao',
  templateUrl: './participar-bolao.component.html',
  styleUrls: ['./participar-bolao.component.scss']
})
export class ParticiparBolaoComponent implements OnInit {
  id!: number;
  loading = false;
  loadingParticipar = false;
  bolao!: BolaoResponse;

  constructor(
    private bolaoService: BolaoService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private routerService: RouterService,
    seoService: SeoService
    ) {
    seoService.changeTitle('Criar bolão')
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.buscarBolao();
  }

  buscarBolao() {
    this.loading = true;
    this.bolaoService.getById(this.id).subscribe(r => {
      this.loading = false;
      this.bolao = r;
      console.log(r)
    }, err => {
      this.loading = false;
      throw err;
    })
  }

  participar() {
    this.loadingParticipar = true;
    this.bolaoService.participarBolao(this.id).subscribe(r => {
      this.loadingParticipar = false;
      this.toastService.sucesso('Você agora está participando desde leilão!');
      this.routerService.voltar();
    }, err => {
      this.loadingParticipar = false;
      throw err;
    })
  }

}
