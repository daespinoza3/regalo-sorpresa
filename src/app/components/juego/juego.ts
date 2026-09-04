import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.html',
  styleUrl: './juego.css'
})
export class Juego {
  totalCasillas = 20;
  
  // Dibujamos el tablero en ZigZag (como Serpientes y Escaleras)
  filas = [
    [20, 19, 18, 17, 16], // Fila superior (Meta)
    [11, 12, 13, 14, 15],
    [10,  9,  8,  7,  6],
    [ 1,  2,  3,  4,  5]  // Fila inferior (Inicio)
  ];

  posicionActual = 1;
  dado = 0;
  juegoTerminado = false;
  
  // Control de ventanas emergentes
  preguntaActual: any = null;
  mensajeEspecial: any = null;
  mensajeError = false;

  // Las 8 preguntas que definimos
  preguntas = [
    { casilla: 3, texto: '¿Qué fecha celebramos oficialmente nuestro aniversario?', opciones: ['20 de agosto', '7 de noviembre', '28 de mayo'], respuestaCorrecta: '7 de noviembre' },
    { casilla: 5, texto: 'Si vamos por dulces, ¿qué tenemos que llevar para que sea perfecto?', opciones: ['Chocolate para ti, gomitas ácidas para mí', 'Gomitas ácidas para ti, chocolate para mí', 'Solo gomitas ácidas'], respuestaCorrecta: 'Gomitas ácidas para ti, chocolate para mí' },
    { casilla: 8, texto: '¿Qué me regalaste en mi segundo cumpleaños que pasamos juntos?', opciones: ['Un conjunto de Jordan', 'Una caja con dibujos de mis ídolos', 'El juego de God of War'], respuestaCorrecta: 'Un conjunto de Jordan' },
    { casilla: 11, texto: 'Tarde de videojuegos. ¿A qué estamos jugando cada uno?', opciones: ['Tú a God of War y yo a Genshin Impact', 'Tú a Genshin Impact y yo a God of War', 'Los dos Genshin Impact'], respuestaCorrecta: 'Tú a Genshin Impact y yo a God of War' },
    { casilla: 13, texto: '¿Qué es lo que más me vuelve loco de ti?', opciones: ['Tus ojos', 'Tus labios', 'Tu cabello'], respuestaCorrecta: 'Tus labios' },
    { casilla: 15, texto: 'Nuestra "primera vez" fue inolvidable. ¿La fecha exacta?', opciones: ['1 de abril', '7 de noviembre', '28 de mayo'], respuestaCorrecta: '1 de abril' },
    { casilla: 17, texto: 'Si hay un clásico de fútbol, ¿quiénes se enfrentan?', opciones: ['Deportivo Cuenca vs. Liga', 'Liga vs. Barcelona', 'Deportivo Cuenca vs. Emelec'], respuestaCorrecta: 'Deportivo Cuenca vs. Liga' },
    { casilla: 19, texto: '¿Cómo se llama nuestro "hijo" virtual?', opciones: ['Paimon', 'Guinguin', 'Kratos'], respuestaCorrecta: 'Guinguin' }
  ];

  // Casillas de Acción Especial (Avanzas o Retrocedes)
  acciones: any = {
    2: { tipo: 'avanza', pasos: 1, mensaje: 'Me robaste un beso desprevenido. ¡Avanzas 1 casilla!' },
    4: { tipo: 'retrocede', pasos: 4, mensaje: 'Te quedaste dormida viendo la película. ¡Retrocedes 4 casillas!' },
    7: { tipo: 'retrocede', pasos: 4, mensaje: 'Te comiste mis chocolates sin avisar. ¡Retrocedes 4 casillas!' },
    10: { tipo: 'avanza', pasos: 1, mensaje: 'Te pusiste la camiseta del Cuenca. ¡Avanzas 1 casilla!' },
    14: { tipo: 'avanza', pasos: 1, mensaje: 'Me ganaste una partida. ¡Avanzas 1 casilla!' },
    16: { tipo: 'retrocede', pasos: 4, mensaje: 'Guinguin hizo una travesura. ¡Retrocedes 4 casillas!' }
  };

  esCasillaPregunta(num: number) { return this.preguntas.some(p => p.casilla === num); }
  esCasillaAvanza(num: number) { return this.acciones[num] && this.acciones[num].tipo === 'avanza'; }
  esCasillaRetrocede(num: number) { return this.acciones[num] && this.acciones[num].tipo === 'retrocede'; }

  tirarDado() {
    if (this.preguntaActual || this.mensajeEspecial || this.juegoTerminado) return;
    
    this.mensajeError = false;
    this.dado = Math.floor(Math.random() * 4) + 1; // Dado del 1 al 4
    
    this.posicionActual += this.dado;
    if (this.posicionActual >= this.totalCasillas) {
      this.posicionActual = this.totalCasillas;
      setTimeout(() => this.juegoTerminado = true, 500);
      return;
    }

    setTimeout(() => this.evaluarCasilla(), 500);
  }

  evaluarCasilla() {
    // 1. Verificamos si cayó en pregunta
    const pregunta = this.preguntas.find(p => p.casilla === this.posicionActual);
    if (pregunta) {
      this.preguntaActual = pregunta;
      return;
    }

    // 2. Verificamos si cayó en acción (Avanza/Retrocede)
    const accion = this.acciones[this.posicionActual];
    if (accion) {
      this.mensajeEspecial = accion;
    }
  }

  aplicarAccion() {
    if (this.mensajeEspecial.tipo === 'avanza') {
      this.posicionActual += this.mensajeEspecial.pasos;
    } else {
      this.posicionActual = Math.max(1, this.posicionActual - this.mensajeEspecial.pasos);
    }
    this.mensajeEspecial = null;
  }

  responder(opcion: string) {
    if (opcion === this.preguntaActual.respuestaCorrecta) {
      this.preguntaActual = null; // Acierta y se queda ahí
    } else {
      this.mensajeError = true; // Falla y retrocede 4
      setTimeout(() => {
        this.preguntaActual = null;
        this.posicionActual = Math.max(1, this.posicionActual - 4);
        this.mensajeError = false;
      }, 2000);
    }
  }
}