import { Model } from 'sequelize-typescript';
import { Task } from '../tasks/task.entity';
export declare class Note extends Model {
    note: string;
    task_id: number;
    task: Task;
}
