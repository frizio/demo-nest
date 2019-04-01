import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller: Paths dell'applicazione
// Questo controller controlla la home /

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
