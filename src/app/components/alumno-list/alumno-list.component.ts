import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-list.component.html',
  styleUrl: './alumno-list.component.css'
})
export class AlumnoListComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService,private router: Router) {}
  
  ngOnInit(): void {
    this.cargarAlumnos();
  }
  cargarAlumnos() {
    this.alumnoService.obtenerTodosLosAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  agregarAlumno() {
    this.router.navigate(['/alumnos/agregar']);
  }

  editarAlumno(id: number) {
    this.router.navigate([`/alumnos/editar/${id}`]);
  }

  eliminarAlumno(id: number) {
    this.alumnoService.eliminarAlumno(id).subscribe(() => {
      this.cargarAlumnos(); // Refresca la lista después de eliminar
    });
  }
}
