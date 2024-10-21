import { Routes } from '@angular/router';
import { TemaListComponent } from './components/tema-list/tema-list.component';
import { TemaFormComponent } from './components/tema-form/tema-form.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';

export const routes: Routes = [
    { path: 'temas', component: TemaListComponent },
    { path: 'temas/agregar', component: TemaFormComponent },
    { path: 'temas/editar/:id', component: TemaFormComponent },
    { path: '', redirectTo: '/temas', pathMatch: 'full' },
    { path: 'alumnos', component: AlumnoListComponent },
    { path: 'alumnos/nuevo', component: AlumnoFormComponent },
    { path: 'alumnos/:id', component: AlumnoFormComponent }, // Para editar
];
