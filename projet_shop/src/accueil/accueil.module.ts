import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CatalogModule } from 'src/catalog/catalog.module';
import { CatalogRoutingModule } from 'src/catalog/catalog-routing.module';
import { HeaderModule } from 'src/header/header.module';
import { FooterModule } from 'src/footer/footer.module';
import { HeaderComponent } from 'src/header/components/header/header.component';
import { FooterComponent } from 'src/footer/components/footer/footer.component';
import { DisplayAllComponent } from 'src/catalog/components/display-all/display-all.component';


@NgModule({
  declarations: [
    AccueilComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    CatalogModule,
    CatalogRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AccueilModule { }
