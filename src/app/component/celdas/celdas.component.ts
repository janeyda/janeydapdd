import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.sass']
})
export class CeldasComponent implements OnChanges{
  @Input() palabra!: string
  @Input() letra!: string
  @Input() verificar!: boolean
  @Output() estado = new EventEmitter<any>()
  opcion: string = ''
  css:string= ''

  ngOnChanges(changes: SimpleChanges): void {
    if (this.verificar == false){
      console.log('celda')
    }
    if (this.opcion != '' && this.verificar == true){
      if (this.opcion === this.letra){
        this.css='acierto'
        this.estado.emit(true)
      }else {
        if(this.palabra.includes(this.opcion)) {
          this.css='present'
        }else{
          this.css='absent'
        }
        this.estado.emit(false)
      }
    }else if (this.opcion == '' && this.verificar == true){
      this.estado.emit('nada')
      this.css = 'nada'
    }
  }
}
