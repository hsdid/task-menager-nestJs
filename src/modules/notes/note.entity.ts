import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from '../tasks/task.entity'

@Table
export class Note extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    note: string;


    @ForeignKey(() => Task)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    task_id: number;

    @BelongsTo(() => Task)
    task!: Task;

}