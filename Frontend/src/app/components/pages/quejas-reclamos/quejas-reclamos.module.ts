import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuejasReclamosPageRoutingModule } from './quejas-reclamos-routing.module';

import { QuejasReclamosPage } from './quejas-reclamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuejasReclamosPageRoutingModule
  ],
  declarations: [QuejasReclamosPage]
})
export class QuejasReclamosPageModule {}
