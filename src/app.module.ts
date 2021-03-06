import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from "@nestjs/mongoose";

// Modulo principale
// Modulo: contenitore di una parte dell'applicazione che racchiude una distinta funzionalità
// Modulo = Controller + Servizi

@Module({
  imports: [ TasksModule, MongooseModule.forRoot('mongodb://user:password@localhost:27017/test', {useNewUrlParser: true} ) ],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
