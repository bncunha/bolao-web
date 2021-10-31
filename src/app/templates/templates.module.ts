import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { RouterModule } from '@angular/router';
import { MenuBottomComponent } from './menu-bottom/menu-bottom.component';



@NgModule({
  declarations: [
    TopFooterComponent,
    MenuBottomComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopFooterComponent
  ]
})
export class TemplatesModule { }
