import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {AddComponent} from "./component/add/add.component";
import {UpdateComponent} from "./component/update/update.component";

const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
