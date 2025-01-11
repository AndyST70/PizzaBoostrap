package com.example.pd_pruebasdefini.repository;

import com.example.pd_pruebasdefini.models.cliente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;



@Repository
public interface clienteRepository extends JpaRepository<cliente, Long> {
        @Query("SELECT c FROM cliente c WHERE c.email = ?1")
        cliente findByEmail(String email);

}