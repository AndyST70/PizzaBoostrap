package com.example.pd_pruebasdefini.controller;

import com.example.pd_pruebasdefini.models.pizza;
import com.example.pd_pruebasdefini.Services.Pizzasservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Getpizzas")

public class pizza_controller {
    @Autowired
    private Pizzasservices pizz_serv;

    @GetMapping
    public List<pizza> list_All() {
        return pizz_serv.list_All();
    }
    
}
