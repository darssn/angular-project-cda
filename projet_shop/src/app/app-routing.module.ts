import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/accueil/components/accueil/accueil.component';
import { DisplayAllComponent } from '../catalog/components/display-all/display-all.component';
import { CartDisplayComponent } from '../cart/components/cart-display/cart-display.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'catalog', component: DisplayAllComponent },
  { path: 'cart', component: CartDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
