import { Table, Column, Model, DataType, ForeignKey, BelongsTo,HasMany } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Note } from '../notes/note.entity';
@Table
export class Task extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;
    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isComplete: boolean;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Note)
    notes?: Note
} 