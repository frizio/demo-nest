import { Tasks } from './interfaces/tasks.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(
        @InjectModel('Task')
        private taskModel: Model<Tasks>,
    ) {}

    async getTasks() {
        return await this.taskModel.find();
    }

    async getTask(id: string) {
        return await this.taskModel.findById(id);
    }
    
}
