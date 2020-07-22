import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from "./productos/productos.component"; 
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { AgregarproductosComponent } from "./agregarproductos/agregarproductos.component";
import { AdminComponent} from "./admin/admin.component";
import { from } from 'rxjs';

const routes: Routes = [
  { path: "productos", component: ProductosComponent },
  { path: "productos/agregar", component: AgregarproductosComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
