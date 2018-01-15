import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../models/producto';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { RequestProductosAction } from '../../../redux/productos/productos.actions';
import { Input } from '@angular/core';
import { getVisiblesProductos } from '../../../redux/productos/productos.selector';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public titulo: string;
  @Input() productos: Producto[];
  public displayedColumns = ['id', 'userId', 'title', 'body', 'actionsColumn'];
  public dataSource;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService,
    private store: Store<AppState>
  ) {
    this.titulo = 'Listado de Productos';
    const action = new RequestProductosAction();
    this.store.dispatch(action);

    this.store.select(getVisiblesProductos).subscribe(productos => {
      this.productos = productos;
      this.dataSource = new MatTableDataSource<Producto>(productos);
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    console.log('Componente Productos cargado');
  }



}
