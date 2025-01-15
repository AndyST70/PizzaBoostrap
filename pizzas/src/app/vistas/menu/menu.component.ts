import { Component } from '@angular/core';
import { TarjetaComponent } from "./tarjeta/tarjeta.component";
import {MatDividerModule} from '@angular/material/divider';

import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TarjetaComponent,
    MatDividerModule,
    NgFor
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  pizzas : any[] = [];

  constructor (private api: ApiService){}

  ngOnInit(): void {
    this.api.listar_pizzas().subscribe({
      next: (data: any[]) => {
        this.pizzas = data;
      },
      error: (err) => {
        console.error('Error al listar pizzas:', err);
      }
    });
  }
}
