import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoggerService} from './services/logger/logger.service';
import {environment} from "../../environments/environment.hmr";
import {LoggerConfig} from "./services/logger/logger.config";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoggerService,
    ,{
      provide: LoggerConfig, useValue: environment.logger
    }

  ]
})
export class CoreModule {
}
