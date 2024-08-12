import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaClientePage } from './categoria-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaClientePageRoutingModule {}
