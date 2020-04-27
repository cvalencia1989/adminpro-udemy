import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grarficas1Component } from './grarficas1/grarficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'}},
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dasborad'}},
      { path: 'graficas1', component: Grarficas1Component, data: { titulo: 'Graficas'}},
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'}},
      { path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes del Tema'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

