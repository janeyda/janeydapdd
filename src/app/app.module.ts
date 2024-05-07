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

@NgModule({
  declarations: [
    AppComponent,
    CasillasComponent,
    TableroComponent,
    FilaComponent,
    CeldasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
