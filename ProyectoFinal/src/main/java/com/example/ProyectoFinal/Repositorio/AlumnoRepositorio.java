package com.example.ProyectoFinal.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoFinal.Entidad.Alumno;

@Repository
public interface AlumnoRepositorio extends JpaRepository<Alumno,Long> {

}
