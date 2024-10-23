package com.example.ProyectoFinal.Entidad;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cursos")
public class Curso {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name="tema_id")
	private Tema tema;
	@Column(name="fechaInicio")
	private Date fechaInicio;
	@Column(name="fechaFin")
	private Date fechaFin;
	@ManyToOne
	@JoinColumn(name="docente_legajo")
	private Docente docente_legajo;
	@Column(name="precio")
	private Double precio;
	
		@ManyToMany
    @JoinTable(
        name = "curso_alumno",
        joinColumns = @JoinColumn(name = "curso_id"),
        inverseJoinColumns = @JoinColumn(name = "alumno_id")
    )
    private List<Alumno> alumnos;
	
		
	public Curso(Long id, Tema tema, Date fechaInicio, Date fechaFin, Docente docente_legajo, Double precio,
				List<Alumno> alumnos) {
			super();
			this.id = id;
			this.tema = tema;
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

	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
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

	public Docente getDocente_legajo() {
		return docente_legajo;
	}

	public void setDocente_legajo(Docente docente_legajo) {
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
