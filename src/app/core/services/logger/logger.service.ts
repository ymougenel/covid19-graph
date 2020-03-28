import { Injectable } from '@angular/core';

import { LoggerConfig } from './logger.config';
import { LogLevel } from './loglevel';

@Injectable()
export class LoggerService {
  private config: { level: LogLevel, toasts?: boolean };

  constructor(private loggerConf: LoggerConfig) {
  }

  public verbose(message: string) {
    if (this.loggerConf.logLevel <= LogLevel.VERBOSE) {
      if (this.loggerConf.showConsole) {
        console.log(`[VERBOSE] - ${this.nowDateTime()} : \n\t${message}`);
      }
    }
  }

  public debug(message: string) {
    if (this.loggerConf.logLevel <= LogLevel.DEBUG) {
      if (this.loggerConf.showConsole) {
        console.debug(`[DEBUG] - ${this.nowDateTime()} : \n\t${message}`);
      }

    }
  }

  public info(message: string) {
    if (this.loggerConf.logLevel <= LogLevel.INFO) {
      if (this.loggerConf.showConsole) {
        console.info(`[INFO] - ${this.nowDateTime()} : \n\t${message}`);
      }

    }
  }

  public warning(message: string) {
    if (this.loggerConf.logLevel <= LogLevel.WARNING) {
      if (this.loggerConf.showConsole) {
        console.warn(`[WARNING] - ${this.nowDateTime()} : \n\t${message}`);
      }

    }
  }

  public error(message: string) {
    if (this.loggerConf.logLevel <= LogLevel.ERROR) {
      if (this.loggerConf.showConsole) {
        console.error(`[ERROR] - ${this.nowDateTime()} : \n\t${message}`);
      }
    }
  }

  private nowDateTime() {
    const currentdate: Date = new Date();
    return `${currentdate.getDate()}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()}` +
      ` at ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  }
}
