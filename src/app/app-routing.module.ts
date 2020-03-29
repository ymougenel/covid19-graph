import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GraphComponent} from "./graph/graph.component";


const routes: Routes = [
  { path: '', redirectTo: '/covid19/toto', pathMatch: 'full' },
  { path: 'covid19/:status', component: GraphComponent },
  // { path: 'covid19/:status', component: GraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
