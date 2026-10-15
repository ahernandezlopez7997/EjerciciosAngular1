import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-de-tareas',
  styleUrl: './lista-de-tareas.css',
  templateUrl: './lista-de-tareas.html',
})
export class ListaDeTareas {
  listaTareas: string[] = [];
  indiceParaEditar: number | null = null;

  agregarTarea(nombre: string): void {
    // De esta forma evitamos que se agreguen tareas vacías
    const tarea = nombre.trim();

    if (tarea !== '')
    this.listaTareas.push(tarea);
  }

  editarTarea(indice: number): void {
    this.indiceParaEditar = indice;
  }

  eliminarTarea(indice: number): void {
    this.listaTareas.splice(indice, 1);
  }

  guardarEdicion(indice: number, nuevoNombre: string): void {
    const tarea = nuevoNombre.trim();

    // Comprobamos que la tarea no esté vacía
    if (tarea === '') {
      return;
    }
    // Una vez que la tarea no está vacía, la guardamos
    this.listaTareas[indice] = tarea;
    // Indicamos que ya no estamos editando ninguna tarea
    this.indiceParaEditar = null;
  }
}
