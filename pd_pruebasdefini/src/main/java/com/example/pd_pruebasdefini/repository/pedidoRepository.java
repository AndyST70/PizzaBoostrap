package com.example.pd_pruebasdefini.repository;

import com.example.pd_pruebasdefini.clase.PedidoResumen;
import com.example.pd_pruebasdefini.models.pedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface  pedidoRepository extends JpaRepository <pedido, Long>  {
    
    @Query("SELECT new com.example.pd_pruebasdefini.clase.PedidoResumen("+
    "c.nombre, p.nombre, pd.cantidad, pd.fecha) "+
    "FROM pedido pd "+
    "JOIN cliente c ON pd.clienteid = c.id "+
    "JOIN pizza p ON pd.pizzaid = p.id "+
    "ORDER BY pd.fecha DESC")

    List<PedidoResumen> findAllPedidosResumen();

}
