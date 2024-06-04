import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasillasComponent } from './component/casillas/casillas.component';
import { TableroComponent } from './pages/tablero/tablero.component';
import { FilaComponent } from './component/fila/fila.component';
import { CeldasComponent } from './component/celdas/celdas.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ClasificacionComponent } from './component/clasificacion/clasificacion.component';
import { ResultadosService } from './services/resultados.service';

@NgModule({
  declarations: [
    AppComponent,
    CasillasComponent,
    TableroComponent,
    FilaComponent,
    CeldasComponent,
    ClasificacionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    RouterModule.forRoot([
      { path: 'principal', component: PrincipalComponent },
      { path: 'tablero/:level', component: TableroComponent }
    ])
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
