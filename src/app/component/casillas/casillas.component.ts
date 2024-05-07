import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { ServiciodenivelService } from 'src/app/serviciodenivel.service';

let contado = 0;
@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
  
})
export class CasillasComponent implements OnInit{
  @Input () lapalabra!: string
  @Input () lasletras!: any []
  @Input () habilitar!: number
  contador: number = 0;
 
 

  
  @Output () error = new EventEmitter<any>()
 
  
  filas: number[] = [];
  
  
  constructor(private servicionivel:ServiciodenivelService ) {}

  ngOnInit(): void {
    this.servicionivel.disparadornivel.subscribe((evento) => {
      console.log(evento.data);
      console.log('recibiendo datasssssssssss',evento.data);
      contado=evento.data
      this.filasnivel(contado)
      console.log('hols',contado);

    })
   
    
    if (contado === 1) {
      this.filas = [1, 2, 3, 4, 5, 6,7,8];
    } else if(contado===2){
      this.filas=[1, 2, 3, 4, 5, 6]
    } else if (contado === 3) {
    this.filas = [1, 2, 3];

    } else {
    console.error('Valor  no manejado:', contado);
    }
   
  }
 
  filasnivel(valor: number) {
    if (contado === 1) {
      this.filas = [1, 2, 3, 4, 5, 6,7,8];
    } else if(contado===2){
      this.filas=[1, 2, 3, 4, 5, 6]
    } else if (contado === 3) {
    this.filas = [1, 2, 3];

  } else {
    console.error('Valor de contado no manejado:', contado);
  }
    
   
   
  }
  
 erronio(e:any){
 this.error.emit(e)
  
  }


  enviar(){
    this.contador += 1
  }
  
  
 
}

  

