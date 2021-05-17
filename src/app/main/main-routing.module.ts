import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipComponent } from './ship/ship.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'ships', component: ShipComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainComponentsRoutingModule { }
