import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { ServiciodenivelService } from 'src/app/serviciodenivel.service';


@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
  
})
export class CasillasComponent implements OnInit{
  @Input () lapalabra!: string
  @Input () lasletras!: any []
  @Input () habilitar!: number
  @Input () nivel: string = '';
  @Output () error = new EventEmitter<any>()
  filas: number[] = [];

  
  constructor( ) {}

  ngOnInit(): void {
   
    
    if (this.nivel === 'facil') {
      this.filas = [1, 2, 3, 4, 5, 6,7,8];
    } else if(this.nivel === 'medio'){
      this.filas=[1, 2, 3, 4, 5, 6]
    } else if (this.nivel === 'dificil') {
    this.filas = [1, 2, 3];

    } else {
    console.error('Valor  no manejado:');
    }
     
  }
  erronio(e:any){
    this.error.emit(e)
  }


}

  

