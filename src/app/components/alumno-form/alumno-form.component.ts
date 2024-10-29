import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.css'
})
export class AlumnoFormComponent implements OnInit {
  alumno: Alumno = { id: 0, nombre: '', fechaNacimiento: new Date() };
  isEdit:boolean = false;
  fechaMaxima18: string='';


  constructor(private alumnoService: AlumnoService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.alumnoService.obtenerUnAlumno(Number(id)).subscribe((data: Alumno) => {
        this.alumno = data;
      });
    }
  }

  guardarAlumno():void {
    if (this.isEdit) {
      this.alumnoService.actualizarAlumno(this.alumno.id, this.alumno).subscribe(() => {
        this.router.navigate(['/alumnos']);
      });
    } else {
      this.alumnoService.guardarAlumno(this.alumno).subscribe(() => {
        this.router.navigate(['/alumnos']);
      });
    }

  }
  volver():void{
    this.router.navigate(['/alumnos']);
  }
}