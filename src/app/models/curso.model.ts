import { Alumno } from "./alumno.model";
import { Docente } from "./docente.model";
import { Tema } from "./tema.model";
//Modelo de Curso
export class Curso {
    id!:number;
    tema!: Tema;
    fechaInicio!: Date;
    fechaFin!: Date;
    docente_legajo!: Docente;
    precio!: number;
    alumnos!: Alumno[];
  }
  
 