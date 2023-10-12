import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { EspecialidadesIndexComponent } from './especialidades/especialidades-index/especialidades-index.component';
import { EspecialidadesFormComponent } from './especialidades/especialidades-form/especialidades-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PorfesoresFromComponent } from './profesores/porfesores-from/porfesores-from.component';
import { ProfesoresIndexComponent } from './profesores/profesores-index/profesores-index.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadesIndexComponent,
    EspecialidadesFormComponent,
    PorfesoresFromComponent,
    ProfesoresIndexComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      positionClass: "toast-bottom-right"
    }),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
