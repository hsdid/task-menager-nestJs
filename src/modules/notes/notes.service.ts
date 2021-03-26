import { Inject, Injectable } from '@nestjs/common';
import { Task } from '../tasks/task.entity';
import { NOTE_REPOSITORY } from 'src/core/constants';
import { NoteDto } from './dto/note.dto';
import { Note } from './note.entity';


@Injectable()
export class NotesService {
    constructor(@Inject(NOTE_REPOSITORY) private readonly noteRepository: typeof Note) {}

    async create(note: NoteDto, task_id: number): Promise<Note> {
        return await this.noteRepository.create<Note>({...note, task_id});
    }

    async findAll(task_id: number): Promise<Note[]> {
        return await this.noteRepository.findAll<Note>({
            where: {task_id: task_id}
        })
    }

    async findOne(id): Promise<Note> {
        return await this.noteRepository.findOne({
            where:{id},
            include: [{model: Task}]
        })
    } 

    async update(id, data) {
        const [numberOfAffectedRows, [updatedNote]] = await this.noteRepository.update({...data}, {where:{id}});
        return { numberOfAffectedRows, updatedNote };
    }

    async delete(id) {
        return await this.noteRepository.destroy({where:{id}});
    }

    
}
