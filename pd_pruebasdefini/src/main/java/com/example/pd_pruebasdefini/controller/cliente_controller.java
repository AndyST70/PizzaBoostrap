package com.example.pd_pruebasdefini.controller;


import com.example.pd_pruebasdefini.models.cliente;
import com.example.pd_pruebasdefini.Services.clienteservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/clientes")

public class cliente_controller {
    
    @Autowired
    private clienteservices clienteService;

    @PostMapping("/crear")
    public ResponseEntity<String> crearCliente(@RequestBody cliente nuevoCliente) {
        try {
            clienteService.insertarCliente(
                nuevoCliente.getNombre(),
                nuevoCliente.getApellido(),
                nuevoCliente.getTelefono(),
                nuevoCliente.getEmail(),
                nuevoCliente.getDireccion()
            );
            return ResponseEntity.ok("El cliente ha sido creado correctamente.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}