import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
 {path:"test",component:TestComponent},
  { path: "Projet", loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: "Sprint", loadChildren: () => import('./sprint/sprint.module').then(m => m.SprintModule) },
  { path: "UserStories", loadChildren: () => import('./user-story/user-story.module').then(m => m.UserStoryModule) },
  { path: "Developers", loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
