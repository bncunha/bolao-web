import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeResponse } from '../responses/TimeResponse';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  getTimes(): Observable<TimeResponse[]> {
    return this.http.get<TimeResponse[]>('times').pipe(
      map(r => {
        r.sort((a, b) => a.nome.localeCompare(b.nome));
        return r;
      })
    );
  }
}
