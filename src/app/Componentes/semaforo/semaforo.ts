import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo implements OnInit, OnDestroy {
  // Guarda qué luz está encendida; comienza en verde y actualiza la plantilla al cambiar.
  luzActiva = signal<'roja' | 'ambar' | 'verde'>('verde');
  // Guarda el identificador de setInterval para poder detenerlo con clearInterval.
  intervalo: ReturnType<typeof setInterval> | null = null;
  // Cuenta los segundos transcurridos desde que se encendió la luz actual.
  private segundosEnLuz = 0;

  // Este metodo inicia el ciclo automáticamente.
  ngOnInit(): void {
    this.iniciar();
  }

  // Este metodo limpia el intervalo activo.
  ngOnDestroy(): void {
    this.detener();
  }

  // Inicia el semáforo si está parado o lo pausa si está funcionando.
  alternar(): void {
    if (this.intervalo === null) {
      this.iniciar();
    } else {
      this.detener();
    }
  }

  // Crea un intervalo que comprueba cada segundo si toca cambiar de luz.
  private iniciar(): void {
    // Evita crear varios intervalos si el semáforo ya está en marcha.
    if (this.intervalo !== null) {
      return;
    }
    this.intervalo = setInterval(() => {

      // Avanza el contador de tiempo de la luz activa.
      this.segundosEnLuz++;

      // La luz ámbar dura 2 segundos; las luces roja y verde duran 5.
      const duracion = this.luzActiva() === 'ambar' ? 2 : 5;
      if (this.segundosEnLuz >= duracion) {
        this.cambiarLuz();
        // Empieza a contar desde cero para la nueva luz.
        this.segundosEnLuz = 0;
      }
    }, 1000);
  }

  // Detiene el intervalo y marca el semáforo como pausado.
  private detener(): void {
    if (this.intervalo !== null) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  // Avanza en el orden verde → ámbar → roja → verde.
  private cambiarLuz(): void {
    const siguienteLuz = {
      verde: 'ambar',
      ambar: 'roja',
      roja: 'verde',
    } as const;

    // Actualiza la señal para que el HTML muestre la nueva luz encendida.
    this.luzActiva.set(siguienteLuz[this.luzActiva()]);
  }
}
