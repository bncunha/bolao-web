import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { FormsModule } from '@angular/forms';
import { IsLoadingDirective } from './directives/is-loading.directive';
import { ValidatorsModule } from './validators/validators.module';

@NgModule({
  declarations: [
    ErrorDisplayComponent,
    IsLoadingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorDisplayComponent,
    FormsModule,
    IsLoadingDirective,
    ValidatorsModule
  ]
})
export class SharedModule { }
