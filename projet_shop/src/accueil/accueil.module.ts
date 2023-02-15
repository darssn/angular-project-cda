import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CatalogModule } from 'src/catalog/catalog.module';
import { CatalogRoutingModule } from 'src/catalog/catalog-routing.module';
import { HeaderModule } from 'src/header/header.module';
import { FooterModule } from 'src/footer/footer.module';

@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    CatalogModule,
    CatalogRoutingModule,
    HeaderModule,
    FooterModule,
  ],
})
export class AccueilModule {}
