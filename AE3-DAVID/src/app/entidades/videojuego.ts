//Clase para guardar los atributos de los videojuegos
export class Videojuego{

//Generamos los atributos
private _idVideojuego: number = 0;
public titulo : string;
public compania : string;
public valoracion : number;

//Genermos el contador para el idVideojuego
private static contadorId: number =1;

constructor ( titulo : string,  compania : string,  valoracion : number){
    this._idVideojuego = Videojuego.contadorId++;
    this.titulo = titulo;
    this.compania = compania;
    this.valoracion = valoracion; 
}
public get idVideojuego(): number {
    return this._idVideojuego;
}



}