package com.example.ProyectoFinal.Servicio;


import java.sql.Date;

import java.util.List;
import java.util.Optional;
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
	            .orElseThrow(() -> new EntityNotFoundException("Curso no encontrado con id: " + id));
		cursoExistente.setTema(cursomodificado.getTema());
		cursoExistente.setFechaInicio(cursomodificado.getFechaInicio());
		cursoExistente.setFechaFin(cursomodificado.getFechaFin());
		cursoExistente.setDocente_legajo(cursomodificado.getDocente_legajo());
		cursoExistente.setPrecio(cursomodificado.getPrecio());
		cursoExistente.setAlumnos(cursomodificado.getAlumnos());
        
        return cursoRepositorio.save(cursoExistente);
		
	}
	@Override
	public List<Curso> obtenerCursoporFechaFin(Date fechaFin){
		  return cursoRepositorio.findAll().stream()
		            .filter(curso -> curso.getFechaFin().equals(fechaFin))
		            .collect(Collectors.toList());
	}
	@Override
	public List<String> obtenerAlumnosPorDocente(Long docente_legajo){
		 return cursoRepositorio.findAll().stream()
		            .filter(curso -> curso.getDocente_legajo().getLegajo().equals(docente_legajo) )
		            .flatMap(curso -> curso.getAlumnos().stream())
		            .map(alumno -> alumno.getNombre())
		            .collect(Collectors.toList());
	}
}
