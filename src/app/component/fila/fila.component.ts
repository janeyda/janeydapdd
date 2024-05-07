import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.sass']
})
export class FilaComponent implements OnChanges {
  @Input() palabra!: string
  @Input() letras!: any[]
  @Input() codigo!: number
  @Input() habilitar!: number
  @Input() contado!: number
  @Output() error = new EventEmitter<any>()
  contenedor: any[] = []
  verificar: boolean = false;

  celdas = [1, 2, 3, 4, 5]
  ngOnChanges(changes: SimpleChanges): void {
    if (this.codigo === this.habilitar) {
      this.verificar = false
    } else{
      this.verificar = true
    }
    console.log('fila:',this.verificar)
  }
  contener_estados(e: any) {
    if (this.contenedor.length < 5) {
      this.contenedor.push(e);
    }
    if (this.contenedor.length == 5) {
      let contador = 0;
      for (let x = 0; x < this.contenedor.length; x++) {
        if (this.contenedor[x] === true) {
          contador += 1;
        }
      }
      if (this.codigo < this.habilitar) {
        if (contador == 5) {
          this.error.emit(true)
        } else if (contador < 5 && this.contenedor.indexOf('nada') == -1) {
          this.error.emit(false)
        } else if (this.contenedor.indexOf('nada') >= 0) {
          this.error.emit('error')
        }
      }
      this.contenedor = []
    }
  }
}
