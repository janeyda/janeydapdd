import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, interval, Subscription } from 'rxjs';
import { ServiciopalabrasService } from 'src/app/services/serviciopalabras.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  palabra!: string;
  contador: number = 0;
  intentos: number = 0;
  palabras: any;
  habilitar: number = 0;
  letras: string[] = [];
  nivel: string = '';
  nombreJugador: string = '';
  tiempo: number = 0;
  timerSubscription!: Subscription;
  validacionLetras: string[] = [];
  palabraIngresada: string = ''; // Variable para almacenar la palabra ingresada

  constructor(
    private servicioPalabras: ServiciopalabrasService,
    private capturar: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    let random = 0;
    this.nivel = this.capturar.snapshot.params['level'];
    this.nombreJugador = this.capturar.snapshot.params['nombre'];
    switch (this.nivel) {
      case 'facil': this.intentos = 8; break;
      case 'medio': this.intentos = 6; break;
      case 'dificil': this.intentos = 3; break;
    }
    this.servicioPalabras.get().subscribe((data: any) => {
      this.palabras = data;
      do {
        random = Math.floor(Math.random() * this.palabras.length);
      } while (!this.palabras[random]);
      this.palabra = this.palabras[random].Palabra; // Asegurar que palabra sea una cadena
      this.letras = this.palabras[random].Palabra.split('');
      console.log(this.palabra)
    });

   
    this.startTimer();
  }

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.tiempo++;
    });
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  enviar(): void {
    if (this.validarPalabra()) {
      this.stopTimer();
      this.guardarResultado(true);
    } else {
      this.contador += 1;
      if (this.contador === this.intentos) {
        this.stopTimer();
        this.guardarResultado(false);
      }
    }
  }

  validarPalabra(): boolean {
    return this.palabraIngresada.toLowerCase() === this.palabra.toLowerCase();
  }

  erronio(e: any): void {
    if (e === 'error') {
      if (this.contador > 0) {
        this.contador -= 1;
      }
    } else if (e === true) {
      this.stopTimer();
      this.guardarResultado(true);
    } else if (this.contador >= this.intentos) {
      this.stopTimer();
      this.guardarResultado(false);
    }
  }

  guardarResultado(ganado: boolean): void {
    const resultado = {
      nombre: this.nombreJugador,
      nivel: this.nivel,
      resultado: ganado ? 'ganado' : 'perdido',
      intentos: this.contador,
      tiempo: this.tiempo
    };
    this.http.post('http://localhost:3000/resultados', resultado).subscribe(response => {
      console.log('Resultado guardado: ', response);
      this.router.navigate(['/principal']).then(() => {
        window.location.reload(); // Recargar la página después de la redirección
      });
    });
  }
}
