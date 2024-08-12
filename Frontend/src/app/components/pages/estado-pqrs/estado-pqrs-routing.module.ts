import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoPqrsPage } from './estado-pqrs.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoPqrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoPqrsPageRoutingModule {}
