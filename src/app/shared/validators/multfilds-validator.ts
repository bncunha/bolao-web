import { AbstractControl } from "@angular/forms";

export class MultifieldsValidator {

  static addControlError(control: AbstractControl, error: any) {
    control.setErrors({ ...control.errors, ...error });
  }

  static removeControlError(control: AbstractControl, errorName: string) {
    if (control.errors) {
      Object.keys(control.errors).forEach(erro => {
        if (erro === errorName && control.errors) {
          delete control.errors[erro];
          if (Object.keys(control.errors).length === 0) {
            control.setErrors(null);
          }
        }
      });
    }
  }
}
