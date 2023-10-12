import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { profesorService } from '../profesor.service';
import { ActivatedRoute, } from '@angular/router';
import { HelperService } from 'src/app/config/services/helper.service';
import { Route,Router } from '@angular/router';
import { EspecialidadService } from 'src/app/especialidades/especialidad.service';

@Component({
  selector: 'app-porfesores-from',
  templateUrl: './porfesores-from.component.html',
  styleUrls: ['./porfesores-from.component.css']
})
export class PorfesoresFromComponent implements OnInit {

  public id = 0;
  public frmprofesor: FormGroup;
 public listEspecialidades: any = []

  constructor(private service: profesorService,
              private ActivatedRoute: ActivatedRoute,
              private HelperService: HelperService,
              private router: Router,
              private EspecialidadService: EspecialidadService) { 
                this.id = this.ActivatedRoute.snapshot.params['id'];
                this.frmprofesor = new FormGroup ({ 
                  nombre :new FormControl (null, Validators.required),
                  apellido : new FormGroup (null,Validators.required),
                  especialidad:new FormGroup (null,Validators.required),
                });
              }

  ngOnInit(): void {
    this.getEspecialidades();
    if (this.id !=0){
      this.service.getById(this.id).subscribe(
        result => {
            this.frmprofesor.controls['nombres'].setValue(result.data.nombre)
            this.frmprofesor.controls['apellido'].setValue(result.data.apellido)
            this.frmprofesor.controls['especialidad'].setValue(result.data.especialidad.id) 
        },
        Error => {}
      )
    }

  }
  getEspecialidades() {
    this.EspecialidadService.getAll().subscribe(
      result => {
        this.listEspecialidades = result.data
      }
    )
  }
  guardar() {
    if (this.frmprofesor.invalid) {
      this.HelperService.showNotify("warning","el campo cumple con la valoracion")
      return
    }

    let data = {
      "nombre": this.frmprofesor.controls['nombre'].value,
      "apellido": this.frmprofesor.controls['apellido'].value,
      "especialidadId":{
        "id": this.frmprofesor.controls['especialidad'].value}
    }
    this.service.save(data, this.id).subscribe(
      result => {
        this.HelperService.showNotify("success","profesor guardada")
      },
      error => {
        this.HelperService.showNotify("danger","se genero un error al guardar")
      }
    )
  }
  delete() {
    if (this.id != 0) {
      this.service.getById(this.id).subscribe(
        result => {
          this.frmprofesor.controls['nombre'].setValue(result.data.nombre)
        },
        error => { }

      )
    }
  }
}
