import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/accueil/components/accueil/accueil.component';
import { CategoryDisplayComponent } from '../catalog/components/category-display/category-display.component';
import { CartDisplayComponent } from '../cart/components/cart-display/cart-display.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'category/:id', component: CategoryDisplayComponent },
  { path: 'cart', component: CartDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
