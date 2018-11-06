import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdvertismentModule } from './advertisment/advertisment.module';
import { ProductModule } from './product/product.module';
import { RootComponent } from './root/root.component';
import { SharedModule } from './shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

export const declarations = [RootComponent, HeroComponent, HeaderComponent, HomeComponent, NavComponent];
export const imports = [BrowserModule, SharedModule, AdvertismentModule, ProductModule, AppRoutingModule];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
