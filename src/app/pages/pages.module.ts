import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routing';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grarficas1Component } from './grarficas1/grarficas1.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Grarficas1Component,
      PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grarficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
      ],
  })

  export class PagesModule { }