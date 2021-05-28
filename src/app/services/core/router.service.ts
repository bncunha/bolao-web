import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  static LOGIN = '/login';
  static INICIO = '/inicio';
  static BOLAO = '/boloes';

  constructor(private router: Router, private location: Location) { }

  toLogin() {
    this.navigate(RouterService.LOGIN)
  }

  toInicio(zerarNavegacao = false) {
    this.navigate(RouterService.INICIO, zerarNavegacao ? {replaceUrl: true} : undefined)
  }

  toMenuBolao(idBolao: number) {
    this.navigate(RouterService.BOLAO + '/' + idBolao)
  }

  voltar() {
    this.location.back();
  }

  private navigate(url: string, options?: any) {
    this.router.navigate([url], options);
  }
}
