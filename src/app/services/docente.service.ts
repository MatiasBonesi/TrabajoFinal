import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private apiUrl = 'http://localhost:8080/docentes'; 

  constructor(private http: HttpClient) { }

  // Obtener todos los docentes
  obtenerTodosLosDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.apiUrl}`);
  }

  // Obtener un docente por ID
  obtenerDocentePorLegajo(legajo: number): Observable<Docente> {
    return this.http.get<Docente>(`${this.apiUrl}/${legajo}`);
  }

  // Crear un nuevo docente
  guardarDocente(docente: Docente): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, docente);
  }

  // Actualizar un docente
  actualizarDocente(legajo: number, docente: Docente): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${legajo}`, docente);
  }

  // Eliminar un docente
  eliminarDocente(legajo: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${legajo}`);
  }

}
