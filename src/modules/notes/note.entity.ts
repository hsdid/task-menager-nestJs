import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from '../tasks/task.entity'

@Table
export class Note extends Model{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    note: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })

    @ForeignKey(() => Task)
    task_id!: number;

    @BelongsTo(() => Task)
    task!: Task;

}