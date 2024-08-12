import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaClientePageRoutingModule } from './categoria-cliente-routing.module';

import { CategoriaClientePage } from './categoria-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaClientePageRoutingModule
  ],
  declarations: [CategoriaClientePage]
})
export class CategoriaClientePageModule {}
