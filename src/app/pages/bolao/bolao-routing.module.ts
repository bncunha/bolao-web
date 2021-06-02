import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarBolaoComponent } from './criar-bolao/criar-bolao.component';
import { InformarResultadosComponent } from './informar-resultados/informar-resultados.component';
import { MenuBolaoComponent } from './menu-bolao/menu-bolao.component';
import { ParticiparBolaoComponent } from './participar-bolao/participar-bolao.component';
import { ProximasPartidasComponent } from './proximas-partidas/proximas-partidas.component';
import { RankingComponent } from './ranking/ranking.component';

export interface BolaoData {
  titulo: string;
  backUrl: string;
}

const rotes: Routes = [
  {path: 'novo', component: CriarBolaoComponent, data: {titulo: 'Criar bolão'} as BolaoData },
  {path: 'participar/:id', component: ParticiparBolaoComponent, data: {backUrl: '/inicio'} as BolaoData},
  {path: ':id', component: MenuBolaoComponent, data: {backUrl: '/inicio'} as BolaoData},
  {path: ':id/proximas', component: ProximasPartidasComponent, data: {backUrl: '{menuBolao}', titulo: 'Apostas'} as BolaoData},
  {path: ':id/informar-resultados', component: InformarResultadosComponent, data: {backUrl: '{menuBolao}', titulo: 'Informar Resultados'} as BolaoData},
  {path: ':id/ranking', component: RankingComponent, data: {backUrl: '{menuBolao}', titulo: 'Ranking'} as BolaoData},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotes)
  ], exports: [
    RouterModule
  ]
})
export class BolaoRoutingModule { }
