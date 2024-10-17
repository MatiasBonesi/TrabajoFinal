package com.example.ProyectoFinal.Controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoFinal.Entidad.Alumno;
import com.example.ProyectoFinal.Servicio.AlumnoServicio;

@RestController
public class AlumnoControlador {
	@Autowired
	private AlumnoServicio alumnoServicio;
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/alumnos")
	public List<Alumno> obtenerTodosLosAlumnos(){
		return alumnoServicio.obtenerTodosLosAlumnos();
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/alumnos/{id}")
	public Optional<Alumno> obtenerAlumnoPorId(@PathVariable Long id){
		return alumnoServicio.obtenerAlumnoPorId(id);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/alumnos")
	public ResponseEntity<Alumno> guardarAlumno(@RequestBody Alumno alumno){
		Alumno alumnoNuevo = alumnoServicio.guardarAlumno(alumno);
		return new ResponseEntity<>(alumnoNuevo,HttpStatus.CREATED);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PutMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> actualizarAlumno(@PathVariable Long id, @RequestBody Alumno alumno){
		Alumno alumnoActualizado = alumnoServicio.actualizarAlumno(id, alumno);
		return new ResponseEntity<>(alumnoActualizado,HttpStatus.OK);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/alumnos/{id}")
	public ResponseEntity<Alumno> eliminarAlumno(@PathVariable Long id){
		alumnoServicio.eliminarAlumno(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}