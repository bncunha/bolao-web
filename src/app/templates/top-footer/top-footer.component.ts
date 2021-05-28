import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss']
})
export class TopFooterComponent implements OnInit {
  nomeUsuario?: string;
  hasBack: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.nomeUsuario = this.authService.usuario?.nome;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.hasBack = val.url.indexOf('inicio') < 0
      }
  });
  }

  voltar() {
    this.location.back();
  }

}
