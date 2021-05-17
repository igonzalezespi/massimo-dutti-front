import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { MainComponentsRoutingModule } from './main-routing.module';
import { ShipsComponent } from './ships/ships.component';
import { ShipsDetailsComponent } from './ships/ships-details/ships-details.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    ShipsComponent,
    ShipsDetailsComponent,
  ],
  imports: [
    CommonModule,
    MainComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
  ],
})
export class MainModule { }
