import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { RouterService } from 'src/app/services/core/router.service';
import { ToastService } from 'src/app/services/core/toast.service';

@Component({
  selector: 'app-criar-bolao',
  templateUrl: './criar-bolao.component.html',
  styleUrls: ['./criar-bolao.component.scss']
})
export class CriarBolaoComponent {
  loading = false;

  constructor(
    private routerService: RouterService,
    private bolaoService: BolaoService,
    private toastService: ToastService
  ) { }

  voltar() {
    this.routerService.toInicio();
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
