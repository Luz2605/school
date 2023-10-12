import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesIndexComponent } from './especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './especialidades/especialidades-form/especialidades-form.component';

const routes: Routes = [
  {path: 'especialidad', component: EspecialidadesIndexComponent},
  {path: 'especialidad/new', component: EspecialidadesFormComponent},
  {path: 'especialidad/edit/:id', component: EspecialidadesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
