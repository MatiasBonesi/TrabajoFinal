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
  editar:boolean = false; 
  fechaMaxima: string='';


  constructor(private alumnoService: AlumnoService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.setFechaMaxima(); // Al iniciar seteo la fecha maxima como el dia de hoy
    const id = this.route.snapshot.paramMap.get('id'); 
    //Si obtengo el id a traves de la url es porque esta editando un alumno
    if (id) {
      this.editar = true; //Modifico el editar a true
      this.alumnoService.obtenerUnAlumno(Number(id)).subscribe((data: Alumno) => {
        this.alumno = data; //Traigo los datos de ese alumno
      });
    }
  }
  //Establece la fecha actual
  setFechaMaxima(): void {
    const edadPermitida = 18;
    const hoy = new Date();
    hoy.setFullYear(hoy.getFullYear() - edadPermitida); // Resta 18 años a la fecha actual
    this.fechaMaxima = hoy.toISOString().split('T')[0]; // Usa el formato 'yyyy-MM-dd'
  }
  
  guardarAlumno():void {
    if (this.editar) {
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