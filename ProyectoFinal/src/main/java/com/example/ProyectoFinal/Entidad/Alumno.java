package com.example.ProyectoFinal.Entidad;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="alumnos")
public class Alumno {
	@Id
	private Long id;
	@Column(name="nombre")
	private String nombre;
	@Column(name="fechaNacimiento")
	private Date fechaNacimiento;
	public Alumno() {}
	
	
	public Alumno(Long id, String nombre, Date fechaNacimiento) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	
}
