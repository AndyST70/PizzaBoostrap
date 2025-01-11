package com.example.pd_pruebasdefini.Services;


import com.example.pd_pruebasdefini.models.pizza;
import com.example.pd_pruebasdefini.repository.pizzasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Pizzasservices {   
    @Autowired

    private pizzasRepository pizzasRepository;

    //Mostrar pizzas
    public List<pizza> list_All() {
        return pizzasRepository.findAll();
    }
    
}
