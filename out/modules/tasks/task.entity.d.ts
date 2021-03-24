import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Note } from '../notes/note.entity';
export declare class Task extends Model {
    title: string;
    isComplete: boolean;
    userId: number;
    user: User;
    notes?: Note;
}
