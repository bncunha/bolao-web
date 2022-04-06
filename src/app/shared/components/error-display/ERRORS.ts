import { AbstractControl } from "@angular/forms";

export const GETERROS = (control: AbstractControl): string | undefined => {
  if (control.errors) {
    const erro = Object.keys(control.errors)[0];

    const messages: any = {
      required: 'Campo é obrigatório!',
      email: 'Campo deve ser um e-mail!',
      minlength: 'Obrigatório ter no mínimo ' + control.errors?.minlength?.requiredLength + ' caracteres',
      mustMatch: 'Campos não coincidem!',
      min: 'Valor deve ser superior ou igual a ' + control.errors?.min?.min,
      max: 'Valor deve ser inferior ou igual a ' + control.errors?.max?.max,
    };

    return messages[erro] ? messages[erro] : 'Campo inválido.'
  }
  return undefined;
}
