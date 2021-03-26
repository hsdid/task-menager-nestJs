import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NoteDto } from '../notes/dto/note.dto'
import { NotesService } from './notes.service';
import { Note as NoteEntity } from './note.entity'; 

@Controller('notes')
export class NotesController {
    constructor(private readonly noteService: NotesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() note: NoteDto, @Request() req): Promise<NoteEntity> {
        return await this.noteService.create(note, req.body.taskId);
    }

    @Get(':id')
    async findOne(@Param('id') id:number): Promise<NoteEntity> {
        const note = await this.noteService.findOne(id);

        if (!note) {
            throw new NotFoundException('This Note Dosent exist');
        }
        return note;
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() note: NoteDto): Promise<NoteEntity> {
        const { numberOfAffectedRows, updatedNote } = await this.noteService.update(id, note);

        if ( numberOfAffectedRows === 0 ) {
            throw new NotFoundException('This Task dosent exist');
        }
        return updatedNote;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req): Promise<String> {
        const deleted = await this.noteService.delete(id);

        if ( deleted === 0) {
            throw new NotFoundException('This Task doesn\'t exist');
        }
        return 'Successfully deleted';
    }



    
}
