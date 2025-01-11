package com.example.pd_pruebasdefini.repository;


import com.example.pd_pruebasdefini.models.pizza;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;



@Repository
public interface pizzasRepository extends JpaRepository<pizza, Long> {

      // Mostrar Pizzas
      @Query("SELECT p FROM pizza p ORDER BY p.nombre")
      List<pizza> listAllPizzas();


}

