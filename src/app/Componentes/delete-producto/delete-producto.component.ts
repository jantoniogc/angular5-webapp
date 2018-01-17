import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../Services/producto.service';
import { RequestProdAction, DeleteProdAction } from '../../../redux/producto/producto.actions';
import { Producto } from '../../Models/producto';


@Component({
  selector: 'app-delete-producto',
  templateUrl: './delete-producto.component.html',
  styleUrls: ['./delete-producto.component.scss'],
  providers: [ProductoService]
})
export class DeleteProductoComponent implements OnInit {
  public producto: Producto;

  constructor(
    private store: Store<AppState>,
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.forEach((params: Params) => {
      const userId = params['userId'];
      const id = params['id'];
      const action = new RequestProdAction(userId, id);
      this.store.dispatch(action);
    });
    this.store.select('producto').subscribe(producto => {
      this.producto = producto;
      if (producto === undefined) {
        this._router.navigate(['/productos']);
      }
    });
  }

  ngOnInit() {
    console.log('En componente Delete Producto');
  }

  delete() {
    console.log('eliminando');
    const action = new DeleteProdAction(this.producto);
    this.store.dispatch(action);
  }
}
