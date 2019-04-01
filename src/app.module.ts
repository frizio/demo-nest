import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modulo principale
// Modulo: contenitore di una parte dell'applicazione che racchiude una distinta funzionalità
// Modulo = Controller + Servizi

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
