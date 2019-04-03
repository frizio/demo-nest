import { Tasks } from './interfaces/tasks.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(
        @InjectModel('task')
        private taskModel: Model<Tasks>,
    ) {}

}
