import { Inject, Injectable } from '@nestjs/common';
import { Note } from '../notes/note.entity';
import { TASK_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService  {
    constructor(@Inject(TASK_REPOSITORY) private readonly taskRepository: typeof Task ) {}

    async create(task: TaskDto, userId: number): Promise<Task> {
        
        return await this.taskRepository.create<Task>({...task, userId});
    }

    async findAll(): Promise<Task[]> {
        return await this.taskRepository.findAll<Task>({
            include: [{ model:User, attributes: { exclude: ['password'] } }],
        });
    }
    
    async findOne(id): Promise<Task> {
        return await this.taskRepository.findOne({
            where: {id},
            include: [{ model: Note }],
        });
    }

    async delete(id, userId) {
        return await this.taskRepository.destroy({where: {id, userId}});
    }

    async update(id, data, userId){
        const [numberOfAffectedRows, [updatedTask]] = await this.taskRepository.update({ ...data }, { where: { id, userId }, returning: true });
        return { numberOfAffectedRows, updatedTask };
    }

}
