import { Tasks } from './interfaces/tasks.interface';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskDto } from './dto/task-dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private taskService: TasksService,
    ) {}

    @Get()
    getTasks(): Promise<Tasks[]> {
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id): Promise<Tasks> {
        return this.taskService.getTask(id);
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

    @Put(':id')
    updateTask(@Param('id') id, @Body() task: TaskDto): string {
        console.log(task);
        return `Updating the task ${id}`;
    }

}
