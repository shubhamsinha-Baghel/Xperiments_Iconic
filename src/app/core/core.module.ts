import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClientService
} from './extensions/index';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService,
    HttpClientService
  ]
})
export class CoreModule { }
