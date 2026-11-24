import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travesuras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './travesuras.html',
  styleUrl: './travesuras.css'
})
export class Travesuras {
  readonly CLAVE_SECRETA = '07112022DT';
  numeroDaniel = '593959678740';
  numeroTatiana = '593999301653';

  estaDesbloqueado = false;
  claveIngresada: string = '';
  errorClave = false;

  destinatarioSeleccionado: 'Daniel' | 'Tatiana' | null = null;
  mensajeDeseo: string = '';

  verificarClave() {
    if (this.claveIngresada.trim() === this.CLAVE_SECRETA) {
      this.estaDesbloqueado = true;
      this.errorClave = false;
      this.claveIngresada = '';
    } else {
      this.errorClave = true;
      setTimeout(() => {
        this.errorClave = false;
      }, 3000);
    }
  }

  seleccionarDestinatario(destinatario: 'Daniel' | 'Tatiana') {
    this.destinatarioSeleccionado = destinatario;
    this.mensajeDeseo = '';
  }

  volver() {
    this.destinatarioSeleccionado = null;
    this.mensajeDeseo = '';
  }

  get esMensajeValido(): boolean {
    return this.mensajeDeseo.trim().length > 0;
  }

  enviarPorWhatsApp() {
    if (!this.esMensajeValido || !this.destinatarioSeleccionado) return;

    const numero = this.destinatarioSeleccionado === 'Daniel'
      ? this.numeroDaniel
      : this.numeroTatiana;

    const encabezado = `🔥 *Solicitud de Travesura para ${this.destinatarioSeleccionado}:*`;
    const textoCompleto = `${encabezado}\n\n"${this.mensajeDeseo.trim()}"`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(textoCompleto)}`;
    window.open(url, '_blank');
  }
}
