import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/servicios/crud.service';

import { ObjetoBindComponent } from '../objeto-bind/objeto-bind.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  idParam: number = 0;
  dataForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', Validators.required),
    instrumento: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    costo_envio: new FormControl('', Validators.required)
  })
  constructor(private activateRoute: ActivatedRoute, private router: Router, private serviceCrud: CRUDService) {
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.idParam = params['id'];
        console.log("ID::::::::", this.idParam);
      }
    })
  }

  ngOnInit(): void {
  }

  onForm(form: any) {
    if (this.idParam) {
      const object = new ObjetoBindComponent(
        Number(this.idParam), String(this.dataForm.value.nombre), String(this.dataForm.value.imagen),
        String(this.dataForm.value.instrumento),
        String(this.dataForm.value.marca), String(this.dataForm.value.modelo), Number(this.dataForm.value.precio),
        Number(this.dataForm.value.costo_envio)
      )
      this.serviceCrud.postData(object);
    } else {
      this.serviceCrud.postData(form);
    }
    alert("Formulario enviado")
    this.router.navigate(['lista'])
  }

}
