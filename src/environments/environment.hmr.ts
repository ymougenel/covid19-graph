
import {LogLevel} from "../app/core/services/logger/loglevel";

export const environment = {
  production: false,
  hmr: true,
  logger: {
    logLevel: LogLevel.VERBOSE,
    showConsole: true,
  }
}
