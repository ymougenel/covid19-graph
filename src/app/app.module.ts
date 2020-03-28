import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContaminatedGraphComponent } from './contaminated-graph/contaminated-graph.component';
import { MessageService } from './core/services/message.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {DataService} from "./core/services/data.service";
import {MessagesComponent} from "./messages/messages.component";
import {ChartsModule} from "ng2-charts";
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import {FormatterService} from "./core/services/formatter.service";

@NgModule({
  declarations: [
    AppComponent,
    ContaminatedGraphComponent,
    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [MessageService, DataService, FormatterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
