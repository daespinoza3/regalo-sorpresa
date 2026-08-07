import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], // Esto es clave para que funcionen los botones
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  // Por ahora la clase está vacía, pero más adelante 
  // podríamos agregar cosas aquí, como reproducir su canción favorita
}