import { Component, OnInit } from '@angular/core';
import { ExamenService } from './examen.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  frase: string = '';
  autor: string = '';

  constructor(private examenService: ExamenService) {}

  ngOnInit() {
    this.examenService.obtenerFrase().subscribe((data: any) => {
      this.frase = data[0].q;
      this.autor = data[0].a;
    });
  }
}
