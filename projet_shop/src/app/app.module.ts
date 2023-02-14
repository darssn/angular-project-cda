import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'src/auth/auth.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilModule } from 'src/accueil/accueil.module';
import { CatalogModule } from 'src/catalog/catalog.module';
import { CartModule } from 'src/cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccueilModule,
    Ng2SearchPipeModule,
    AuthModule,
    CatalogModule,
    Ng2SearchPipeModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
