import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllComponent } from '../catalog/components/display-all/display-all.component';

const routes: Routes = [
  { path: '', component: DisplayAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
