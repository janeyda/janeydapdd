import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.sass']
})
export class ClasificacionComponent implements OnInit {
  topResultados: any[] = [];

  constructor(private resultadosService: ResultadosService) {}

  ngOnInit(): void {
    this.resultadosService.getTopResultados().subscribe((data: any[]) => {
      this.topResultados = data;
    });
  }
}
