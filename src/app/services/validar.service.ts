import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {
  @Input() palabra!: string;
  @Input() letra!: string;
  @Input() opcion: string = '';
  @Input() css: string = '';
  private validarLetrasFuncion!: Function;
  constructor() { }

  setValidarLetrasFuncion(funcion: Function) {
    this.validarLetrasFuncion = funcion;
  }

  ejecutarValidarLetras() {
    if (this.validarLetrasFuncion) {
      if (this.opcion == this.letra) {
        this.css = 'acierto'
      } else if (this.palabra.includes(this.opcion)) {
        this.css = 'presente'
      } else if (this.opcion){
        this.css = 'ausente';
      }
    }
  }
}
