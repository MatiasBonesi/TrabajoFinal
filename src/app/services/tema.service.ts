import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tema } from '../models/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private apiUrl = 'http://localhost:8080/temas'; 

  constructor(private http: HttpClient) { }

  // Obtener todos los temas
  obtenerTodosLosTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${this.apiUrl}`);
  }

  // Obtener un tema por ID
  obtenerTemaPorId(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo tema
  guardarTema(tema: Tema): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, tema);
  }

  // Actualizar un tema
  actualizarTema(id: number, tema: Tema): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, tema);
  }

  // Eliminar un tema
  eliminarTema(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
