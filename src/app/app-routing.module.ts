import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContaminatedGraphComponent} from "./contaminated-graph/contaminated-graph.component";

const routes: Routes = [
  { path: '', redirectTo: '/contaminated/France', pathMatch: 'full' },
  { path: 'contaminated/:id', component: ContaminatedGraphComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
