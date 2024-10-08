package com.example.ProyectoFinal.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProyectoFinal.Entidad.Tema;


@Repository
public interface TemaRepositorio extends JpaRepository<Tema, Long> {

}
