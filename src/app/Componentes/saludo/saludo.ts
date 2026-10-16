import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-saludo',
  styleUrl: './saludo.css',
  templateUrl: './saludo.html',
})
export class Saludo {
  saludo: string = '';

  constructor() {
    this.generarSaludo();
  }

  generarSaludo() {
    const hora: number = new Date().getHours();
    if (hora < 12) {
      this.saludo = 'Buenos días';
    }else if (hora < 20){
      this.saludo = 'Buenas tardes';
    }else{
      this.saludo = 'Buenas noches';
    }
  }
}
