package com.example.ProyectoFinal.Servicio;



import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.example.ProyectoFinal.Entidad.Curso;

public interface CursoServicio {
	public List<Curso> obtenerTodosLosCursos();
	public Optional<Curso> obtenerUnCurso(Long id);
	public Curso guardarCurso(Curso curso);
	public Curso actualizarCurso(Long id,Curso cursomodificado );
	public void eliminarCurso(Long id);
	public List<Curso> obtenerCursoporFechaFin(LocalDate fechaFin);
	public Set<String> obtenerAlumnosPorDocente(Long docente_legajo);
}
