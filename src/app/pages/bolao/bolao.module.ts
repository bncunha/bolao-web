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



@NgModule({
  declarations: [
    BoloesParticipandoComponent,
    ItemBolaoComponent,
    ParticiparBolaoComponent,
    MenuBolaoComponent,
    ProximasPartidasComponent,
    CriarBolaoComponent
  ],
  imports: [
    CommonModule,
    BolaoRoutingModule,
    SharedModule
  ],
  exports: [
    BoloesParticipandoComponent
  ]
})
export class BolaoModule { }
