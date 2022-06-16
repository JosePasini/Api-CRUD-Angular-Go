import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.css']
})
export class ListaCardComponent implements OnInit {

  dataArr:any[] = [];

  constructor(private servicioCrud:CRUDService) { }

  ngOnInit(): void {
    this.servicioCrud.getData().then(resp => {
      this.dataArr = resp;
      console.log(this.dataArr)
    });
  }

}
