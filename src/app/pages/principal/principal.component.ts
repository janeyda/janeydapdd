import { Component } from '@angular/core';
import { ServiciodenivelService } from 'src/app/serviciodenivel.service';
let contado = 0;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent {
  contador: number = 0;
 
  constructor(private servicionivel:ServiciodenivelService ) {}

  facil(){
    contado = 1
    console.log(contado);
    this.servicionivel.disparadornivel.emit({data:contado})
    console.log('dato emitido',contado);
  }  
  medio(){
    contado = 2
    console.log(contado);
    this.servicionivel.disparadornivel.emit({data:contado})
  }dificil(){
    contado = 3
    console.log(contado);
    this.servicionivel.disparadornivel.emit({data:contado})
  }
  
}
