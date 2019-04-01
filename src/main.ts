import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// File principale che avvia dell'applicazione
// NestFactory è il servizio che avvia l'applicazione

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
