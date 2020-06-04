import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsariosComponent } from './component/usarios/usarios.component';


const routes: Routes = [
  {
    path: "usuarios", component: UsariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
