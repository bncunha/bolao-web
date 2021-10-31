import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoloesParticipandoComponent } from './boloes-participando/boloes-participando.component';
import { CriarBolaoComponent } from './criar-bolao/criar-bolao.component';
import { DetalhesPartidaComponent } from './detalhes-partida/detalhes-partida.component';
import { InformarResultadosComponent } from './informar-resultados/informar-resultados.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { MenuBolaoComponent } from './menu-bolao/menu-bolao.component';
import { PalpiteBonusComponent } from './palpite-bonus/palpite-bonus.component';
import { ParticiparBolaoComponent } from './participar-bolao/participar-bolao.component';
import { ProximasPartidasComponent } from './proximas-partidas/proximas-partidas.component';
import { RankingComponent } from './ranking/ranking.component';

export interface BolaoData {
  titulo: string;
  backUrl: string;
}

const rotes: Routes = [
  {path: '', component: BoloesParticipandoComponent, data: {titulo: 'Meus bolões'} as BolaoData },
  {path: 'novo', component: CriarBolaoComponent, data: {titulo: 'Criar bolão'} as BolaoData },
  {path: 'participar/:id', component: ParticiparBolaoComponent, data: {backUrl: '/inicio'} as BolaoData},
  {path: ':id', component: MenuBolaoComponent, data: {backUrl: '/inicio'} as BolaoData},
  {path: ':id/proximas', component: ProximasPartidasComponent, data: {backUrl: '{menuBolao}', titulo: 'Apostas'} as BolaoData},
  {path: ':id/informar-resultados', component: InformarResultadosComponent, data: {backUrl: '{menuBolao}', titulo: 'Informar Resultados'} as BolaoData},
  {path: ':id/ranking', component: RankingComponent, data: {backUrl: '{menuBolao}', titulo: 'Ranking'} as BolaoData},
  {path: ':id/palpite-bonus', component: PalpiteBonusComponent, data: {backUrl: '{menuBolao}', titulo: 'Palpite Bônus'} as BolaoData},
  {path: ':id/partida/:idPartida', component: DetalhesPartidaComponent, data: {backUrl: '{back}', titulo: 'Detalhes da partida'} as BolaoData},
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
