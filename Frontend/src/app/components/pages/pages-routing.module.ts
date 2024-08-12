import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { FavsPage } from './favs/favs.page';
import { CategoryPage } from './category/category.page';
import { PointsPage } from './points/points.page';
import { AtencionAClientePage } from './atencion-a-cliente/atencion-a-cliente.page';
import { ProfilePage } from './profile/profile.page';
import { AddForm } from './addForm/addForm.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'tabs',
    component: TabsPage
  },
  {
    path: 'favs',
    component: FavsPage
  },
  {
    path: 'category',
    component: CategoryPage
  },
  {
    path: 'points',
    component: PointsPage
  },
  {
    path: 'atencion-a-cliente',
    component: AtencionAClientePage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'addForm',
    component: AddForm
  },
  {
    path: 'pages/tabs/tabs', // Nueva ruta agregada
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }

