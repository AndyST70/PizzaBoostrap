import { Routes } from '@angular/router';
import { AgregarclienteComponent } from './vistas/agregarcliente/agregarcliente.component';
import { AgregarpedidoComponent } from './vistas/agregarpedido/agregarpedido.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { MostrarpizzasComponent } from './vistas/mostrarpizzas/mostrarpizzas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Menu', pathMatch: 'full' },
  { path: 'agregarcliente', component: AgregarclienteComponent },
  { path: 'agregarpedido', component: AgregarpedidoComponent },
  { path: 'mostrarpedidos', component: MostrarpizzasComponent },
  { path: 'Menu', component: MenuComponent }
];
