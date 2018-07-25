import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-recipe' },
  { path: 'create-recipe', component: CreateRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
