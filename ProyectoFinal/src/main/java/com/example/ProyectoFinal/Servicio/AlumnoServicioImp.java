package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProyectoFinal.Entidad.Alumno;
import com.example.ProyectoFinal.Repositorio.AlumnoRepositorio;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AlumnoServicioImp implements AlumnoServicio {
	private final AlumnoRepositorio alumnoRepositorio;
	@Autowired
	public AlumnoServicioImp(AlumnoRepositorio alumnoRepositorio) {
		this.alumnoRepositorio = alumnoRepositorio;
	}
	@Override
	public List<Alumno> obtenerTodosLosAlumnos(){
		return alumnoRepositorio.findAll();
	}
	@Override
	public Optional<Alumno> obtenerAlumnoPorId(Long id){
		return alumnoRepositorio.findById(id);
	}
	@Override
	public Alumno guardarAlumno(Alumno nuevoAlumno) {
		return alumnoRepositorio.save(nuevoAlumno);
	}
	@Override
	public Alumno actualizarAlumno(Long id,Alumno alumnoModificado) {
		Alumno alumnoExistente = alumnoRepositorio.findById(id) 
				.orElseThrow(()-> new EntityNotFoundException("Alumno no encontrado con id:"+id));
		alumnoExistente.setNombre(alumnoModificado.getNombre());
		alumnoExistente.setFechaNacimiento(alumnoModificado.getFechaNacimiento());
		return alumnoRepositorio.save(alumnoExistente);
	}
	@Override
	public void eliminarAlumno(Long id) {
		 alumnoRepositorio.deleteById(id);
	}
}
