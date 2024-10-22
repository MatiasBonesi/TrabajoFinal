import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Docente } from '../../models/docente.model';
import { DocenteService } from '../../services/docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docente-form',
  standalone: true,
  imports: [FormsModule,CommonModule,DocenteFormComponent],
  templateUrl: './docente-form.component.html',
  styleUrl: './docente-form.component.css'
})
export class DocenteFormComponent {
  docente: Docente = { legajo:0,nombre: ''};
  isEdit: boolean = false;

  constructor(
    private docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const legajo = this.route.snapshot.paramMap.get('legajo');
    if (legajo) {
      this.isEdit = true;
      this.docenteService.obtenerDocentePorLegajo(Number(legajo)).subscribe((data: Docente) => {
        this.docente = data;
      });
    }
  }

  guardarDocente(): void {
    if (this.isEdit) {
      this.docenteService.actualizarDocente(this.docente.legajo, this.docente).subscribe(() => {
        this.router.navigate(['/docentes']);
      });
    } else {
      this.docenteService.guardarDocente(this.docente).subscribe(() => {
        this.router.navigate(['/docentes']);
      });
    }
  }
}
