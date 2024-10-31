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
  alumnos: Alumno[] = []; //Inicializo una variable de lista de alumnos vacia

  constructor(private alumnoService: AlumnoService,private router: Router) {}
  
  ngOnInit(): void {
    this.cargarAlumnos(); // Al iniciar ejecuta la funcion cargaralumnos()
  }
  //Obtiene todos los alumnos gracias a la funcion del servicio y los asigna a la lista alumnos
  cargarAlumnos() {
    this.alumnoService.obtenerTodosLosAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }
  // Las funciones de agregar y editar alumnos nos redirigen a su correspondiente endpoint
  agregarAlumno() {
    this.router.navigate(['/alumnos/agregar']);
  }

  editarAlumno(id: number) {
    this.router.navigate([`/alumnos/editar/${id}`]);
  }
  //Elimina el alumno
  eliminarAlumno(id: number) {
    this.alumnoService.eliminarAlumno(id).subscribe(
      () => {
        this.cargarAlumnos(); // Recarga la lista después de eliminar
      },
      error => {
        if (error.status === 500) {
          alert("No puede eliminar este alumno porque se encuentra en un curso.");
        } else {
          console.error("Error al eliminar el alumno:", error);
          alert("Ocurrió un error inesperado al intentar eliminar el alumno.");
        }
      }
    );
  }
  
}
