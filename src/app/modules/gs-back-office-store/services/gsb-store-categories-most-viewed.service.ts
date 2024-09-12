import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GsbStoreCategoriesMostViewedService {

  constructor(private http: HttpClient) { }

  getsCategoriesMostView() {
    return this.http.get("../../../assets/mock/categories-most-view.json")
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
}

}
