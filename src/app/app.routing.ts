import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { ErrorComponent  } from './Componentes/error/error.component';

const appRouters: Routes =[
  {path: '', component: HomeComponent},
  {path: 'pagina-principal', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
