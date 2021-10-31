import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidasRoutingModule } from './partidas-routing.module';
import { PartidasAovivoComponent } from './partidas-aovivo/partidas-aovivo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BolaoModule } from '../bolao/bolao.module';


@NgModule({
  declarations: [
    PartidasAovivoComponent
  ],
  imports: [
    CommonModule,
    PartidasRoutingModule,
    SharedModule,
    BolaoModule
  ], exports: [
    PartidasAovivoComponent
  ]
})
export class PartidasModule { }
