package com.example.ProyectoFinal.Repositorio;



import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ProyectoFinal.Entidad.Curso;

@Repository
public interface CursoRepositorio extends JpaRepository<Curso,Long> {
	 @Query("SELECT c FROM Curso c WHERE c.fechaFin >= :currentDate")
	    List<Curso> findCursosVigentes(Date currentDate);
}
