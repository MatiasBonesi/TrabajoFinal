package com.example.ProyectoFinal.Entidad;


import java.time.LocalDate;
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
@Table(name="cursos")//Pongo el nombre de la tabla de la base de datos
public class Curso {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Esto es para que vaya autoincrementando el id cada vez que se crea un nuevo curso
	private Long id;
	@ManyToOne//Especifica la relacion con la tabla temas
	@JoinColumn(name="tema_id")
	private Tema tema;
	@Column(name="fechaInicio")
	private LocalDate fechaInicio;
	@Column(name="fechaFin")
	private LocalDate fechaFin;
	@ManyToOne//Especifica la relacion con la tabla docentes
	@JoinColumn(name="docente_legajo")
	private Docente docente_legajo;
	@Column(name="precio")
	private Double precio;
	
		@ManyToMany //Especifica la relacion muchos a muchos con la tabla alumnos
    @JoinTable(
        name = "curso_alumno",
        joinColumns = @JoinColumn(name = "curso_id"),//Especifica la columna que hace referencia a Curso
        inverseJoinColumns = @JoinColumn(name = "alumno_id")//Especifica la columna que hace referencia a Alumno
    )
    private List<Alumno> alumnos;
	
		
	public Curso(Long id, Tema tema, LocalDate fechaInicio, LocalDate fechaFin, Docente docente_legajo, Double precio,
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

	public LocalDate getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(LocalDate fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public LocalDate getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(LocalDate fechaFin) {
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
