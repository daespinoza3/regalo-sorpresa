import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Agrega esta línea arriba

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 2. Agrégalo dentro de los corchetes de imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ... tu código ...
}