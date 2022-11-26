import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CABECERAComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { InsertarVideojuegoComponent } from './insertar-videojuego/insertar-videojuego.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    CABECERAComponent,
    PieComponent,
    LoginComponent,
    DetalleComponent,
    InsertarVideojuegoComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
