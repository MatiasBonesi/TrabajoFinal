package com.example.ProyectoFinal.Repositorio;






import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.ProyectoFinal.Entidad.Curso;

@Repository
public interface CursoRepositorio extends JpaRepository<Curso,Long> {
	
}
