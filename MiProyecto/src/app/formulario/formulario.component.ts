import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  pelicula = { nombre: '', anio: '', productor: '', casa: '', protagonista: '' };
  listaPeliculas: any[] = [];

  agregarPelicula() {
    this.listaPeliculas.push({ ...this.pelicula });
    this.pelicula = { nombre: '', anio: '', productor: '', casa: '', protagonista: '' };
  }
}
