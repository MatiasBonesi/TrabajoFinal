package com.example.ProyectoFinal.Controlador;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProyectoFinal.Entidad.Curso;
import com.example.ProyectoFinal.Servicio.CursoServicio;

@RestController
public class CursoControlador {
	@Autowired
	private CursoServicio cursoServicio;
   
	@GetMapping("/")
    public String funcionMostrar(){
		return "Bienvenidos";
	}
	@CrossOrigin(origins="http://localhost:4200")
    @GetMapping("/cursos")
	public List<Curso> obtenerTodosLosCursos(){
    	return cursoServicio.obtenerTodosLosCursos();
    }
	@CrossOrigin(origins="http://localhost:4200")
    @GetMapping("/cursos/{id}")
    public Optional<Curso> obtenerUnCurso(@PathVariable Long id){
    	return cursoServicio.obtenerUnCurso(id);
    }
	@CrossOrigin(origins="http://localhost:4200")
    @GetMapping("/cursos/fecha-fin")
    public List<Curso> obtenerCursosPorFechaFin(@RequestParam("fecha") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFin) {
        return cursoServicio.obtenerCursoporFechaFin(java.sql.Date.valueOf(fechaFin));
    }
	@CrossOrigin(origins="http://localhost:4200")
    @GetMapping("/docente/{docente_legajo}/alumnos")
    public ResponseEntity<List<String>> obtenerAlumnosPorDocente(@PathVariable("docente_legajo") Long docente_legajo) {
        List<String> alumnos = cursoServicio.obtenerAlumnosPorDocente(docente_legajo);
        if (alumnos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(alumnos);
    }

	@CrossOrigin(origins="http://localhost:4200")
    @PostMapping("/cursos")
    public ResponseEntity<Curso> guardarCurso(@RequestBody Curso curso){
    	Curso nuevoCurso = cursoServicio.guardarCurso(curso);
    	return new ResponseEntity<>(nuevoCurso,HttpStatus.CREATED);
    }
	@CrossOrigin(origins="http://localhost:4200")
    @PutMapping("/cursos/{id}")
    public ResponseEntity<Curso> modificarCurso(@PathVariable Long id, @RequestBody Curso curso){
    	Curso cursoActualizado= cursoServicio.actualizarCurso(id, curso);
    	return new ResponseEntity<>(cursoActualizado,HttpStatus.OK);
    }
	@CrossOrigin(origins="http://localhost:4200")
    @DeleteMapping("/cursos/{id}")
    public ResponseEntity<Void> eliminarCurso(@PathVariable Long id){
    	cursoServicio.eliminarCurso(id);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } 
}
