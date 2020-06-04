import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsariosComponent } from './component/usarios/usarios.component';
import { LuisComponent } from './component/luis/luis.component';


const routes: Routes = [
  {
    path: "usuarios", component: UsariosComponent
  },
  {
    path: "luis", component: LuisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
