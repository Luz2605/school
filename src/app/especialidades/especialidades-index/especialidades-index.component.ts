import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../especialidad.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-especialidades-index',
  templateUrl: './especialidades-index.component.html',
  styleUrls: ['./especialidades-index.component.css']
})
export class EspecialidadesIndexComponent implements OnInit {

  constructor(private service: EspecialidadService, private route:Router) { }
  public listEspecialidades: any =[]

  ngOnInit(): void {
    this.getAllEspecialidades();
  }
  getAllEspecialidades(){
      this.service.getAll().subscribe(
        result =>{
          this.listEspecialidades = result
          console.log(this.listEspecialidades)
      });
    
  }
  new(){
    this.route.navigateByUrl("/especialidad/new")    
  }
  edit(id: any){
    this.route.navigateByUrl("/especialidad/edit/" + id) 
  }
  delete(id: any ){
    this.service.delete(id).subscribe(
      result =>{
      alert ("registro elimionado")
      this.getAllEspecialidades()
      }
    )
  }
}
