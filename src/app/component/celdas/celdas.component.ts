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
      console.log('I es igual a', this.id);
      
    }

    ngOnChanges(changes: SimpleChanges): void {
      
    if (changes['validacionLetras'] && this.validacionLetras) {
      this.css = this.validacionLetras[this.index] || 'nada'; // Asegurarse de que no sea 'undefined'
    }
    console.log (this.verificar)
    if (this.verificar == false){
      console.log('celda')
    }
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
    console.log('Casilla: ', event.key);
    this.estado.emit({'letra': event.key, 'id': this.id});
    console.log('palabra es:', this.palabra);
    console.log('letra es:', this.letra);
    console.log('opcion es:', this.opcion);
    //this.validarLetras();
  }
 
}




// import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-celdas',
//   templateUrl: './celdas.component.html',
//   styleUrls: ['./celdas.component.sass']
// })
// export class CeldasComponent implements OnChanges {
//   @Input() palabra!: string;
//   @Input() letra!: string;
//   @Input() verificar!: boolean;
//   @Input() validacionLetras!: string[];

//   @Output() estado = new EventEmitter<any>();
//   opcion: string = '';
//   css: string = '';

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['validacionLetras'] && this.verificar) {
//       this.css = this.validacionLetras[this.letra];
//     }
//   }

//   onEmitir(event: any): void {
//     this.estado.emit(event.key);
//   }
// }
