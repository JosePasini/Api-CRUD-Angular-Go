import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dataArr: any[] = [];

  constructor(private router: Router,private serviceCrud: CRUDService) { }
  sumar(): void {
    console.log(" !!!!  --  !!!! ")
  }

  deleteData(id: number){
    let ok = confirm('¿Seguro que desea eliminar el dato?');
    if (ok) {
      this.serviceCrud.deleteData(id).then(resp => {
        console.log("RRRR:::", resp)
      })
    } else {
      alert("Muchas gracias.")
    }

  }
  ngOnInit(): void {
    this.serviceCrud.getData().then(resp => {
      this.dataArr = resp;
      console.log(this.dataArr)
    })
  }

  getDataByID(id: number){
    console.log("ID:",id);
    this.router.navigate(['/detalleByID/',id])
  }

}