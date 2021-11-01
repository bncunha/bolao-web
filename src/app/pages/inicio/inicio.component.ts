import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/core/seo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    seoService: SeoService
  ) {
    seoService.changeTitle('Início')
  }

  ngOnInit(): void {
  }

}
