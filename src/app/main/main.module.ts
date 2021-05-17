import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { MainComponentsRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  declarations: [
    MainComponent,
    ShipComponent,
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
