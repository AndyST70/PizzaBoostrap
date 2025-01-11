package com.example.pd_pruebasdefini.models;

import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

import java.io.Serializable;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "cliente", schema = "bd_pruebas")

public class cliente implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false, length = 100)
    private String nombre;

    @Column (nullable = false, length = 100)
    private String apellido;

    @Column (nullable = false, length = 15)
    private String telefono;

    @Column (nullable = false, length = 100)
    private String direccion;

    @Column (nullable = false, length = 150)
    private String email;

}
