import { Injectable, ErrorHandler, Injector, Inject, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  constructor(
    @Inject(NgZone) private ngZone: NgZone,
    @Inject(Injector) private injector: Injector
  ) { }

  private get toast(): ToastrService {
      return this.injector.get(ToastrService);
  }

  handleError(error: any): void {
    this.ngZone.run(() => {
      if (!window.navigator.onLine) {
        this.toast.warning('Verifique sua conexão.', 'Sem internet!');
      } else if (error instanceof HttpErrorResponse) {
        this.handleBackendError(error);
      } else if(error.message) {
        this.handleClientError(error.message);
      } else {
        throw error;
      }
    })
  }

  handleBackendError(error: HttpErrorResponse): void {
    if (error.status !== 401) {
      this.toast.error(error?.error?.message || 'Erro interno no servidor!');
    }
  }

  handleClientError(message: string) {
    this.toast.error(message);
  }
}
