import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'ships', component: ShipsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainComponentsRoutingModule { }
