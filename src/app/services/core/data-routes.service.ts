import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Esse service escuta as rotas e retorna o dado passado pela variável "data" das rotas
 */
export class DataRoutesService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getSnapshotRouteData(): {data: any, params: any, queryParams: any} {
    return this.getChildRouteData(this.router.routerState.snapshot.root);
  }

  getRouteData(): Observable<{data: any, params: any, queryParams: any}> {
    return this.router.events.pipe(
      filter((evt: any) => evt instanceof RoutesRecognized),
      map( (event: RoutesRecognized) => {
        let urlData = this.getChildRouteData(event.state.root);
        if (urlData.data['backUrl']) {
          Object.keys(urlData.params).forEach(key => {
            if (urlData.data['backUrl'].indexOf(`:${key}`) > 0)
              urlData.data.backUrl = urlData.data.backUrl.replace(`:${key}`, urlData.params[key]);
          })
        }
        return urlData;
      })
    );
  }

  getChildRouteData(root: ActivatedRouteSnapshot) {
    let child: any = root.firstChild;
    let end = false;
    while (child && end == false) {
      if (child.firstChild == null) {
        end = true;
      } else {
        child = child.firstChild;
      }
    }
    return child ?
    {data: Object.assign({}, child.data), params: Object.assign({}, child.params), queryParams: Object.assign({}, child.queryParams)} :
    {data: Object.assign({}, root.data), params: Object.assign({}, root.params), queryParams: Object.assign({}, root.queryParams)};
  }
}
