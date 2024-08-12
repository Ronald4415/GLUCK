import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuejasReclamosPage } from './quejas-reclamos.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasReclamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejasReclamosPageRoutingModule {}
