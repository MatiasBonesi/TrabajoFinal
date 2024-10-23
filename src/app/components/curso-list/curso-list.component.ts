import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { CursoService } from '../../services/curso.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCursos();
  }
  // Método para cargar todos los cursos
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
  // Método para filtrar los cursos por fecha de finalización
  cursosFiltrados(fechaFin: Date): Observable<Curso[]>{
  return this.cursoService.getCursosPorFechaFin(fechaFin)
  }

  buscarCursos(): void {
    if (this.filtroFechaFin) {
      const fechaFin = new Date(this.filtroFechaFin); // Convertir string a Date
      this.cursosFiltrados(fechaFin).subscribe(
        (cursosFiltrados: Curso[]) => {
          this.cursos = cursosFiltrados;
        },
        error => {
          console.error('Error al filtrar cursos por fecha de finalización:', error);
        }
      );
    }
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
}
