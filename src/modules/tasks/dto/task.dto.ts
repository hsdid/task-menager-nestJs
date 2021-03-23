import { IsNotEmpty, MinLength } from 'class-validator';

export class TaskDto {
    @IsNotEmpty()
    @MinLength(3)
    readonly title:string;
    @IsNotEmpty()
    readonly isComplete:boolean;
    // @IsNotEmpty()
    // readonly userId:number;
}