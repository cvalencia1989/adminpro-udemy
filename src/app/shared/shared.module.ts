import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebardComponent,
        BreadcrumbsComponent,
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebardComponent,
        BreadcrumbsComponent,
    ]
  })

  export class SharedModule { }