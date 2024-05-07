import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './pages/tablero/tablero.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {path:'',component: PrincipalComponent},
  {path:'tablero',component: TableroComponent},
  { path: 'principal', loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
