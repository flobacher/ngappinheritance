/// #if JIT
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ProductModule } from 'projects/awesomeshop/src/app/product/product.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {
  declarations as baseDeclarations,
  imports as baseImports,
  AppModule as BaseAppModule
} from 'projects/awesomeshop/src/app/app.module';
import { merge } from '../utils';

// override components and add additional ones
const declarationOverrides = [HeaderComponent, RootComponent, NavComponent, SidebarComponent];
const declarations = merge(baseDeclarations, declarationOverrides);
// const declarations = [RootComponent, HeroComponent, HeaderComponent, HomeComponent, NavComponent, SidebarComponent];

// override the shared and the routing module
// const moduleOverrides = [AppRoutingModule, SharedModule];
// remove the advertisment module since we don't use the component here
// const modulesToRemove = ['AdvertismentModule'];
// the product features module is neither overriden nor removed so it gets cloned
// const importsTango = merge(baseImports, moduleOverrides, modulesToRemove);
const imports = [BrowserModule, SharedModule, ProductModule, AppRoutingModule];
// console.log('imports tango', importsTango, imports, imports === importsTango);
// const imports = importsTango;

@NgModule({
  declarations: declarations as any[],
  imports: imports as any[],
  bootstrap: [RootComponent]
})
export class AppModulePro extends BaseAppModule {}
/// #endif

/// #if AOT
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { HeroComponent } from 'projects/awesomeshop/src/app/hero/hero.component';
// import { HomeComponent } from 'projects/awesomeshop/src/app/home/home.component';
// import { RootComponent } from './root/root.component';
// import { NavComponent } from './nav/nav.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';

// import { ProductModule } from 'projects/awesomeshop/src/app/product/product.module';
// import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './shared/shared.module';

// export const declarations = [
//   HeaderComponent,
//   RootComponent,
//   NavComponent,
//   SidebarComponent,
//   HomeComponent,
//   HeroComponent,
// ];

// export const imports = [BrowserModule, SharedModule, ProductModule, AppRoutingModule];

// @NgModule({
//   declarations: declarations as any[],
//   imports: imports as any[],
//   bootstrap: [RootComponent],
// })
// export class AppModule {}
/// #endif
