import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/accueil/components/accueil/accueil.component';
import { CategoryDisplayComponent } from '../catalog/components/category-display/category-display.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'category/:id', component: CategoryDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
