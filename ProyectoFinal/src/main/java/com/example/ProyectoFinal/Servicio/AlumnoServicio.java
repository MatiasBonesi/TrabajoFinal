package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import com.example.ProyectoFinal.Entidad.Alumno;

public interface AlumnoServicio {
	public List<Alumno> obtenerTodosLosAlumnos();
	public Optional<Alumno> obtenerAlumnoPorId(Long id);
	public Alumno guardarAlumno(Alumno nuevoAlumno);
	public Alumno actualizarAlumno(Long id,Alumno alumnoModificado);
	public void eliminarAlumno(Long id);
}
