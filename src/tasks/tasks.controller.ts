import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskDto } from './dto/task-dto';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return 'Retrieving alle the tasks';
    }

    @Post()
    createTask(@Body() task: TaskDto): string {
        console.log(task);
        console.log(task.description);
        console.log(task.done);
        
        return 'Creating a task';
    }

    @Put()
    updateTask(): string {
        return 'Updating a task';
    }

    @Delete()
    deleteTask(): string {
        return 'Deteting a task';
    }

}
