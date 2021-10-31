import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { PartidasModule } from '../partidas/partidas.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    PartidasModule
  ]
})
export class InicioModule { }
