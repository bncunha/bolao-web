import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from "@angular/forms";
import { MultifieldsValidator } from "./multfilds-validator";

@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    const controlName = this.mustMatch[0];
    const matchingControlName = this.mustMatch[1];
    const error = { mustMatch: true };

    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (!control || !matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      MultifieldsValidator.addControlError(matchingControl, error);
      return error;
    } else {
      MultifieldsValidator.removeControlError(matchingControl, 'mustMatch');
      return null;
    }
  }

}
