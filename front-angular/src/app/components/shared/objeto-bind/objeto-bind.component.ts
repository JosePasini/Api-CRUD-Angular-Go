import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-objeto-bind',
  templateUrl: './objeto-bind.component.html',
  styleUrls: ['./objeto-bind.component.css']
})
export class ObjetoBindComponent implements OnInit {
  id: Number;
  imagen: String;
  instrumento: String;
  marca: String;
  modelo: String;
  nombre: String;
  precio: Number;
  costo_envio: Number;

  constructor(id: Number, nombre: String, imagen: String, instrumento: String, marca: String, modelo: String, precio: Number, costo_envio: Number) {
    this.id = id;
    this.nombre = nombre;
    this.instrumento = instrumento;
    this.marca = marca;
    this.modelo = modelo;
    this.imagen = imagen;
    this.precio = precio;
    this.costo_envio = costo_envio;
  }

  ngOnInit(): void {
  }

}
