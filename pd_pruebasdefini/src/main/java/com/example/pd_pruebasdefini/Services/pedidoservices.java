package com.example.pd_pruebasdefini.Services;

import com.example.pd_pruebasdefini.clase.PedidoResumen;
import com.example.pd_pruebasdefini.repository.pedidoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class pedidoservices {
    @Autowired
    private pedidoRepository pedidoRepository;

    public List<PedidoResumen> findAllPedidos(){
        return pedidoRepository.findAllPedidosResumen();
    }

}
