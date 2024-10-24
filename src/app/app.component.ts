import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {TemaListComponent} from './components/tema-list/tema-list.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemaListComponent,FormsModule,  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Frontend';
  constructor(
  private router:Router
  ){}
  iraCursos():void{
    this.router.navigate(['/cursos'])
  }
  iraTemas():void{
    this.router.navigate(['/temas'])
  }
  iraDocentes():void{
    this.router.navigate(['/docentes'])
  }
  iraAlumnos():void{
    this.router.navigate(['/alumnos'])
  }
}
