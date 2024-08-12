import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoDeCompraPage } from './estado-de-compra.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoDeCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoDeCompraPageRoutingModule {}
