import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task as TaskEntity } from './task.entity'
import { AuthGuard } from '@nestjs/passport';
import { TaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    async findAll() {
        return await this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:number): Promise<TaskEntity> {
        const task = await this.taskService.findOne(id);

        if (!task){
            throw new NotFoundException('This Task dosent exist');
        }
        return task;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() task: TaskDto, @Request() req): Promise<TaskEntity> {
        return await this.taskService.create(task, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() task: TaskDto, @Request() req): Promise<TaskEntity> {
        const { numberOfAffectedRows, updatedTask } = await this.taskService.update(id, task, req.user.id);

        if ( numberOfAffectedRows === 0 ) {
            throw new NotFoundException('This Task dosent exist');
        }
        return updatedTask;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req): Promise<String> {
        
        const deleted = await this.taskService.delete(id, req.user.id);

        if (deleted === 0) {
            throw new NotFoundException('This Task doesn\'t exist');
        }
        return 'Successfully deleted';
    }
}
