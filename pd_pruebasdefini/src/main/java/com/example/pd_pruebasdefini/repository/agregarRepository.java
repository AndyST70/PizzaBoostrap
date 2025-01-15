package com.example.pd_pruebasdefini.repository;



import com.example.pd_pruebasdefini.models.pedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface agregarRepository extends JpaRepository <pedido, Long> {
}
