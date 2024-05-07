import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'palabraadeldia';

  @Input () lasletras!: any []
  @Input () filas!: any []
 
 
  





}
