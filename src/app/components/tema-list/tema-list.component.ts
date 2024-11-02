import { Component, OnInit } from '@angular/core';
import { Tema } from '../../models/tema.model';
import { TemaService } from '../../services/tema.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tema-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tema-list.component.html',
  styleUrl: './tema-list.component.css'
})
export class TemaListComponent implements OnInit{
  temas: Tema[] = [];// Inicializamos la lista de temas

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarTemas();//Al iniciar se realiza la funcion cargar los temas
  }

  cargarTemas(): void {
    this.temaService.obtenerTodosLosTemas().subscribe(
      (data: Tema[]) => {
        this.temas = data;
      },
      error => {
        console.error('Error al obtener los temas:', error);
      }
    );
  }

  agregarTema(): void {
    this.router.navigate(['/temas/agregar']);
  }

  editarTema(id: number): void {
    this.router.navigate([`/temas/editar/${id}`]);
  }

  eliminarTema(id: number): void {
    this.temaService.eliminarTema(id).subscribe(
      () => {
        this.cargarTemas(); // Recarga la lista después de eliminar
      },
      error => {
        if (error.status === 500) {
          alert("No puede eliminar este tema porque se encuentra en un curso.");
        } else {
          console.error("Error al eliminar el alumno:", error);
          alert("Ocurrió un error inesperado al intentar eliminar el tema.");
        }
      }
    );
  }
  
}
