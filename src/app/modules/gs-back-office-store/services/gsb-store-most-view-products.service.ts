import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { ProductsMostView } from '../models/productsMostView';

@Injectable({
  providedIn: 'root'
})
export class GsbStoreMostViewProductsService {
 // apiUrl = of('../../../assets/mock/data-most-view.json')
  constructor(private http: HttpClient) { }

  getsProductsMostView() {
    return this.http.get("../../../assets/mock/data-most-view.json")
    .pipe(map((res: any) => {
      return res;
    }))
}
}
