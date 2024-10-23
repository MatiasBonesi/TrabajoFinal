import { Routes } from '@angular/router';
import { TemaListComponent } from './components/tema-list/tema-list.component';
import { TemaFormComponent } from './components/tema-form/tema-form.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { DocenteListComponent } from './components/docente-list/docente-list.component';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';

export const routes: Routes = [
    { path: 'temas', component: TemaListComponent },
    { path: 'temas/agregar', component: TemaFormComponent },
    { path: 'temas/editar/:id', component: TemaFormComponent },
    { path: 'alumnos', component: AlumnoListComponent },
    { path: 'alumnos/agregar', component: AlumnoFormComponent },
    { path: 'alumnos/editar/:id', component: AlumnoFormComponent }, 
    { path: 'docentes', component: DocenteListComponent },
    { path: 'docentes/agregar', component: DocenteFormComponent },
    { path: 'docentes/editar/:legajo', component: DocenteFormComponent },
    { path: 'cursos', component: CursoListComponent },
    { path: 'cursos/agregar', component: CursoFormComponent },
    { path: 'cursos/editar/:id', component: CursoFormComponent }

];
