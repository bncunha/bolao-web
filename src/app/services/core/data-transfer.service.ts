import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private object: any;

  constructor() { }

  set(object: any) {
    this.object = object;
  }

  get() {
    const copy = this.object && Object.assign(this.object);
    this.clean();
    return copy;
  }

  clean() {
    this.object = undefined;
  }
}
