import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarBolaoComponent } from './criar-bolao/criar-bolao.component';
import { MenuBolaoComponent } from './menu-bolao/menu-bolao.component';
import { ParticiparBolaoComponent } from './participar-bolao/participar-bolao.component';
import { ProximasPartidasComponent } from './proximas-partidas/proximas-partidas.component';

const rotes: Routes = [
  {path: 'novo', component: CriarBolaoComponent },
  {path: 'participar/:id', component: ParticiparBolaoComponent},
  {path: ':id', component: MenuBolaoComponent},
  {path: ':id/proximas', component: ProximasPartidasComponent},
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
