import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Carta } from './components/carta/carta';
import { Galeria } from './components/galeria/galeria';
import { Juego } from './components/juego/juego';
import { Travesuras } from './components/travesuras/travesuras';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'carta', component: Carta },
  { path: 'galeria', component: Galeria },
  { path: 'juego', component: Juego },
  { path: 'travesuras', component: Travesuras }
];