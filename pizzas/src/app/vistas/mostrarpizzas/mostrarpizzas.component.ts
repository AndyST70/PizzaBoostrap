import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mostrarpizzas',
  standalone: true,
  imports: [
    MatTableModule,
    MatDividerModule

  ],
  templateUrl: './mostrarpizzas.component.html',
  styleUrl: './mostrarpizzas.component.css'
})
export class MostrarpizzasComponent {
  pedidos: any[] = [];
  displayedColumns: string[] = [ 'cliente', 'producto', 'cantidad', 'fecha'];

  constructor(private api: ApiService) {

    this.api.listar_pedidos().subscribe((data) => {
      console.log(data);
      this.pedidos = data;
    });
  }
}
