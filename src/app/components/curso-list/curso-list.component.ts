import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { CursoService } from '../../services/curso.service';
import { Router } from '@angular/router';
import { Docente } from '../../models/docente.model';
import { Alumno } from '../../models/alumno.model';
import { Tema } from '../../models/tema.model';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.css'
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCursos();
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

  agregarCurso(): void {
    this.router.navigate(['/cursos/agregar']);
  }

  editarCurso(id: number): void {
    this.router.navigate([`/cursos/editar/${id}`]);
  }

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
