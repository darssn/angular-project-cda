import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from 'src/auth/auth.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    MatDialogModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
