import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciodenivelService {
 @Output() disparadornivel : EventEmitter<any>=new EventEmitter();
  constructor() { }
}
