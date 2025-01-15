package com.example.pd_pruebasdefini.models;

import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "pedido", schema = "bd_pruebas")
public class pedido implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false)
    private Long clienteid;

    @Column (nullable = false)
    private Long pizzaid;

    @Column (nullable = false)
    private int cantidad;

    @Column (nullable = false)
    private LocalDateTime fecha;

}
