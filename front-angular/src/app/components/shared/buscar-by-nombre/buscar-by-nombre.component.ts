import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-buscar-by-nombre',
  templateUrl: './buscar-by-nombre.component.html',
  styleUrls: ['./buscar-by-nombre.component.css']
})
export class BuscarByNombreComponent implements OnInit {

  textoParam: string = "";
  dataArr: any[] = [];
  dataArrAux: any[] = [];
  constructor(private serviceCrud: CRUDService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  iniciar(): void{
    if (this.dataArr.length > 0) {
      this.activateRoute.params.subscribe(params => {
        this.textoParam = params['texto'];
        this.dataArrAux = this.filtrarPorParam(this.textoParam)
      }) 
    } 
  }

  
  ngOnInit(): void {
    this.serviceCrud.getData().then(resp => {
      this.dataArr = resp;
      console.log(this.dataArr)
    }).then(() => {
        this.iniciar();     
    })
  }

  filtrarPorParam(texto: string): any[] {
    console.log("Method:", this.dataArr.filter(data => data.nombre.toLowerCase().includes(this.textoParam.toLowerCase())))
    return this.dataArr.filter(data => data.nombre.toLowerCase().includes(this.textoParam.toLowerCase()))
  }

}
