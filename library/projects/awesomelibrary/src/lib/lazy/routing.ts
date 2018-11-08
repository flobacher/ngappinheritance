import { Routes } from '@angular/router';
import { LazyViewComponent } from './lazy-view/lazy-view.component';

export const routes: Routes = [{ path: '', component: LazyViewComponent, pathMatch: 'full' }];
