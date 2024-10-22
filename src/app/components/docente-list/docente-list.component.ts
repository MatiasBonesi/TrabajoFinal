import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente.model';
import { DocenteService } from '../../services/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docente-list.component.html',
  styleUrl: './docente-list.component.css'
})
export class DocenteListComponent implements OnInit{
docentes: Docente[] = [];
constructor(
  private docenteService: DocenteService,
  private router: Router
) { }
ngOnInit(): void {
  this.cargarDocentes();
}
cargarDocentes(): void {
  this.docenteService.obtenerTodosLosDocentes().subscribe(
    (data: Docente[]) => {
      this.docentes = data;
    },
    error => {
      console.error('Error al obtener los Docentes:', error);
    }
  );
}
agregarDocente(): void {
  this.router.navigate(['/docentes/agregar']);
}

editarDocente(legajo: number): void {
  this.router.navigate([`/docentes/editar/${legajo}`]);
}

eliminarDocente(legajo: number): void {
  this.docenteService.eliminarDocente(legajo).subscribe(
    () => {
      this.docentes = this.docentes.filter(docente => docente.legajo !== legajo);
    },
    error => {
      console.error('Error al eliminar el docente:', error);
    }
  );
}
}