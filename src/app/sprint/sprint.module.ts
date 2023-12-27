import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintRoutingModule } from './sprint-routing.module';
import { ListSprintComponent } from './component/list-sprint/list-sprint.component';
import { AddSprintComponent } from './component/add-sprint/add-sprint.component';
import { UpdateSprintComponent } from './component/update-sprint/update-sprint.component';


@NgModule({
  declarations: [
    ListSprintComponent,
    AddSprintComponent,
    UpdateSprintComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule
  ]
})
export class SprintModule { }
