import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return 'Retrieving alle the tasks';
    }

    @Post()
    createTask(@Body() task): string {
        console.log(task);
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
