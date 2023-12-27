import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FotterComponent } from './fotter/fotter.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent,
        FotterComponent
    ],
  exports: [
    NavbarComponent,
    FotterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
