package com.example.ProyectoFinal.Servicio;


import java.sql.Date;

import java.util.List;
import java.util.Optional;

import com.example.ProyectoFinal.Entidad.Curso;

public interface CursoServicio {
	public List<Curso> obtenerTodosLosCursos();
	public Optional<Curso> obtenerUnCurso(Long id);
	public Curso guardarCurso(Curso curso);
	public Curso actualizarCurso(Long id,Curso cursomodificado );
	public void eliminarCurso(Long id);
	public List<Curso> obtenerCursoporFechaFin(Date fechaFin);
	public List<Curso> obtenerCursosVigentes();
	public List<String> obtenerAlumnosPorDocente(Long docente_legajo);
}
