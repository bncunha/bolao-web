import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guard/auth.guard';
import { TopFooterComponent } from './templates/top-footer/top-footer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: '', canActivate: [AuthGuard], component: TopFooterComponent, children: [
    {path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)},
    {path: 'boloes', loadChildren: () => import('./pages/bolao/bolao.module').then(m => m.BolaoModule)},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
