import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-comentarios',
  styleUrl: './comentarios.css',
  templateUrl: './comentarios.html',
})
export class Comentarios {
  // Guarda comentarios para mostrarlos en lista.
  comentarios: string[] = [];

  // Emite el comentario para que componente padre lo reciba.
  @Output() comentarioEnviado = new EventEmitter<string>();

  // Limpia y guarda el comentario sin textos vacíos.
  enviarComentario(texto: string): void {
    const comentario = texto.trim();

    // No hace nada si está vacío.
    if (comentario === '') {
      return;
    }

    // Añade el comentario a la lista que muestra.
    this.comentarios.push(comentario);
    // Notifica al padre y le pasa el texto enviado.
    this.comentarioEnviado.emit(comentario);
  }
}
