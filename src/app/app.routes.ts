import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Galeria } from './components/galeria/galeria';
import { Carta } from './components/carta/carta';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'galeria', component: Galeria },
  { path: 'carta', component: Carta },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];