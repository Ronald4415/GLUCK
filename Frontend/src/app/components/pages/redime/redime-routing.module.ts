import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedimePage } from './redime.page';

const routes: Routes = [
  {
    path: '',
    component: RedimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedimePageRoutingModule {}
