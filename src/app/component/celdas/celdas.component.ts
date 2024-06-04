import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.sass']
})
export class CeldasComponent implements OnInit {
  @Input() palabra!: string;
  @Input() letra!: string;
  @Input() verificar!: boolean;
  @Input() validacionLetras!: string[]; // Recibir las validaciones
  @Input() id!: number;

  @Output() estado = new EventEmitter<any>();
  @Input() opcion: string = '';
  @Input() css: string = '';
  index: any;
  ngOnInit(): void {
    
      
    }

    ngOnChanges(changes: SimpleChanges): void {
      
 
    
    if (this.opcion != '' && this.verificar == true){
      if (this.opcion === this.letra){
        this.css='acierto'
        this.estado.emit(true)
      }else {
        if(this.palabra.includes(this.opcion)) {
          this.css='presente'
        }else{
          this.css='ausente'
        }
        this.estado.emit(false)
      }
    }else if (this.opcion == '' && this.verificar == true){
      this.estado.emit('nada')
      this.css = 'nada'
    }
  }
  

  onEmitir(event: any) {
 
    this.estado.emit({'letra': event.key, 'id': this.id});
   ;
  }
 
}


