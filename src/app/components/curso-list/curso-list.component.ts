import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { CursoService } from '../../services/curso.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Docente } from '../../models/docente.model';
import { Alumno } from '../../models/alumno.model';
import { DocenteService } from '../../services/docente.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.css'
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  filtroFechaFin: Date = new Date; // Para almacenar la fecha seleccionada
  selectedLegajo: number = 0;  // Cambiado a número
  docentes: Docente[] = [];
  alumnos: String[] = [];
  docentes$: Observable<Docente[]> | undefined;

  constructor(
    private cursoService: CursoService,
    private docenteService:DocenteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCursos();
    this.docentes$ = this.docenteService.obtenerTodosLosDocentes();
  }
  cargarCursos(): void {
    this.cursoService.obtenerTodosLosCursos().subscribe(
      (data: Curso[]) => {
        this.cursos = data;
      },
      error => {
        console.error('Error al obtener los Cursos:', error);
      }
    );
  }

  buscarCursosPorFecha() {
    // Verificamos si hay alguna fecha seleccionada
    if (!this.filtroFechaFin) {
      console.error("No se ha seleccionado ninguna fecha.");
      return;
    }
  
    // Convertimos la fecha al formato 'yyyy-MM-dd'
    const fechaFormateada = new Date(this.filtroFechaFin).toISOString().split('T')[0];
  
    // Llamamos al servicio para buscar los cursos por la fecha
    this.cursoService.getCursosPorFechaFin(fechaFormateada).subscribe(
      (cursos: Curso[]) => {
        this.cursos = cursos;
      },
      (error) => {
        console.error('Error al buscar los cursos por fecha:', error);
      }
    );
  }
  
  
  // Te manda a la página de agregar curso donde actua el curso-form
  agregarCurso(): void {
    this.router.navigate(['/cursos/agregar']);
  }
  // Te manda a la página de editar curso donde actua el curso-form
  editarCurso(id: number): void {
    this.router.navigate([`/cursos/editar/${id}`]);
  }
  // Eliminar curso por su id
  eliminarCurso(id: number): void {
    this.cursoService.eliminarCurso(id).subscribe(
      () => {
        this.cursos = this.cursos.filter(curso => curso.id !== id);
      },
      error => {
        console.error('Error al eliminar el Curso:', error);
      }
    );
  }
  
    // Método para buscar los alumnos según el legajo del docente
    buscarAlumnos(): void {
      if (this.selectedLegajo) {
        this.cursoService.getAlumnosCursoVigente(this.selectedLegajo).subscribe(
          (data: String[]) => {
            this.alumnos = data;
          },
          error => {
            console.error('Error al buscar los alumnos:', error);
            this.alumnos = [];  // En caso de error, limpia la lista de alumnos
          }
        );
      }
    }
  
}
