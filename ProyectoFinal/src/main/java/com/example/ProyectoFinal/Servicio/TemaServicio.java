package com.example.ProyectoFinal.Servicio;

import java.util.List;
import java.util.Optional;

import com.example.ProyectoFinal.Entidad.Tema;

public interface TemaServicio {
	public List<Tema> obtenerTodosLosTemas();
	public Optional<Tema> obtenerUnTema(Long id);
	public Tema guardarTema(Tema temaNuevo);
	public Tema modificarTema(Long id, Tema temaModificado);
	public void eliminarTema(Long id);
}
