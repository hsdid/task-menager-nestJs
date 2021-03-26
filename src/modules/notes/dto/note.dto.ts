import { IsNotEmpty, MinLength } from 'class-validator';

export class NoteDto {
    @IsNotEmpty()
    @MinLength(3)
    readonly note:string;
}