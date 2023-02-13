import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from 'src/accueil/components/accueil/accueil.component';
import { AuthComponent } from 'src/auth/components/auth/auth.component';
import { DisplayAllComponent } from '../catalog/components/display-all/display-all.component';

const routes: Routes = [
  { path:'', component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
