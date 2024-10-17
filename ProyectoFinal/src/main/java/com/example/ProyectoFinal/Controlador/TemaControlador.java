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

import com.example.ProyectoFinal.Entidad.Tema;
import com.example.ProyectoFinal.Servicio.TemaServicio;

@RestController
public class TemaControlador {
	@Autowired
	private TemaServicio temaServicio;
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/temas")
	public List<Tema> obtenerTodosLosTemas(){
		return temaServicio.obtenerTodosLosTemas();
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/temas/{id}")
	public Optional<Tema> obtenerUnTema(@PathVariable Long id){
		return temaServicio.obtenerUnTema(id);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/temas")
	public ResponseEntity<Tema> agregarTema(@RequestBody Tema temaNuevo){
		Tema nuevoTema = temaServicio.guardarTema(temaNuevo);
		return new ResponseEntity<>(nuevoTema,HttpStatus.CREATED);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PutMapping("/temas/{id}")
	public ResponseEntity<Tema> modificarTema(@PathVariable Long id,@RequestBody Tema temaModificado){
		Tema temaActualizado = temaServicio.modificarTema(id, temaModificado);
		return new ResponseEntity<>(temaActualizado,HttpStatus.OK);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/temas/{id}")
	public ResponseEntity<Void> eliminarTema(@PathVariable Long id){
		temaServicio.eliminarTema(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
