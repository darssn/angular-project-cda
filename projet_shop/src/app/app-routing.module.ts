import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/auth/components/auth/auth.component';
import { DisplayAllComponent } from '../catalog/components/display-all/display-all.component';

const routes: Routes = [
  {path:'/auth' , component: AuthComponent}, { path: '/catalog', component: DisplayAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
