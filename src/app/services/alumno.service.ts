import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8080/alumnos'; 

  constructor(private http: HttpClient) {}

  obtenerTodosLosAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  obtenerUnAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  agregarAlumno(alumnoNuevo: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumnoNuevo);
  }
  
  guardarAlumno(alumno: Alumno): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, alumno);
  }
  
  actualizarAlumno(id: number, alumno: Alumno): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, alumno);
  }

  eliminarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
