import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carta.html',
  styleUrl: './carta.css'
})
export class Carta {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  reproduciendo = false;

  toggleMusica() {
    if (this.reproduciendo) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
    this.reproduciendo = !this.reproduciendo;
  }
}