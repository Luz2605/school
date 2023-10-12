import { Component, OnInit } from '@angular/core';
import { profesorService } from '../profesor.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profesores-index',
  templateUrl: './profesores-index.component.html',
  styleUrls: ['./profesores-index.component.css']
})
export class ProfesoresIndexComponent implements OnInit {

  constructor(private service: profesorService, private route:Router) { }
  public listprofesor: any =[]

  ngOnInit(): void {
  }

  getAllprofesor(){
    this.service.getAll().subscribe(
      result => {
this.listprofesor = result
console.log(this.listprofesor)
    });
  
}
new(){
  this.route.navigateByUrl("/profesor/new")    
}
edit(id: any){
  this.route.navigateByUrl("/profesor/edit/" + id) 
}
delete(id: any ){
  this.service.delete(id).subscribe(
    result =>{
    alert ("registro elimionado")
    this.getAllprofesor()
    }
  )
}

}
