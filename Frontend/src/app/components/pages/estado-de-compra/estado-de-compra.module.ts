import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoDeCompraPageRoutingModule } from './estado-de-compra-routing.module';

import { EstadoDeCompraPage } from './estado-de-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoDeCompraPageRoutingModule
  ],
  declarations: [EstadoDeCompraPage]
})
export class EstadoDeCompraPageModule {}
