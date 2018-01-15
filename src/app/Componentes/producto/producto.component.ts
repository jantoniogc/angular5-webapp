import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { Producto } from '../../Models/producto';
import { ProductoService } from '../../Services/producto.service';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Validators } from '@angular/forms';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [
    ProductoService,
    { provide: MatFormFieldControl, useExisting: ProductoComponent }
  ]
})
export class ProductoComponent
  implements MatFormFieldControl<Producto>, OnInit, OnDestroy {
  static nextId: any = 0;
  public titulo: string;
  public producto: Producto;
  private _placeholder: string;
  private _required = false;
  private _disabled = false;

  public id = `app-producto-${ProductoComponent.nextId++}`;
  public describedBy = '';

  parts: FormGroup;

  stateChanges = new Subject<void>();

  focused = false;

  ngControl = null;

  errorState = false;

  controlType = 'app-producto';

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
    this.addProductos(this.value);
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
  set value(tel: Producto | null) {
    this.parts.setValue({
      id: tel.id,
      userId: tel.userId,
      title: tel.title,
      body: tel.body
    });
    this.stateChanges.next();
  }

  constructor(
    fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef,
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    console.log('Se ha cargado el componente Producto');
    this.parts = fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
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

  addProductos(producto: Producto) {
    this._productoService.addProductos(producto).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/productos']);
      },
      error => {
        console.log('Error en POST');
      }
    );
  }
}
