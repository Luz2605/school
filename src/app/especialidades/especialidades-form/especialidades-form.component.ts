import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspecialidadService } from '../especialidad.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/config/services/helper.service';

@Component({
  selector: 'app-especialidades-form',
  templateUrl: './especialidades-form.component.html',
  styleUrls: ['./especialidades-form.component.css']
})
export class EspecialidadesFormComponent implements OnInit {

  public id = 0;
  public frmEspecialidad: FormGroup;

  constructor(private service: EspecialidadService,
              private activeRoute: ActivatedRoute,
              private HelperService: HelperService) {
    this.id = this.activeRoute.snapshot.params["id"];
    this.frmEspecialidad = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    })
  }

  ngOnInit(): void {
    if (this.id != 0 && this.id != undefined) {
      this.service.getById(this.id).subscribe(
        result => {
          this.frmEspecialidad.controls['nombre'].setValue(result.nombre)
        },
        Error => { }
      )
    }
  }

  guardar() {
    if (this.frmEspecialidad.invalid) {
      this.HelperService.showNotify("warning","el campo cumple con la valoracion")
      return
    }

    let data = {
      "nombre": this.frmEspecialidad.controls['nombre'].value
    }
    this.service.save(data, this.id).subscribe(
      result => {
        this.HelperService.showNotify("success","especialidad guardada")
      },
      error => {
        this.HelperService.showNotify("danger","se genero un error al guardar")
      }
    )
  }
}