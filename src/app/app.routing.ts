import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { ErrorComponent  } from './Componentes/error/error.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { ProductoComponent } from './Componentes/producto/producto.component';
import { ProductoDetailComponent } from './Componentes/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './Componentes/producto-edit/producto-edit.component';

const appRouters: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagina-principal', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'crear-producto', component: ProductoComponent },
  { path: 'producto/:userId/:id', component: ProductoDetailComponent },
  { path: 'editar-producto/:userId/:id', component: ProductoEditComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
