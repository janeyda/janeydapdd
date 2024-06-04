import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiciopalabrasService } from 'src/app/services/serviciopalabras.service';
import { ServiciodenivelService } from 'src/app/serviciodenivel.service';
let contado = 0;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {
  nombreJugador: string = '';
  constructor(
    private enrutar: Router
  ) {}

  ngOnInit(): void {
       
  }

  nivel(level: string) {
    if (this.nombreJugador.trim() === '') {
      alert('Por favor, ingrese su nombre.');
      return;
    }
    this.enrutar.navigate(['/tablero', level, { nombre: this.nombreJugador }]);
  }

  // nivel(level: string){
  //   this.enrutar.navigate(['/tablero', level])
  // }
}
