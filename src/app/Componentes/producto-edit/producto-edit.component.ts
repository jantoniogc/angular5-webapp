import { Component, OnInit, Input, ElementRef, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Store } from "@ngrx/store";
import { ProductoService } from "../../Services/producto.service";
import { Producto } from "../../Models/producto";
import { MatFormFieldControl } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { FocusMonitor } from "@angular/cdk/a11y";
import { ProductoComponent } from '../producto/producto.component';
import { Subject } from 'rxjs/Subject';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AppState } from '../../../redux/app.state';
import { RequestProdAction, EditProdAction } from '../../../redux/producto/producto.actions';

@Component({
  selector: 'app-producto-edit',
  templateUrl: '../producto/producto.component.html',
  styleUrls: ['./producto-edit.component.scss'],
  providers: [ProductoService]
})
export class ProductoEditComponent
  implements MatFormFieldControl<Producto>, OnInit, OnDestroy {
  static nextId: any = 0;
  public titulo: string;
  public producto: Producto;
  private _placeholder: string;
  private _required = false;
  private _disabled = false;
  public is_edit = true;

  constructor(
    private store: Store<AppState>,
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef,
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    console.log('Se ha cargado el componente Producto');
    this.titulo = 'Detalle del Producto';
    this.is_edit = true;
    this.parts = fb.group({
      id : [''],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
    this.titulo = 'Edición de Producto';
    this._route.params.forEach((params: Params) => {
      const userId = params['userId'];
      const id = params['id'];
      const action = new RequestProdAction(userId, id);
      this.store.dispatch(action);
    });

    this.store.select('producto').subscribe(producto => {
      this.producto = producto;
      console.log('body:' + this.producto);
      if (this.producto !== null) {
        this.value = this.producto;
      }

    });
  }

  public id = `edit-app-producto-${ProductoEditComponent.nextId++}`;
  public describedBy = '';

  parts: FormGroup;

  stateChanges = new Subject<void>();

  focused = false;

  ngControl = null;

  errorState = false;

  controlType = 'edit-app-producto';

  get empty() {
    const n = this.parts.value;
    return !n.userId && !n.title && !n.body;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.value);
    const action = new EditProdAction(this.value);
    this.store.dispatch(action);
    this._router.navigate(['/productos']);
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }

  @Input()
  get value(): Producto | null {
    const n = this.parts.value;
    return <Producto>n;
  }
  set value(tel: Producto) {
    this.parts.setValue({
      id : tel.id,
      userId: tel.userId,
      title: tel.title,
      body: tel.body
    });
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}
