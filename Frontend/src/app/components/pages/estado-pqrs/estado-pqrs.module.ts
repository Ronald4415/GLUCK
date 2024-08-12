import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoPqrsPageRoutingModule } from './estado-pqrs-routing.module';

import { EstadoPqrsPage } from './estado-pqrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoPqrsPageRoutingModule
  ],
  declarations: [EstadoPqrsPage]
})
export class EstadoPqrsPageModule {}
