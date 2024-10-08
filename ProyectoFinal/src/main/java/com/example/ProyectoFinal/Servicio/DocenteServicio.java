package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import com.example.ProyectoFinal.Entidad.Docente;

public interface DocenteServicio {
	public List<Docente> obtenerTodosLosDocentes();
	public Optional<Docente> obtenerUnDocente(Long legajo);
	public Docente guardarDocente(Docente nuevoDocente);
	public Docente modificarDocente(Long legajo, Docente docenteModificado);
	public void eliminarDocente(Long legajo);
	
	
}
