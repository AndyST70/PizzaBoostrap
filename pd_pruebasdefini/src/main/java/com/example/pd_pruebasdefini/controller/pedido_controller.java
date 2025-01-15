package com.example.pd_pruebasdefini.controller;


import com.example.pd_pruebasdefini.clase.PedidoResumen;
import com.example.pd_pruebasdefini.Services.pedidoservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class pedido_controller {
    
    @Autowired
    private pedidoservices pedidoService;
    
    @GetMapping("/listar")
    public List<PedidoResumen> listarPedidos() {
        return pedidoService.findAllPedidos();
    }

}
