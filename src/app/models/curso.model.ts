import { Alumno } from "./alumno.model";
import { Docente } from "./docente.model";
import { Tema } from "./tema.model";
export class Curso {
     id!:number;
    tema!: Tema;
    fechaInicio!: Date;
    fechaFin!: Date;
    docente!: Docente;
    precio!: number;
    alumnos!: Alumno[];
  }
  
