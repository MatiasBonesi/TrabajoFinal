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
  temas: Tema[] = [];

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarTemas();
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
        this.temas = this.temas.filter(tema => tema.id !== id);
      },
      error => {
        console.error('Error al eliminar el tema:', error);
      }
    );
  }
  
}
