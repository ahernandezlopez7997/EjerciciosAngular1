import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './Componentes/saludo/saludo';
import { Semaforo } from './Componentes/semaforo/semaforo';
import { ListaDeTareas } from './Componentes/lista-de-tareas/lista-de-tareas';
import { Temporizador } from './Componentes/temporizador/temporizador';
import { Comentarios } from './Componentes/comentarios/comentarios';

@Component({
  imports: [RouterOutlet, Saludo, Semaforo, ListaDeTareas, Temporizador, Comentarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('untitled');
  comentariosRecibidos: string[] = [];

  recibirComentario(comentario: string): void {
    this.comentariosRecibidos.push(comentario);
  }
}
