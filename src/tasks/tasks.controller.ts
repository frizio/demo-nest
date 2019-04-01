import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskDto } from './dto/task-dto';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {hello: string} {
        return {hello: 'world'};
    }

    @Post()
    createTask(@Body() task: TaskDto): string {
        console.log(task);
        console.log(task.description);
        console.log(task.done);
        return 'Creating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `Deleting the task ${id}`;
    }

    @Put()
    updateTask(): string {
        return 'Updating a task';
    }

}
