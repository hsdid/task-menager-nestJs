import { TaskDto } from './dto/task.dto';
import { Task } from './task.entity';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: typeof Task);
    create(task: TaskDto, userId: number): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: any): Promise<Task>;
    delete(id: any, userId: any): Promise<number>;
    update(id: any, data: any, userId: any): Promise<[number, Task[]]>;
}
