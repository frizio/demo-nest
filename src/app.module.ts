import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

// Modulo principale
// Modulo: contenitore di una parte dell'applicazione che racchiude una distinta funzionalità
// Modulo = Controller + Servizi

@Module({
  imports: [],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
