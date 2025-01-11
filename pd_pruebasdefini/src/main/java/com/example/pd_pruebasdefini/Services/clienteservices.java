package com.example.pd_pruebasdefini.Services;

import com.example.pd_pruebasdefini.repository.clienteRepository;
import com.example.pd_pruebasdefini.Entity.EntityCliente;
import com.example.pd_pruebasdefini.models.cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class clienteservices {
    @Autowired
    private EntityCliente crearClienteEntity;    
    
    @Autowired
    private clienteRepository clienteRepo;

    public cliente insertarCliente(String nombre, String apellido, String telefono, String email, String direccion){
        cliente clienteExistente = clienteRepo.findByEmail(email);
        if (clienteExistente != null) {
            throw new IllegalArgumentException("El correo ya está registrado: " + email);
        }
        return crearClienteEntity.insertarCliente(nombre, apellido, telefono, email, direccion);
    }
}
