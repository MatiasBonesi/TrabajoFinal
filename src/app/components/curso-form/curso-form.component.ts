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

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.css'
})
export class CursoFormComponent implements OnInit {
  curso: Curso = { id:0,tema:new Tema(),fechaInicio: new Date(),fechaFin: new Date(), docente: new Docente(), precio:0,alumnos: [new Alumno()] };
  isEdit: boolean = false;


  constructor(
    private cursoService: CursoService,
    private temaServise:TemaService,
    private docenteServise:DocenteService,
    private alumnosServise:AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  temas=this.temaServise.obtenerTodosLosTemas;
  docentes=this.docenteServise.obtenerTodosLosDocentes;
  alumnos=this.alumnosServise.obtenerTodosLosAlumnos;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.cursoService.obtenerCursoPorId(Number(id)).subscribe((data: Curso) => {
        this.curso = data;
      });
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
}
