import { Component, OnInit } from '@angular/core';
import { Tema } from '../../models/tema.model';
import { TemaService } from '../../services/tema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tema-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tema-form.component.html',
  styleUrl: './tema-form.component.css'
})
export class TemaFormComponent implements OnInit{
  tema: Tema = { id:0,nombre: '', descripcion: '' }; //Variable tema inicializada 
  editar: boolean = false; //Bandera para saber si esta editando un tema(True) o lo esta agregando(False) 

  constructor(
    private temaService: TemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //Realizamos esto para saber si esta editando un tema, pues en la funcion de lista de temas al tocar editar le pasamos por endpoint el id del tema
    if (id) {
      this.editar = true; //Estamos editando un tema
      this.temaService.obtenerTemaPorId(Number(id)).subscribe((data: Tema) => {
        this.tema = data; //Traemos los datos de ese tema
      });
    }
  }

  guardarTema(): void {
    if (this.editar) {
      this.temaService.actualizarTema(this.tema.id, this.tema).subscribe(() => {
        this.router.navigate(['/temas']);
      });
    } else {
      this.temaService.guardarTema(this.tema).subscribe(() => {
        this.router.navigate(['/temas']);
      });
    }
  }
  volver():void{
    this.router.navigate(['/temas']);
  }
}
