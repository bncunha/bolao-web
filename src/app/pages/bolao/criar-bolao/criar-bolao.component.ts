import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { CampeonatoService } from 'src/app/services/api/campeonato.service';
import { RouterService } from 'src/app/services/core/router.service';
import { SeoService } from 'src/app/services/core/seo.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { CampeonatoResponse } from 'src/app/services/responses/Campeonato.response';
import { DateUtils } from 'src/app/utils/date.util';

@Component({
  selector: 'app-criar-bolao',
  templateUrl: './criar-bolao.component.html',
  styleUrls: ['./criar-bolao.component.scss']
})
export class CriarBolaoComponent implements OnInit {
  loading: boolean = false;
  campeonatos: CampeonatoResponse[] = [];
  maximoParticipantes: number = 10;

  constructor(
    private routerService: RouterService,
    private bolaoService: BolaoService,
    private toastService: ToastService,
    private campeonatoService: CampeonatoService,
    seoService: SeoService
  ) {
    seoService.changeTitle('Criar bolão')
  }

  ngOnInit(): void {
    this.getCampeonatos();
  }

  voltar() {
    this.routerService.toInicio();
  }

  getCampeonatos() {
    this.campeonatoService.getCampeonatosCorrentesPorPais('Brazil').subscribe(r => {
      this.campeonatos = r;
      this.campeonatos.sort((a, b) => {
        if (this.isCampeonatoIniciado(a.dataInicio)) return 1;
        return -1;
      })
    }, err => {
      throw err;
    })
  }

  isCampeonatoIniciado(data: Date) {
    return DateUtils.compare(new Date(), new Date(data)) > 0;
  }

  getDiasParaInicio(dataInicio: Date) {
    const hoje = new Date();
    hoje.setHours(0,0,0,0);
    return DateUtils.difference(new Date(dataInicio), hoje);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.bolaoService.criarBolao(form.value).subscribe(r => {
        this.loading = false;
        this.toastService.sucesso('Bolão criado com sucesso!');
        this.routerService.toInicio();
      }, err => {
        this.loading = false;
        throw err;
      })
    }
  }
}
