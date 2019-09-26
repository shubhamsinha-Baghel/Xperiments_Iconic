import { Injectable } from '@angular/core';
import {
  NGXLogger,
  CustomNGXLoggerService,
  NgxLoggerLevel
} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private _logger: NGXLogger;

  constructor(customLogger: CustomNGXLoggerService) { 
    this._logger = customLogger.create(
      {
          //serverLoggingUrl: '/api/logs',
          level: NgxLoggerLevel.TRACE,
          serverLogLevel: NgxLoggerLevel.ERROR
      });
  }
  // TODO - maintain array of last 100 log info messages
    info(message: string) {
        this._logger.info(message);
    }

    // TODO - append the message with last 100 log info messages
    // Note - logger.error to be called only when we want log to post to server
    error(message: string) {
        this._logger.error(message);
    }
}
