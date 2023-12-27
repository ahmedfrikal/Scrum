import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import { UpdateComponent } from './component/update/update.component';
import {FormsModule} from "@angular/forms";
import { ProjetDateFormatxlPipe } from './pipe/projet-date-formatxl.pipe';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    ProjetDateFormatxlPipe
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    FormsModule,

  ]
})
export class ProjetModule { }
