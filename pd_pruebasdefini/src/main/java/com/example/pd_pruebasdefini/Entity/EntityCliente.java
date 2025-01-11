package com.example.pd_pruebasdefini.Entity;

import com.example.pd_pruebasdefini.models.cliente;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Component;


@Component
public class EntityCliente {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public cliente insertarCliente(String nombre, String apellido, String telefono, String email, String direccion){
        cliente nuevoCliente = new cliente();
        nuevoCliente.setNombre(nombre);
        nuevoCliente.setApellido(apellido);
        nuevoCliente.setTelefono(telefono);
        nuevoCliente.setEmail(email);
        nuevoCliente.setDireccion(direccion);

        entityManager.persist(nuevoCliente);
        return nuevoCliente;
    }
}
