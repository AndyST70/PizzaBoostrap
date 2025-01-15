package com.example.pd_pruebasdefini.controller;


import com.example.pd_pruebasdefini.Services.agregarservices;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/pedidos")
public class agregar_controller {
    
    @Autowired
    private agregarservices agregarService;

    @PostMapping("/agregar")
    public ResponseEntity<String> agregarPedido(
        @RequestParam Long clienteid,
        @RequestParam Long pizzaid,
        @RequestParam int cantidad
       
    ){
        try {
            agregarService.agregarPedido(clienteid, pizzaid, cantidad);
            return ResponseEntity.ok("El pedido ha sido agregado correctamente");
        } catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
