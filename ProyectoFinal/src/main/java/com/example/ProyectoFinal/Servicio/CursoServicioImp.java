package com.example.ProyectoFinal.Servicio;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProyectoFinal.Repositorio.CursoRepositorio;


import jakarta.persistence.EntityNotFoundException;

import com.example.ProyectoFinal.Entidad.Curso;

@Service
public class CursoServicioImp implements CursoServicio {
	private final CursoRepositorio cursoRepositorio;
	
	@Autowired
	public CursoServicioImp(CursoRepositorio cursoRepositorio) {
		this.cursoRepositorio = cursoRepositorio;
	}
	@Override
	public List<Curso> obtenerTodosLosCursos(){
		return cursoRepositorio.findAll();
	}
	@Override
	public Optional<Curso> obtenerUnCurso(Long id){
		return cursoRepositorio.findById(id);
	}
	@Override
	public Curso guardarCurso(Curso curso) {
		return cursoRepositorio.save(curso);
	}
	@Override
    public void eliminarCurso(Long id) {
        cursoRepositorio.deleteById(id);
    }
	@Override
	public Curso actualizarCurso(Long id,Curso cursomodificado) {
		Curso cursoExistente = cursoRepositorio.findById(id)
	            .orElseThrow(() -> new EntityNotFoundException("Curso no encontrado con id: " + id)); //Busco al curso por id y en caso de no encontrarlo tira el error de excepcion
		cursoExistente.setTema(cursomodificado.getTema()); //Modifico los campos del curso
		cursoExistente.setFechaInicio(cursomodificado.getFechaInicio());
		cursoExistente.setFechaFin(cursomodificado.getFechaFin());
		cursoExistente.setDocente_legajo(cursomodificado.getDocente_legajo());
		cursoExistente.setPrecio(cursomodificado.getPrecio());
		cursoExistente.setAlumnos(cursomodificado.getAlumnos());
        
        return cursoRepositorio.save(cursoExistente);
		
	}
	@Override
	public List<Curso> obtenerCursoporFechaFin(LocalDate fechaFin){
		  return cursoRepositorio.findAll().stream()//Convierte la lista de cursos obtenida en un flujo de datos, para luego poder hacer un filtrado
		            .filter(curso -> curso.getFechaFin().equals(fechaFin))//filtro usando la funcion anonima indicando si es igual a la fechaFin
		            .collect(Collectors.toList()); //El flujo filtrado se recolecta en una lista, en este caso lista de Cursos
	}

	@Override
	public Set<String> obtenerAlumnosPorDocente(Long docente_legajo) {
	    LocalDate fechaActual = LocalDate.now(); //Obtiene la fecha actual y la convierte al tipo Date
	    return cursoRepositorio.findAll().stream() //Convierte la lista de cursos obtenida en un flujo de datos, para luego poder hacer un filtrado
	            .filter(curso -> curso.getDocente_legajo().getLegajo().equals(docente_legajo) && 
	                             curso.getFechaFin().compareTo(fechaActual) >= 0)//Hago el filtrado por el legajo de docente y por fechaActual
	            .flatMap(curso -> curso.getAlumnos().stream()) //Para cada curso que pasó el filtro, obtiene su lista de alumnos
	            .map(alumno -> alumno.getNombre())//Extrae el nombre de cada alumno en el flujo de alumnos.
	            .collect(Collectors.toSet());//Convierte el flujo de nombres en un conjunto o set de nombres de alumnos para evitar duplicados 
	}

}
