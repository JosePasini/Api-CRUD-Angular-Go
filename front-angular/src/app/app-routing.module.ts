import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarByNombreComponent } from './components/shared/buscar-by-nombre/buscar-by-nombre.component';
import { DetalleByIdCardComponent } from './components/shared/detalle-by-id-card/detalle-by-id-card.component';

import { DetalleByIDComponent } from './components/shared/detalle-by-id/detalle-by-id.component';
import { FormularioComponent } from './components/shared/formulario/formulario.component';
import { ListaCardComponent } from './components/shared/lista-card/lista-card.component';
import { ListaComponent } from './components/shared/lista/lista.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent},
  { path: 'listaCard', component: ListaCardComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'formulario/:id', component: FormularioComponent},
  { path: 'detalleByID/:id', component: DetalleByIDComponent},
  { path: 'detalleByIDCard/:id', component: DetalleByIdCardComponent},
  { path: 'buscar/:texto', component: BuscarByNombreComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
