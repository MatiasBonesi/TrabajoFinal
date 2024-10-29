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

import com.example.ProyectoFinal.Entidad.Docente;
import com.example.ProyectoFinal.Servicio.DocenteServicio;

@RestController
public class DocenteControlador {
	@Autowired
	private DocenteServicio docenteServicio;
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/docentes")
	public List<Docente> obtenerTodosLosDoscentes(){
		return docenteServicio.obtenerTodosLosDocentes();
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/docentes/{legajo}")
	public Optional<Docente> obtenerUnDocente(@PathVariable Long legajo){
		return docenteServicio.obtenerUnDocente(legajo);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/docentes")
	public ResponseEntity<Docente> guardarDocente(@RequestBody Docente docente){
		Docente docenteNuevo = docenteServicio.guardarDocente(docente);
		return new ResponseEntity<>(docenteNuevo,HttpStatus.CREATED); //Indica que el docente se creó de forma correcta.
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PutMapping("/docentes/{legajo}")
	public ResponseEntity<Docente> actualizarDocente(@PathVariable Long legajo,@RequestBody Docente docente){
		Docente docenteActualizado = docenteServicio.modificarDocente(legajo,docente);
		return new ResponseEntity<>(docenteActualizado,HttpStatus.OK); //Indica que la solicitud se procesó correctamente
	}
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/docentes/{legajo}")
	public ResponseEntity<Docente> eliminarDocente(@PathVariable Long legajo){
		docenteServicio.eliminarDocente(legajo);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT); //Indica que la solicitud fue exitosa, pero que no hay contenido para devolver en el cuerpo de la respuesta
	}
	
}
