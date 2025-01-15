import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  template: `
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ titulo }}</mat-card-title>
        <button mat-icon-button color="warn" aria-label="Pin note">
          <mat-icon>push_pin</mat-icon>
        </button>
      </mat-card-header>
      <mat-card-content>
        <p>{{ contenido }}</p>
      </mat-card-content>
      <mat-card-footer class="example-card-footer">
        <mat-chip-set aria-label="Etiquetas">
          <mat-chip color="primary">{{ etiqueta }}</mat-chip>
        </mat-chip-set>
        <div class="actions">
          <button mat-icon-button color="primary" aria-label="Edit">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button color="warn" aria-label="Delete">
            <mat-icon>delete</mat-icon>
          </button>
          <button mat-icon-button aria-label="Archive">
            <mat-icon>archive</mat-icon>
          </button>
        </div>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      .example-card {
        max-width : 100%;
        min-width: 250px;
        background-color:rgb(250, 170, 49);
        margin: 16px auto;
      }
      mat-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      mat-card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .actions {
        display: flex;
        gap: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaComponent {
  @Input() titulo: string = 'Título por Defecto';
  @Input() contenido: string = 'Contenido por defecto';
  @Input() etiqueta: string = 'Etiqueta';
}
