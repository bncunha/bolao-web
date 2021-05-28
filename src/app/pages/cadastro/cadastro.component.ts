import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/api/usuario.service';
import { RouterService } from 'src/app/services/core/router.service';
import { ToastService } from 'src/app/services/core/toast.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  model: any = {};
  loading = false;

  constructor(
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    private router: RouterService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.usuarioService.cadastrar(form.value).subscribe(r => {
        this.loading = false;
        this.toastService.sucesso('Cadastrado com sucesso!');
        this.router.toLogin();
      }, err => {
        this.loading = false;
        throw err;
      })
    }
  }
}
