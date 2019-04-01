import { Tasks } from './interfaces/tasks.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    // Dummy data ( from db en production )
    tasks: Tasks[] = [
        {
            id: 1,
            title: 'Task one',
            description: 'the task one',
            done: true,
        },
        {
            id: 2,
            title: 'Task two',
            description: 'the task two',
            done: true,
        },
        {
            id: 3,
            title: 'Task three',
            description: 'the task three',
            done: false,
        },
    ];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        return this.tasks.find( task => task.id === id );
    }

}
