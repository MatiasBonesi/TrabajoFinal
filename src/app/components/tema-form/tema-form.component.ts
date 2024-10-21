import { Component, OnInit } from '@angular/core';
import { Tema } from '../../models/tema.model';
import { TemaService } from '../../services/tema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tema-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tema-form.component.html',
  styleUrl: './tema-form.component.css'
})
export class TemaFormComponent implements OnInit{
  tema: Tema = { id:0,nombre: '', descripcion: '' };
  isEdit: boolean = false;

  constructor(
    private temaService: TemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.temaService.obtenerTemaPorId(Number(id)).subscribe((data: Tema) => {
        this.tema = data;
      });
    }
  }

  guardarTema(): void {
    if (this.isEdit) {
      this.temaService.actualizarTema(this.tema.id, this.tema).subscribe(() => {
        this.router.navigate(['/temas']);
      });
    } else {
      this.temaService.guardarTema(this.tema).subscribe(() => {
        this.router.navigate(['/temas']);
      });
    }
  }
}
