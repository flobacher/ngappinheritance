import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// use the complete Module
import { ProductModule } from '@base/product/product.module';

import { AppRoutingModule } from './app-routing.module';
// clone the module to enable overriding/excluding components
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from '@base/home/home.component';
import { HeroComponent } from '@base/hero/hero.component';

@NgModule({
  declarations: [RootComponent, HeroComponent, HeaderComponent, HomeComponent, NavComponent, SidebarComponent],
  imports: [BrowserModule, SharedModule, ProductModule, AppRoutingModule],
  bootstrap: [RootComponent]
})
export class AppModulePro {}
