import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ng-2Chart
import { ChartsModule } from 'ng2-charts';

import { PAGES_ROUTES } from './pages.routing';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grarficas1Component } from './grarficas1/grarficas1.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
import { DonuthComponent } from '../component/donuth/donuth.component';

// temporal

@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Grarficas1Component,
      PagesComponent,
      IncrementadorComponent,
      DonuthComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grarficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ],
  })

  export class PagesModule { }