import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListaComponent } from './components/shared/lista/lista.component';
import { FormularioComponent } from './components/shared/formulario/formulario.component';
import { DetalleByIDComponent } from './components/shared/detalle-by-id/detalle-by-id.component';
import { DetalleByIdCardComponent } from './components/shared/detalle-by-id-card/detalle-by-id-card.component';
import { ListaCardComponent } from './components/shared/lista-card/lista-card.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObjetoBindComponent } from './components/shared/objeto-bind/objeto-bind.component';
import { BuscarByNombreComponent } from './components/shared/buscar-by-nombre/buscar-by-nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    FormularioComponent,
    DetalleByIDComponent,
    DetalleByIdCardComponent,
    ListaCardComponent,
    ObjetoBindComponent,
    BuscarByNombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
