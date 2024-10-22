import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/cursos'; 

  constructor(private http: HttpClient) { }
 // Obtener todos los Cursos
 obtenerTodosLosCursos(): Observable<Curso[]> {
  return this.http.get<Curso[]>(`${this.apiUrl}`);
  }

// Obtener un docente por legajo
  obtenerCursoPorId(id: number): Observable<Curso> {
  return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  } 

// Crear un nuevo Curso
  guardarCurso(curso: Curso): Observable<Object> {
  return this.http.post(`${this.apiUrl}`, curso);
  }

// Actualizar un Curso
  actualizarCurso(id: number, curso: Curso): Observable<Object> {
  return this.http.put(`${this.apiUrl}/${id}`, curso);
  }

// Eliminar un Curso
  eliminarCurso(id: number): Observable<Object> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }
//Obtener un curso determinado por su fecha de finalizacion
  getCursosPorFechaFin(fecha: Date): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/fecha-fin?fecha=${fecha}`);
  }
}
