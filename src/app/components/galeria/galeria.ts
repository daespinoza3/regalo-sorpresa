import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria implements OnInit {
  
  fotosBase = [
    { img: 'fot1.jpg', texto: 'Mi sonrisa favorita' },
    { img: 'fot2.jpg', texto: 'Aquel día inolvidable' },
    { img: 'fot3.jpg', texto: 'te adoro' },
    { img: 'fot4.jpg', texto: 'Tú y yo 💜' },
    { img: 'fot5.jpg', texto: 'Magia pura' },
    { img: 'fot6.jpg', texto: 'Nuestro momento' },
    { img: 'fot7.jpg', texto: 'Complicidad' },
    { img: 'fot8.jpg', texto: 'Siempre juntos' },
    { img: 'fot9.jpg', texto: 'Esa mirada' },
    { img: 'fot10.jpg', texto: 'Paz absoluta' },
    { img: 'fot11.jpg', texto: 'Aventuras' },
    { img: 'fot12.jpg', texto: 'Mi refugio' },
    { img: 'fot13.jpg', texto: 'Donde sea, pero contigo' }
  ];

  fotosRegadas: any[] = [];

  ngOnInit() {
    // Coordenadas fijas (Top %, Left %) esparcidas por toda la pantalla.
    // Observa cómo no hay ninguna foto en Abajo-Centro (dejando libre el espacio del menú).
    const posicionesBase = [
      { top: 2, left: 2 },   // 1. Esquina Arriba-Izq
      { top: 5, left: 20 },  // 2. Arriba-Medio Izq
      { top: 2, left: 40 },  // 3. Arriba Centro
      { top: 5, left: 60 },  // 4. Arriba-Medio Der
      { top: 2, left: 75 },  // 5. Esquina Arriba-Der
      { top: 28, left: 2 },  // 6. Medio Izq (pegado al borde)
      { top: 32, left: 22 }, // 7. Medio Centro-Izq
      { top: 28, left: 55 }, // 8. Medio Centro-Der
      { top: 30, left: 75 }, // 9. Medio Der (pegado al borde)
      { top: 55, left: 4 },  // 10. Esquina Abajo-Izq
      { top: 50, left: 22 }, // 11. Abajo Izq (esquivando menú)
      { top: 50, left: 58 }, // 12. Abajo Der (esquivando menú)
      { top: 55, left: 75 }  // 13. Esquina Abajo-Der
    ];

    // Mezclamos estas coordenadas al azar para que las fotos cambien de lugar cada que entra, 
    // pero siempre respetando la distribución que diseñamos arriba.
    posicionesBase.sort(() => Math.random() - 0.5);

    this.fotosRegadas = this.fotosBase.map((foto, index) => {
      const pos = posicionesBase[index];
      
      return {
        ...foto,
        // Añadimos solo un poquito de desorden (0% a 3%) extra para que no se vea cuadriculado
        top: pos.top + Math.floor(Math.random() * 3), 
        left: pos.left + Math.floor(Math.random() * 3),
        rotacion: Math.floor(Math.random() * 70) - 35, 
        duracionAnimacion: Math.floor(Math.random() * 4) + 5, 
        retrasoAnimacion: (Math.random() * 2.5).toFixed(2) 
      };
    });
  }
}