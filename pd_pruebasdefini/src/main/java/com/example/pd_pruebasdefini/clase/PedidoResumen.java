package com.example.pd_pruebasdefini.clase;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
public class PedidoResumen {
    private String clienteNombre;
    private String pizzaNombre;
    private int cantidad;
    private LocalDateTime fecha;
}
