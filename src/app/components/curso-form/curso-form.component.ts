import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../models/curso.model';
import { Tema } from '../../models/tema.model';
import { Docente } from '../../models/docente.model';
import { Alumno } from '../../models/alumno.model';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from '../../services/tema.service';
import { DocenteService } from '../../services/docente.service';
import { AlumnoService } from '../../services/alumno.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  curso: Curso = { 
    id: 0,
    tema: new Tema(),
    fechaInicio: new Date(),
    fechaFin: new Date(),
    docente_legajo: new Docente(),
    precio: 0,
    alumnos: []  // Inicializamos con un array vacío
  };
  isEdit: boolean = false;

  temas$: Observable<Tema[]> | undefined;  // Ahora puede ser undefined
  docentes$: Observable<Docente[]> | undefined;  // Ahora puede ser undefined
  alumnos$: Observable<Alumno[]> | undefined;  // Ahora puede ser undefined

  constructor(
    private cursoService: CursoService,
    private temaService: TemaService,
    private docenteService: DocenteService,
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Cargar los temas, docentes y alumnos al iniciar el componente
    this.temas$ = this.temaService.obtenerTodosLosTemas();
    this.docentes$ = this.docenteService.obtenerTodosLosDocentes();
    this.alumnos$ = this.alumnoService.obtenerTodosLosAlumnos();

    // Verificar si es edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.cursoService.obtenerCursoPorId(Number(id)).subscribe((data: Curso) => {
        this.curso = data;
      });
    }
  }
  // Función para manejar la selección de alumnos
  onAlumnoCheckboxChange(event: any, alumno: any) {
    if (event.target.checked) {
      // Añadir alumno a la lista de alumnos seleccionados
      this.curso.alumnos.push(alumno);
    } else {
      // Eliminar alumno de la lista de alumnos seleccionados
      this.curso.alumnos = this.curso.alumnos.filter((a: any) => a.id !== alumno.id);
    }
  }
  guardarCurso(): void {
    if (this.isEdit) {
      this.cursoService.actualizarCurso(this.curso.id, this.curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    } else {
      this.cursoService.guardarCurso(this.curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    }
  }
  volver():void{
    this.router.navigate(['/cursos']);
  }
}
