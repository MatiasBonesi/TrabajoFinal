package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProyectoFinal.Entidad.Docente;
import com.example.ProyectoFinal.Repositorio.DocenteRepositorio;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DocenteServicioImp implements DocenteServicio {
	private final DocenteRepositorio docenteRepositorio;
	@Autowired
	public DocenteServicioImp(DocenteRepositorio docenteRepositorio) {
		this.docenteRepositorio = docenteRepositorio;
	}
	@Override
	public List<Docente> obtenerTodosLosDocentes(){
		return docenteRepositorio.findAll();
		}
	@Override
	public Optional<Docente> obtenerUnDocente(Long legajo){
		return docenteRepositorio.findById(legajo);
	}
	@Override
	public Docente guardarDocente(Docente nuevoDocente) {
		return docenteRepositorio.save(nuevoDocente);
	}
	@Override
	public Docente modificarDocente(Long legajo, Docente docenteModificado) {
		Docente docenteExistente = docenteRepositorio.findById(legajo)
				.orElseThrow(()->new EntityNotFoundException("docente no encontrado legajo:"+ legajo));// Busco al docente por legajo y en caso de no encontrarlo tira el error de excepcion
		docenteExistente.setNombre(docenteModificado.getNombre());// Se modifica el nombre del Docente
		return docenteRepositorio.save(docenteExistente);
	}
	@Override
	public void eliminarDocente(Long legajo) {
		docenteRepositorio.deleteById(legajo);
	}
}
