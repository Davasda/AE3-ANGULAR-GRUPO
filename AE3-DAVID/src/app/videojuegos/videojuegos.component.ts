import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {



  ngOnInit(): void {
  }
//Creamos el array listaVideojuegos que almacena la lista de todos los videojuegos
  listaVideojuegos :Videojuego[] = []
  videojuego : Videojuego | null = null

//Inicializamos atributos
_idVideojuego: number = 0;
 titulo : string ="";
 compania : string="";
 valoracion : number=0;

  //Creamos un listado de Videojuegos y los añadimos al array.
  constructor(){
    let videojuego:Videojuego = new Videojuego("Tom Raider", "Namco", 4)
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego ("Mario Bros", "Nintendo", 3)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("Rush Blood", "Sony", 5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("Sonic", "Sega", 3)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("Alone in the Dark", "Infograme", 5)
    this.listaVideojuegos.push(videojuego)
    videojuego = new Videojuego ("Pac-Man", "Bandai", 4)
    this.listaVideojuegos.push(videojuego)
}

public seleccionar(videojuego : Videojuego) : void{
  console.log("Seleccionando...")

  this._idVideojuego = videojuego.idVideojuego
  this.titulo = videojuego.titulo
  this.compania = videojuego.compania
  this.valoracion = videojuego.valoracion
}

}
