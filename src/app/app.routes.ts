import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Carta } from './components/carta/carta';
import { Galeria } from './components/galeria/galeria';
import { Juego } from './components/juego/juego'; // <-- Importación con tu nombre limpio

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'carta', component: Carta },
  { path: 'galeria', component: Galeria },
  { path: 'juego', component: Juego } // <-- Usamos la clase Juego
];