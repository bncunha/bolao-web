import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoloesParticipandoComponent } from './boloes-participando/boloes-participando.component';
import { ItemBolaoComponent } from './item-bolao/item-bolao.component';
import { ParticiparBolaoComponent } from './participar-bolao/participar-bolao.component';
import { BolaoRoutingModule } from './bolao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuBolaoComponent } from './menu-bolao/menu-bolao.component';
import { ProximasPartidasComponent } from './proximas-partidas/proximas-partidas.component';
import { CriarBolaoComponent } from './criar-bolao/criar-bolao.component';
import { PartidaBoxComponent } from './partida-box/partida-box.component';
import { InformarResultadosComponent } from './informar-resultados/informar-resultados.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { RankingComponent } from './ranking/ranking.component';
import { PalpiteBonusComponent } from './palpite-bonus/palpite-bonus.component';
import { DetalhesPartidaComponent } from './detalhes-partida/detalhes-partida.component';



@NgModule({
  declarations: [
    BoloesParticipandoComponent,
    ItemBolaoComponent,
    ParticiparBolaoComponent,
    MenuBolaoComponent,
    ProximasPartidasComponent,
    CriarBolaoComponent,
    PartidaBoxComponent,
    InformarResultadosComponent,
    ListaPartidasComponent,
    RankingComponent,
    PalpiteBonusComponent,
    DetalhesPartidaComponent
  ],
  imports: [
    CommonModule,
    BolaoRoutingModule,
    SharedModule,
  ],
  exports: [
    BoloesParticipandoComponent
  ]
})
export class BolaoModule { }
