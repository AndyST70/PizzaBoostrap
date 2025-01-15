import {  ChangeDetectionStrategy, Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-agregarcliente',
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
          changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './agregarcliente.component.html',
  styleUrl: './agregarcliente.component.css',

})


export class AgregarclienteComponent {
  clienteForm: FormGroup;
  mensaje : string = '';
  mostrar_mensaje : boolean = false;

  constructor(private FormBuilder: FormBuilder, private api: ApiService) {
    this.clienteForm = this.FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  onSubmitCliente():void{
    if(this.clienteForm.valid){
      this.api.agregar_cliente(this.clienteForm.value).subscribe({
        next: () => {
          this.mensaje = 'Cliente agregado exitosamente';
          this.mostrar_mensaje = true;

          setTimeout(() => {
            this.mostrar_mensaje = false;
          }, 3000);
          alert('Cliente agregado');
          this.clienteForm.reset();
        },
        error: (err) => console.error(err)
      })
    }
  }
}
