import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataRoutesService } from 'src/app/services/core/data-routes.service';
import { RouterService } from 'src/app/services/core/router.service';

@Component({
  selector: 'app-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss']
})
export class TopFooterComponent implements OnInit {
  nomeUsuario?: string;
  hasBack: boolean = false;
  titulo?: string;
  backUrl?: string;
  id?: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataRoute: DataRoutesService,
    private routesService: RouterService
  ) { }

  ngOnInit(): void {
    this.handleData(this.dataRoute.getSnapshotRouteData().data, this.dataRoute.getSnapshotRouteData().params);
    this.nomeUsuario = this.authService.usuario?.nome;
    this.dataRoute.getRouteData().subscribe(r => this.handleData(r.data, r.params))
  }

  handleData(data: any, params: any) {
    this.titulo = data?.titulo;
    this.backUrl = data?.backUrl;
    this.id = params?.id;
  }

  voltar() {
    if (this.backUrl == '{menuBolao}' && this.id) {
      this.routesService.toMenuBolao(this.id as any);
    } else if (this.backUrl) {
      this.router.navigate([this.backUrl]);
    } else {
      this.routesService.toInicio();
    }
  }

}
