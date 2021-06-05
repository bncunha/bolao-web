import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { PalpiteService } from 'src/app/services/api/palpite.service';
import { TimeService } from 'src/app/services/api/time.service';
import { ToastService } from 'src/app/services/core/toast.service';
import { SalvarPalpiteBonusDto } from 'src/app/services/requests/SalvarPalpiteBonusDto';
import { TimeResponse } from 'src/app/services/responses/TimeResponse';

@Component({
  selector: 'app-palpite-bonus',
  templateUrl: './palpite-bonus.component.html',
  styleUrls: ['./palpite-bonus.component.scss']
})
export class PalpiteBonusComponent implements OnInit {
  times: TimeResponse[] = []
  loading: boolean = false;
  loadingSalvar: boolean = false;
  disponivel = false;

  model: SalvarPalpiteBonusDto = {} as SalvarPalpiteBonusDto;

  constructor(
    private timeService: TimeService,
    private palpiteService: PalpiteService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private bolaoService: BolaoService
  ) { }

  ngOnInit(): void {
    this.verificarDisponibilidade();
    this.getAllTimes();
    this.getPalpiteBonus();
  }

  verificarDisponibilidade() {
    const id = this.route.snapshot.params.id;
    this.palpiteService.isPalpiteBonusDisponivel(id).subscribe(r => {
      this.disponivel = r;
    }, err => {
      this.disponivel = false;
    })
  }

  getAllTimes() {
    this.timeService.getTimes().subscribe(r => {
      this.times = r;
    }, err => {
      throw err;
    })
  }

  getPalpiteBonus() {
    const id = this.route.snapshot.params.id;
    this.loading = true;
    this.bolaoService.getPalpiteBonus(id).subscribe(r => {
      console.log(r);
      this.loading = false;
      this.model.idCampeao = r.palpiteCampeao;
      this.model.idViceCampeao = r.palpiteViceCampeao;
    }, err => {
      this.loading = false;
      throw err;
    })

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const request: SalvarPalpiteBonusDto = Object.assign({}, form.value);
      const idBolao = this.route.snapshot.params.id;
      this.loadingSalvar = true;
      this.bolaoService.salvarPalpiteBonus(idBolao, request).subscribe(r => {
        this.loadingSalvar = false;
        this.toastService.sucesso('Palpite bônus salvo!')
      }, err => {
        this.loadingSalvar = false;
        throw err;
      })
    }
  }

}
