import { Model } from 'sequelize-typescript';
import { Task } from '../tasks/task.entity';
export declare class User extends Model {
    name: string;
    email: string;
    password: string;
    gender: string;
    tasks?: Task[];
}
