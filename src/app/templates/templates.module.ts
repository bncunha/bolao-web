import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopFooterComponent
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
