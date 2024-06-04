import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private apiUrl = 'http://localhost:3000/resultados'; // URL de la API

  constructor(private http: HttpClient) {}

  getResultados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTopResultados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(resultados => 
        resultados
          .filter(resultado => resultado.resultado === 'ganado')
          .sort((a, b) => a.tiempo - b.tiempo)
          .slice(0, 5)
      )
    );
  }
}
