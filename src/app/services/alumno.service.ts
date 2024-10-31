import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8080/alumnos'; // Me conecto con el Backend

  constructor(private http: HttpClient) {}

  // Obtener todos los alumnos
  obtenerTodosLosAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }
  // Obtener un alumno por ID
  obtenerUnAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }
  //Crear un alumno
  guardarAlumno(alumno: Alumno): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, alumno);
  }
  // Actualizar un alumno
  actualizarAlumno(id: number, alumno: Alumno): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, alumno);
  }
  //Eliminar alumno
  eliminarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
