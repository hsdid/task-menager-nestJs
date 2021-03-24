import { TasksService } from './tasks.service';
import { Task, Task as TaskEntity } from './task.entity';
import { TaskDto } from './dto/task.dto';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<TaskEntity>;
    create(task: TaskDto, req: any): Promise<TaskEntity>;
}
