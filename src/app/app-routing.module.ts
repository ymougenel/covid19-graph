import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GraphComponent} from './graph/graph.component';


const routes: Routes = [
    {path: '', redirectTo: '/graph/confirmed', pathMatch: 'full'},
    {path: 'graph/:status', component: GraphComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
