import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { DataTransferService } from 'src/app/services/core/data-transfer.service';
import { RouterService } from 'src/app/services/core/router.service';
import { BolaoResponse } from 'src/app/services/responses/Bolao.response';

@Component({
  selector: 'app-boloes-participando',
  templateUrl: './boloes-participando.component.html',
  styleUrls: ['./boloes-participando.component.scss']
})
export class BoloesParticipandoComponent implements OnInit {
  boloes: BolaoResponse[] = [];
  loading = false;

  constructor(
    private bolaoService: BolaoService,
    private dataTransfer: DataTransferService,
    private routerService: RouterService
  ) { }

  ngOnInit(): void {
    this.getParticipando();
  }

  onBolaoClick(b: BolaoResponse) {
    this.dataTransfer.set(b);
    this.routerService.toMenuBolao(b.id);
  }

  getParticipando() {
    this.loading = true;
    this.bolaoService.getParticipando().subscribe(r => {
      this.loading = false;
      this.boloes = r;
    }, err => {
      this.loading = false;
      throw err;
    })
  }

}
