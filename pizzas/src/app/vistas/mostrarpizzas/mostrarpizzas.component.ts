import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mostrarpizzas',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './mostrarpizzas.component.html',
  styleUrl: './mostrarpizzas.component.css'
})
export class MostrarpizzasComponent implements OnInit, AfterViewInit{
  pedidos: any[] = [];
  displayedColumns: string[] = [ 'cliente', 'producto', 'cantidad', 'fecha'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.listar_pedidos().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error al obtener pedidos:', err);
      }
    });
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
