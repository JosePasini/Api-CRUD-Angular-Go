import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-detalle-by-id',
  templateUrl: './detalle-by-id.component.html',
  styleUrls: ['./detalle-by-id.component.css']
})
export class DetalleByIDComponent implements OnInit {

  data:any;

  constructor(private activateRoute:ActivatedRoute, private router:Router,private serviceCrud:CRUDService) {
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      this.serviceCrud.getDataByID(id).then(resp => {this.data = resp});
    })
   }

  public lista() {
    this.router.navigate(['lista']);
  }

  ngOnInit(): void {
  }

}
