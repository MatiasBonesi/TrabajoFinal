package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProyectoFinal.Entidad.Tema;
import com.example.ProyectoFinal.Repositorio.TemaRepositorio;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TemaServicioImp implements TemaServicio {
	private final TemaRepositorio temaRepositorio;
	@Autowired
	public TemaServicioImp(TemaRepositorio temaRepositorio){
		this.temaRepositorio = temaRepositorio;
	}
	@Override
	public List<Tema> obtenerTodosLosTemas(){
		return temaRepositorio.findAll();
	}
	@Override
	public Optional<Tema> obtenerUnTema(Long id){
		return temaRepositorio.findById(id);
	}
	@Override
	public Tema guardarTema(Tema temaNuevo) {
		return temaRepositorio.save(temaNuevo);
	}
	@Override
	public Tema modificarTema(Long id, Tema temaModificado) {
		Tema temaExistente = temaRepositorio.findById(id)
				.orElseThrow(()->new EntityNotFoundException("Tema no Encontrado id:"+id));//Busco al tema por id y en caso de no encontrarlo tira el error de excepcion
		temaExistente.setNombre(temaModificado.getNombre()); //Modifico los campos del tema
		temaExistente.setDescripcion(temaModificado.getDescripcion());
		return temaRepositorio.save(temaExistente);
	}
	@Override
	public void eliminarTema(Long id) {
		temaRepositorio.deleteById(id);
	}
}
