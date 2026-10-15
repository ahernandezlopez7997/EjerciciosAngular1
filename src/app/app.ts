import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './Componentes/saludo/saludo';
import { ListaDeTareas } from './Componentes/lista-de-tareas/lista-de-tareas';

@Component({
  imports: [RouterOutlet, Saludo, ListaDeTareas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('untitled');
}
