import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-agregarpedido',
  standalone: true,
  imports: [
            MatSelectModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,
            ReactiveFormsModule,
            HttpClientModule,
            MatDividerModule
  ],
  templateUrl: './agregarpedido.component.html',
  styleUrl: './agregarpedido.component.css'
})
export class AgregarpedidoComponent {
      clienteForm: FormGroup;
      mensaje : string = '';
      mostrar_mensaje : boolean = false;

constructor (private FormBuilder: FormBuilder, private api: ApiService) {
  this.clienteForm = this.FormBuilder.group({
    clienteid: ['', Validators.required],
    pizzaid: ['', Validators.required],
    cantidad: ['', Validators.required]
  });
}

onSubmitAPedido():void{
  if(this.clienteForm.valid){
    const {clienteid, pizzaid, cantidad} = this.clienteForm.value;

    this.api.agregar_pedido(clienteid, pizzaid, cantidad).subscribe({
      next: () => {
        this.mensaje = 'Pedido agregado exitosamente';
        this.mostrar_mensaje = true;

        setTimeout(() => {
          this.mostrar_mensaje = false;
        }, 3000);

        alert('Pedido agregado');
        this.clienteForm.reset();
      },

       error: (err) => {
          console.error(err);
          this.mensaje = 'Hubo un error al agregar el pedido';
          this.mostrar_mensaje = true;

          setTimeout(() => {
            this.mostrar_mensaje = false;
          }, 3000);
        },
      });
    }
  }
}
