import { Injectable } from '@nestjs/common';

// Servizio: generalmente eseguono la logica dell'applicazione

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!!';
  }
}
