import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs/Observable';
import { Producto } from '../Models/producto';
import { GLOBAL } from './global';
import { mergeMap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class ProductoService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getProductos(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this.url);
  }

  addProductos(producto: Producto): Observable<Producto> {
    const json = JSON.stringify(producto);
    const param = json;
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    console.log(param);
    return this._http.post<Producto>(this.url, param, { headers: headers });
  }

  getProducto(userId: number, id: number): Observable<Producto> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    let _url: string;
    _url = this.url + '?userId=' + userId + '&id=' + id;
    return this._http.get<Producto>(_url);
  }

}
