import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComentarioComponent } from './pages/crear-comentario/crear-comentario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VerComentariosComponent } from './pages/ver-comentarios/ver-comentarios.component';
import { VerGraficasComponent } from './pages/ver-graficas/ver-graficas.component';

const routes: Routes = [
  {
    path: 'crear-comentario',
    component: CrearComentarioComponent
  },
  {
    path: 'ver-comentarios',
    component: VerComentariosComponent
  },
  {
    path: 'ver-graficas',
    component: VerGraficasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
