import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContaminatedGraphComponent} from "./contaminated-graph/contaminated-graph.component";

const routes: Routes = [
  { path: '', redirectTo: '/covid19/confirmed', pathMatch: 'full' },
  { path: 'covid19/:status', component: ContaminatedGraphComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
