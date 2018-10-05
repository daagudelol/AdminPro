import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent        
    ]
})

export class SharedModule {}
