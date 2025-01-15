package com.example.pd_pruebasdefini.Services;


import com.example.pd_pruebasdefini.repository.pizzasRepository;
import com.example.pd_pruebasdefini.repository.clienteRepository;
import com.example.pd_pruebasdefini.repository.pedidoRepository;

import com.example.pd_pruebasdefini.models.pedido;
import com.example.pd_pruebasdefini.models.cliente;
import com.example.pd_pruebasdefini.models.pizza;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.time.LocalDateTime;


@Service
public class agregarservices {
    @Autowired
    private pedidoRepository pedidoRep;

    @Autowired
    private clienteRepository clienteRep;

    @Autowired
    private pizzasRepository pizzasRep;

    //Agregar pedidos

    public pedido agregarPedido(Long clienteID, Long pizzaID, int cantidad ){
        Optional<cliente> cliente = clienteRep.findById(clienteID);

        if (cliente.isEmpty()){
            throw new RuntimeException("Cliente no encontrado");
        }

        Optional<pizza> pizza = pizzasRep.findById(pizzaID);
        if (pizza.isEmpty()){
            throw new RuntimeException("Pizza no encontrada");
        }

        pedido nuevopedido = new pedido();
        nuevopedido.setClienteid(clienteID);
        nuevopedido.setPizzaid(pizzaID);
        nuevopedido.setCantidad(cantidad);
        nuevopedido.setFecha(LocalDateTime.now());

        return pedidoRep.save(nuevopedido);
    }
}
