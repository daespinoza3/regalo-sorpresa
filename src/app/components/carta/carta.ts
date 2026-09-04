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

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  abrirCarta(tipo: string) {
    if (tipo === 'amor') this.cartaAmorAbierta = true;
    if (tipo === 'cumple') this.cartaCumpleAbierta = true;
    
    // La canción suena sin importar cuál abra primero
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.play().catch(err => console.log('Esperando interacción'));
    }
  }

  cerrarCarta(event: Event, tipo: string) {
    event.stopPropagation(); 
    if (tipo === 'amor') this.cartaAmorAbierta = false;
    if (tipo === 'cumple') this.cartaCumpleAbierta = false;
  }
}