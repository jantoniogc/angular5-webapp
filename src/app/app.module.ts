import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './Modules/app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductoComponent } from './Componentes/producto/producto.component';
// Rutas
import { appRoutingProviders, routing } from './app.routing';
// Service
import { ProductoService } from './Services/producto.service';
import { AppMaterialModule } from './Modules/app-material/app-material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductosEffects } from '../redux/productos/productos.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store/';
import { AppReducer } from '../redux/app.reducer';
import { MdpruebaModule } from 'angular-web-template/src/app/mdprueba/mdprueba.module';
import { FooterComponent } from 'angular-web-template/src/app/footer/footer.component';
import { ProductoDetailComponent } from './Componentes/producto-detail/producto-detail.component';
import { ProductoEffects } from '../redux/producto/producto.effects';
import { Routes, RouterModule } from '@angular/router';
import { ProductoEditComponent } from './Componentes/producto-edit/producto-edit.component';
import { DeleteProductoComponent } from './Componentes/delete-producto/delete-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    ProductoComponent,
    FooterComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
    DeleteProductoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppBootstrapModule,
    AppMaterialModule,
    routing,
    // MdpruebaModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([ProductosEffects, ProductoEffects]),
  ],
  providers: [appRoutingProviders, ProductoService],
  entryComponents: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
