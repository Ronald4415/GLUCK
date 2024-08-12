import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { TabsPage } from './tabs/tabs.page';
import { InvitarAmigosPage } from './invitar-amigos/invitar-amigos.page';
import { FavsPage } from './favs/favs.page';
import { CategoryPage } from './category/category.page';
import { PointsPage } from './points/points.page';
import { AtencionAClientePage } from './atencion-a-cliente/atencion-a-cliente.page';
import { ProfilePage } from './profile/profile.page';
import { AddForm } from './addForm/addForm.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    // SharedModule,
  ],
  declarations: [
    TabsPage,
    InvitarAmigosPage,
    FavsPage,
    CategoryPage,
    PointsPage,
    AtencionAClientePage,
    ProfilePage,
    AddForm
  ]
})
export class PagesPageModule { }
