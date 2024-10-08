package com.example.ProyectoFinal.Entidad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="docentes")
public class Docente {
	@Id
	private Long legajo;
	@Column(name="nombre")
	private String nombre;
	
	public Docente() {}

	
	public Docente(Long legajo, String nombre) {
		super();
		this.legajo = legajo;
		this.nombre = nombre;
	}


	public Long getLegajo() {
		return legajo;
	}

	public void setLegajo(Long legajo) {
		this.legajo = legajo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
