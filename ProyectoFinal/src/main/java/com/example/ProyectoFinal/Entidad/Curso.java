package com.example.ProyectoFinal.Entidad;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="cursos")
public class Curso {
	@Id
	private Long id;
	@Column(name="tema_id")
	private Long tema_id;
	@Column(name="fechaInicio")
	private Date fechaInicio;
	@Column(name="fechaFin")
	private Date fechaFin;
	@Column(name="docente_legajo")
	private Long docente_legajo;
	@Column(name="precio")
	private Double precio;
	
		@ManyToMany
    @JoinTable(
        name = "curso_alumno",
        joinColumns = @JoinColumn(name = "curso_id"),
        inverseJoinColumns = @JoinColumn(name = "alumno_id")
    )
    private List<Alumno> alumnos;
	
		
	public Curso(Long id, Long tema_id, Date fechaInicio, Date fechaFin, Long docente_legajo, Double precio,
				List<Alumno> alumnos) {
			super();
			this.id = id;
			this.tema_id = tema_id;
			this.fechaInicio = fechaInicio;
			this.fechaFin = fechaFin;
			this.docente_legajo = docente_legajo;
			this.precio = precio;
			this.alumnos = alumnos;
		}

	public Curso() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTema_id() {
		return tema_id;
	}

	public void setTema_id(Long tema_id) {
		this.tema_id = tema_id;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Date getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}

	public Long getDocente_legajo() {
		return docente_legajo;
	}

	public void setDocente_legajo(Long docente_legajo) {
		this.docente_legajo = docente_legajo;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public List<Alumno> getAlumnos() {
		return alumnos;
	}

	public void setAlumnos(List<Alumno> alumnos) {
		this.alumnos = alumnos;
	}
	
	
}
