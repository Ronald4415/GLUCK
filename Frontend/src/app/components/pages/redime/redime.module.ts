import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedimePageRoutingModule } from './redime-routing.module';

import { RedimePage } from './redime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedimePageRoutingModule
  ],
  declarations: [RedimePage]
})
export class RedimePageModule {}
