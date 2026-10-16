import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-temporizador',
  styleUrl: './temporizador.css',
  templateUrl: './temporizador.html',
})
export class Temporizador {
  // Guardamos las variables del temporizador
  tiempoRestante = signal(0);
  // Esto es para guardar el intervalo del temporizador
  intervalo: ReturnType<typeof setInterval> | null = null;

  // Metodo para iniciar el temporizador
  iniciar(segundos: number): void {
    // Validamos que no este iniciado y los segundos sean un numero entero y > 0
    if (this.intervalo !== null || !Number.isInteger(segundos) || segundos <= 0) {
      return;
    }
    this.tiempoRestante.set(segundos);

    // Declaramos el intervalo
    this.intervalo = setInterval(() => {
      this.tiempoRestante.update(tiempo => tiempo - 1);
      if (this.tiempoRestante() <= 0) {
        this.tiempoRestante.set(0);
        this.detener();
      }
    }, 1000);
  }

  detener(): void {
    if (this.intervalo !== null) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }
}
