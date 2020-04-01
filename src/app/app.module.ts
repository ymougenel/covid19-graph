import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphComponent} from './graph/graph.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStackOverflow, faGithub, faMedium} from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        GraphComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        ChartsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faGithub);
    }
}
