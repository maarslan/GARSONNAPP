import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { StreamsPage } from '../streams/streams.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'streams',
        loadChildren: () => import('../streams/streams.module').then(m => m.StreamsPageModule),
      }]
  },
  {
    path: 'company/:id',
    loadChildren: () => import('../company/company.module').then(m => m.CompanyPageModule)
  },
  {
    path: '',
    redirectTo: '/streams'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
