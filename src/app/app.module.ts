import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './Modules/app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ErrorComponent } from './Componentes/error/error.component';

// Rutas
import { appRoutingProviders, routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent],
  imports: [BrowserModule, AppBootstrapModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
