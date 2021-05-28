import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorDirective } from './validator.directive';
import { MustMatchDirective } from './must-match.directive';



@NgModule({
  declarations: [
    ValidatorDirective,
    MustMatchDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    ValidatorDirective,
    MustMatchDirective
  ]
})
export class ValidatorsModule { }
