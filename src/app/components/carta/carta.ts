import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta.html',
  styleUrl: './carta.css'
})
export class Carta {
  cartaAmorAbierta = false;
  cartaCumpleAbierta = false;
  cartaAniversarioAbierta = false;
  reproduciendo = false;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  toggleMusica(event?: Event) {
    if (event) event.stopPropagation();
    if (!this.audioPlayer) return;
    const audio = this.audioPlayer.nativeElement;
    if (this.reproduciendo) {
      audio.pause();
      this.reproduciendo = false;
    } else {
      audio.play().then(() => {
        this.reproduciendo = true;
      }).catch(err => {
        console.warn('Error al reproducir audio:', err);
      });
    }
  }

  abrirCarta(tipo: string) {
    if (tipo === 'amor') this.cartaAmorAbierta = true;
    if (tipo === 'cumple') this.cartaCumpleAbierta = true;
    if (tipo === 'aniversario') this.cartaAniversarioAbierta = true;
    
    // Iniciar canción al abrir cualquiera de las cartas
    if (this.audioPlayer && !this.reproduciendo) {
      const audio = this.audioPlayer.nativeElement;
      audio.play().then(() => {
        this.reproduciendo = true;
      }).catch(err => {
        console.warn('Esperando interacción del usuario o error:', err);
      });
    }
  }

  cerrarCarta(event: Event, tipo: string) {
    event.stopPropagation(); 
    if (tipo === 'amor') this.cartaAmorAbierta = false;
    if (tipo === 'cumple') this.cartaCumpleAbierta = false;
    if (tipo === 'aniversario') this.cartaAniversarioAbierta = false;
  }
}