import { Inject, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) { }

  erro(message: string, title?: string, options?: any) {
    this.toastr.error(message, title, options);
  }

  sucesso(message: string, title?: string, options?: any) {
    this.toastr.success(message, title, options);
  }

  alerta(message: string, title?: string, options?: any) {
    this.toastr.warning(message, title, options);
  }
}
